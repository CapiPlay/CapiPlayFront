import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Settings.css'
import { useNavigate } from 'react-router-dom';

//componentes
import HeaderSettings from '../../components/header/Header'
import Input from "../../components/input/Input";
import InputDisabled from "../../components/inputDisabled/InputDisabled"
import InputFile from "../../components/inputFile/InputFile"
import Button from "../../components/button/Button";
import TextArea from '../../components/inputTextArea/InputTextArea';
// import Side_Bar from '../home/side_bar/Side_Bar'

//Service
import UsuarioService from '../../service/Usuario/UsuarioService';

//cookies
import Cookies from 'js-cookie';

//imagem
import ImagemPadrao from '../../assets/image/404_NotFound.png'

const Settings = ({ }) => {

    const [settingsData, setSettingsData] = useState({
        email: '',
        dataNascimento: '',
        nome: '',
        perfil: '',
        senha: '',
        descricao: '',
        foto: '',
        senhaNova: ''
    });

    const [fileChanged, setFileChanged] = useState(false)
    const [image, setImage] = useState(null)
    const [registerData, setRegisterData] = useState(settingsData)

    // const [usuario, setUsuario] = useState({});
    const { idUsuario } = useParams();

    const userProfile = () => {
        const userToken = Cookies.get('token');
        if (userToken) {
            try {
                const tokenPayload = userToken.split('.')[1];
                const decodedPayload = atob(tokenPayload);
                const userLogin = JSON.parse(decodedPayload);
                if (userLogin) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                console.error("Erro ao analisar o token:", error);
                return false;
            }
        } else {
            return false;
        }
    }


    useEffect(() => {
        UsuarioService.detalhes()
            .then((data) => {
                setSettingsData(data)
                setImage("http://10.4.96.50:7000/api/usuario/static/" + data.foto)
            })
            .catch((error) => console.error('Erro ao buscar usuario:', error));
    }, [idUsuario]);

    const handleUpdateUser = (event) => {
        event.preventDefault();
        try {
            const settings = new FormData();
            setRegisterData({ ...registerData, foto: image })
            settings.append("nome", settingsData.nome);
            settings.append("perfil", settingsData.perfil);
            if (settingsData.senhaNova)
                settings.append("senha", settingsData.senhaNova);
            settings.append("descricao", settingsData.descricao);
            settings.append("foto1", settingsData.foto)
            UsuarioService.editar(settings, settingsData.foto).then((response) => {
                window.location.reload();
            });
        } catch (error) {
            alert("Ocorreu um erro ao editar o usuário");
            console.error('Error:', error);
        }
    };

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            }
            reader.readAsDataURL(file);
            setFileChanged(true);
            console.log(file)
            setSettingsData({ ...settingsData, foto: file })
        }
    }

    const handleRemoveFile = (e) => {
        e.preventDefault();
        setFileChanged(!fileChanged);
        setImage(ImagemPadrao);
        console.log(image);
        setSettingsData({ ...settingsData, foto: '' });
    };



    const renderMobileView = () => (
        <>
            <div className='settings__container'>
                <HeaderSettings />
                <div className="settings__form">
                <div className="profile__settings__pic__desktop" style={{ backgroundImage: `url(${image})` }}> </div>
                    <div className='settings__box__image__options'>
                        <InputFile
                            accept="image/*"
                            className='settings__image__options__buttons__desktop'
                            label={"Foto de perfil"}
                            onChange={handleFileChange}
                            removeFile={handleRemoveFile}
                            file={image}
                            key={fileChanged.toString()}
                        >
                            Alterar/
                        </InputFile>
                        <button className='settings__image__options__buttons' onClick={handleRemoveFile}>Remover</button>
                    </div>
                    <div className="settings__field">
                        <InputDisabled
                            name={"email"}
                            placeholder={"E-mail"}
                            value={settingsData.email}
                            type={"text"}
                            required={true}
                            className='settings__input'
                        />
                        <InputDisabled
                            name={"dataNascimento"}
                            placeholder={"Data de Nascimento"}
                            value={settingsData.dataNascimento}
                            type={"date"}
                            required={true}
                            className='settings__input'
                        />
                        <Input
                            placeholder={"Nome de usuário"}
                            name={"nome"}
                            value={settingsData.nome}
                            onChange={(e) => setSettingsData({ ...settingsData, nome: e.target.value })}
                            type={"text"}
                            required={true}
                            className='settings__input'
                        />
                    </div>
                    <div className="settings__field">
                        <Input
                            placeholder={"Nome do canal"}
                            name={"perfil"}
                            value={settingsData.perfil}
                            onChange={(e) => setSettingsData({ ...settingsData, perfil: e.target.value })}
                            type={"text"}
                            required={true}
                            className='settings__input__desktop'
                        />
                    </div>
                    <div className="settings__field">
                        <Input
                            name={"senha"}
                            placeholder={"Senha nova"}
                            onChange={(e) => setSettingsData({ ...settingsData, senhaNova: e.target.value })}
                            type={"password"}
                            required={true}
                            className='settings__input'
                        />
                    </div>
                    <div className="settings__field">
                        <TextArea
                            name={"descricao"}
                            placeholder={"Descrição do canal"}
                            value={settingsData.descricao}
                            onChange={(e) => setSettingsData({ ...settingsData, descricao: e.target.value })}
                            required={true}
                            className="settings__input"
                        />
                    </div>
                </div>
                <br />
                <hr className="solid" />
                <div className='settings__options__buttons__div'>
                    <Button label={"Cancelar"} className='settings__options__buttons__cancel' principal={true} />
                    <Button onClick={handleUpdateUser} label={"Confirmar"} className='settings__options__buttons__confirm' principal={false} />
                </div>
            </div>
        </>
    )
    const renderDesktopView = () => (
        <>
            {/* <Side_Bar /> */}
            <HeaderSettings userLogin={userProfile()} />
            <div className='settings__container__desktop'>
                <div className="settings__form__desktop">
                    <div className="profile__settings__pic__desktop" style={{ backgroundImage: `url(${image})` }}> </div>
                    <div className='settings__box__image__options__desktop'>
                        <InputFile
                            accept="image/*"
                            className='settings__image__options__buttons__desktop'
                            label={"Foto de perfil"}
                            onChange={handleFileChange}
                            removeFile={handleRemoveFile}
                            file={image}
                            key={fileChanged.toString()}
                        >
                            Alterar/
                        </InputFile>
                        <button className='settings__image__options__buttons__desktop' onClick={handleRemoveFile}>Remover</button>
                    </div>
                    <div className='settings__input__container__desktop'>
                        <div className='settings__input__box'>
                            <div className="settings__field__desktop">
                                <InputDisabled
                                    name={"email"}
                                    placeholder={"E-mail"}
                                    value={settingsData.email}
                                    type={"text"}
                                    required={true}
                                    className='settings__input'
                                />
                            </div>
                            <div className="settings__field__desktop">
                                <InputDisabled
                                    name={"dataNascimento"}
                                    placeholder={"Data de Nascimento"}
                                    value={settingsData.dataNascimento}
                                    type={"date"}
                                    required={true}
                                    className='settings__input'
                                />
                            </div>
                            <div className="settings__field__desktop"></div>
                            <Input
                                placeholder={"Nome de usuário"}
                                name={"nome"}
                                value={settingsData.nome}
                                onChange={(e) => setSettingsData({ ...settingsData, nome: e.target.value })}
                                type={"text"}
                                required={true}
                                className='settings__input__desktop'
                            />
                            <div className="settings__field__desktop">
                                <Input
                                    placeholder={"Nome do canal"}
                                    name={"perfil"}
                                    value={settingsData.perfil}
                                    onChange={(e) => setSettingsData({ ...settingsData, perfil: e.target.value })}
                                    type={"text"}
                                    required={true}
                                    className='settings__input__desktop'
                                />
                            </div>
                        </div>
                        <div className='settings__input__box__description'>
                            <div className="settings__field__desktop">
                                <Input
                                    name={"senha"}
                                    placeholder={"Senha nova"}
                                    onChange={(e) => setSettingsData({ ...settingsData, senhaNova: e.target.value })}
                                    type={"password"}
                                    required={true}
                                    className='settings__input__desktop'
                                />
                            </div>
                            <div className="settings__field__desktop">
                                <TextArea
                                    name={"descricao"}
                                    placeholder={"Descrição do canal"}
                                    value={settingsData.descricao}
                                    onChange={(e) => setSettingsData({ ...settingsData, descricao: e.target.value })}
                                    required={true}
                                    className="settings__input"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="solid" />
            <div className='settings__options__buttons__container'>
                <div className='settings__options__buttons__div__desktop'>
                    <Button label={"Cancelar"} className='settings__options__buttons__cancel__desktop' principal={false} />
                    <Button onClick={handleUpdateUser} label={"Confirmar"} className='settings__options__buttons__confirm__desktop' principal={true} />
                </div>
            </div>
        </>
    )
    const renderTabletView = () => (
        <>
            <div className='settings__container__tablet'>
                <HeaderSettings />
                <div className="settings__form__tablet">
                <div className="profile__settings__pic__desktop" style={{ backgroundImage: `url(${image})` }}> </div>                    <div className='settings__box__image__options__tablet'>
                        <InputFile
                            accept="image/*"
                            className='settings__image__options__buttons__tablet'
                            label={"Foto de perfil"}
                            onChange={handleFileChange}
                            removeFile={handleRemoveFile}
                            file={image}
                            key={fileChanged.toString()}
                        >
                            Alterar/
                        </InputFile>
                        <button className='settings__image__options__buttons__tablet' onClick={handleRemoveFile}>Remover</button>
                    </div>
                    <div className='settings__input__container__tablet'>
                        <div className='settings__input__box'>
                            <div className="settings__field__desktop">
                                <InputDisabled
                                    name={"email"}
                                    placeholder={"E-mail"}
                                    value={settingsData.email}
                                    type={"text"}
                                    required={true}
                                    className='settings__input'
                                />
                            </div>
                            <div className="settings__field__desktop">
                                <InputDisabled
                                    name={"dataNascimento"}
                                    placeholder={"Data de Nascimento"}
                                    value={settingsData.dataNascimento}
                                    type={"date"}
                                    required={true}
                                    className='settings__input'
                                />
                            </div>
                            <div className="settings__field__tablet">
                                <Input
                                    placeholder={"Nome de usuário"}
                                    name={"nome"}
                                    value={settingsData.nome}
                                    onChange={(e) => setSettingsData({ ...settingsData, nome: e.target.value })}
                                    type={"text"}
                                    required={true}
                                    className='settings__input__desktop'
                                />
                            </div>
                            <div className="settings__field__tablet">
                                <Input
                                    placeholder={"Nome do canal"}
                                    name={"perfil"}
                                    value={settingsData.perfil}
                                    onChange={(e) => setSettingsData({ ...settingsData, perfil: e.target.value })}
                                    type={"text"}
                                    required={true}
                                    className='settings__input__desktop'
                                />
                            </div>
                        </div>
                        <div className='settings__input__box'>
                            <div className="settings__field__tablet">
                                <Input
                                    name={"senha"}
                                    placeholder={"Senha nova"}
                                    onChange={(e) => setSettingsData({ ...settingsData, senhaNova: e.target.value })}
                                    type={"password"}
                                    required={true}
                                    className='settings__input__desktop'
                                />
                                <TextArea
                                    name={"descricao"}
                                    placeholder={"Descrição do canal"}
                                    value={settingsData.descricao}
                                    onChange={(e) => setSettingsData({ ...settingsData, descricao: e.target.value })}
                                    required={true}
                                    className="settings__input"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="solid" />
                <div className='settings__options__buttons__tablet'>
                    <div className='settings__options__buttons__div__tablet'>
                        <Button label={"Cancelar"} className='settings__options__buttons__cancel__tablet' principal={false} />
                        <Button onClick={handleUpdateUser} label={"Confirmar"} className='settings__options__buttons__confirm__tablet' principal={true} />
                    </div>
                </div>
            </div>
        </>
    )
    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktopView();
        } else if (screenSize.width < 900 && screenSize.width > 500) {
            return renderTabletView();
        } else {
            return renderMobileView();
        }
    };
    return <>{getViewToRender()}</>;
}
export default Settings