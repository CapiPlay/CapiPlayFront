import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Settings.css'
import { useNavigate } from 'react-router-dom';

//imagem
import ProfileImage from '../../assets/image/img_base_miniatura.png'

//componentes
import HeaderSettings from '../../components/header/Header'
import Input from "../../components/input/Input";
import InputDisabled from "../../components/inputDisabled/InputDisabled"
import Button from "../../components/button/Button";
import TextArea from '../../components/inputTextArea/InputTextArea';
import Side_Bar from '../home/side_bar/Side_Bar'

//Service
import UsuarioService from '../../service/Usuario/UsuarioService';

//cookies
import Cookies from 'js-cookie';

const Settings = ({ }) => {

    const navigate = useNavigate();

    const [settingsData, setSettingsData] = useState({
        email: '',
        dataNascimento: '',
        nome: '',
        perfil: '',
        senha: '',
        descricao: ''
    });

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
                console.log(data)
            })
            .catch((error) => console.error('Erro ao buscar usuario:', error));
    }, [idUsuario]);


    const [novaSenha, setNovaSenha] = useState("")
    const [senhaInformada, setSenhaInformada] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const [isModalImageOpen, setIsModalImageOpen] = useState(false);

    const openImageModal = () => {
        setIsModalImageOpen(true);
    };

    const closeImageModal = () => {
        setIsModalImageOpen(false);
    };

    const handleUpdateUser = () => {
        if(settingsData.senha.length >= 6 && settingsData.senha.length <= 20){
            try {
                const settings = new FormData();
                settings.append("nome", settingsData.nome);
                settings.append("perfil", settingsData.perfil);
                settings.append("senha", settingsData.senha);
                settings.append("descricao", settingsData.descricao);
                console.log("Conteúdo do settingsData:");
                for (let pair of settings.entries()) {
                    console.log(pair[0] + ": " + pair[1]);
                }
                const response = UsuarioService.editar(settings);
                alert("Usuario editado com sucesso")
                window.location.reload();
            } catch (error) {
                alert("Ocorreu um erro ao editar o usuario")
                console.error('Error:', error);
            }
        } else {
            alert("A senha deve conter entre 6 e 20 caracteres, letra maiuscula, letra minuscula e ao menos 1 caracter especial");
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


    const renderMobileView = () => (
        <>
            <div className='settings__container'>
                <HeaderSettings />
                <div className="settings__form">
                    <img src={ProfileImage} className='profile__settings' />
                    <div className='settings__box__image__options'>
                        <button className='settings__image__options__buttons'>Alterar</button>
                        <button className='settings__image__options__buttons' onClick={openImageModal}>Remover</button>
                        {isModalImageOpen && (
                            <>
                                <div className='modal__overlay_mobile'>
                                    <div className='modal__content'>
                                        <p className='text'>Tem certeza que deseja remover sua foto?</p>
                                        <div className='modal__buttons'>
                                            <Button onClick={closeImageModal} label={"Cancelar"} className='settings__options__buttons__cancel__tablet' principal={false} />
                                            <Button label={"Confirmar"} className='settings__options__buttons__confirm__tablet' principal={true} />
                                        </div>
                                    </div>
                                </div>
                                <div className='background'></div>
                            </>
                        )}
                    </div>
                    <div className="settings__field">
                        <InputDisabled
                            placeholder={"E-mail"}
                            value={settingsData.email}
                            type={"text"}
                            required={true}
                            className='settings__input'
                        />
                        <InputDisabled
                            placeholder={"Data de Nascimento"}
                            value={settingsData.dataNascimento}
                            type={"date"}
                            required={true}
                            className='settings__input'
                        />
                        <Input
                            enable={true}
                            placeholder={"Nome de usuário"}
                            value={settingsData.nomeUsuario}
                            onChange={(e) => setSettingsData({ ...settingsData, nomeUsuario: e.target.value })}
                            type={"text"}
                            required={true}
                            className='settings__input'
                        />
                    </div>
                    <div className="settings__field">
                        <Input
                            placeholder={"Nome do canal"}
                            value={settingsData.nomeCanal}
                            onChange={(e) => setSettingsData({ ...settingsData, nomeCanal: e.target.value })}
                            type={"text"}
                            required={true}
                            className='settings__input'
                        />
                    </div>
                    <div className="settings__field">
                        {senhaInformada != settingsData.senha ? (
                            <Input
                                placeholder={"Senha antiga"}
                                value={senhaInformada}
                                onChange={(e) => setSenhaInformada(e.target.value)}
                                type={"password"}
                                required={true}
                                className='settings__input__desktop'
                            />
                        ) : (
                            <InputDisabled
                                placeholder={"Senha antiga"}
                                type={"password"}
                                required={true}
                                className='settings__input'
                            />
                        )}
                        {senhaInformada != "" && senhaInformada == settingsData.senhaAtual ? (
                            <Input
                                placeholder={"Nova senha"}
                                value={novaSenha}
                                onChange={(e) => setNovaSenha(e.target.value)}
                                type={"password"}
                                required={true}
                                className='settings__input'
                            />
                        ) : (
                            <InputDisabled
                                placeholder={"Nova senha"}
                                value={novaSenha}
                                type={"date"}
                                required={true}
                                className='settings__input'
                            />
                        )}
                    </div>
                    <div className="settings__field">
                        <TextArea
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
                    <Button onClick={openModal} label={"Cancelar"} className='settings__options__buttons__cancel' principal={true} />
                    <Button onClick={handleUpdateUser} label={"Confirmar"} className='settings__options__buttons__confirm' principal={false} />
                </div>
                {isModalOpen && (
                    <>
                        <div className='modal__overlay_mobile'>
                            <div className='modal__content'>
                                <p className='text'>Tem certeza que deseja cancelar suas alterações?</p>
                                <div className='modal__buttons'>
                                    <Button onClick={closeModal} label={"Cancelar"} className='settings__options__buttons__cancel__tablet' principal={false} />
                                    <Button label={"Confirmar"} className='settings__options__buttons__confirm__tablet' principal={true} />
                                </div>
                            </div>
                        </div>
                        <div className='background'></div>
                    </>
                )}
            </div>
        </>
    )
    const renderDesktopView = () => (
        <>
            {/* <Side_Bar /> */}
            <HeaderSettings userLogin={userProfile()} />
            <div className='settings__container__desktop'>
                <div className="settings__form__desktop">
                    <img src={ProfileImage} className='profile__settings' />
                    <div className='settings__box__image__options__desktop'>
                        <button className='settings__image__options__buttons__desktop'>Alterar</button>
                        <button className='settings__image__options__buttons__desktop' onClick={openImageModal}>Remover</button>
                        {isModalImageOpen && (
                            <>
                                <div className='modal__overlay'>
                                    <div className='modal__content'>
                                        <p className='text'>Tem certeza que deseja remover sua foto de perfil?</p>
                                        <div className='modal__buttons'>
                                            <Button onClick={closeImageModal} label={"Cancelar"} className='settings__options__buttons__cancel__tablet' principal={false} />
                                            <Button label={"Confirmar"} className='settings__options__buttons__confirm__tablet' principal={true} />
                                        </div>
                                    </div>
                                </div>
                                <div className='background'></div>
                            </>
                        )}
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
                                    onChange={(e) => setSettingsData({ ...settingsData, senha: e.target.value })}
                                    type={"password"}
                                    required={true}
                                    className='settings__input__desktop'
                                />
                                {/* {senhaInformada != settingsData.senhaAtual ? (
                                    <Input
                                        placeholder={"Senha antiga"}
                                        value={senhaInformada}
                                        onChange={(e) => setSenhaInformada(e.target.value)}
                                        type={"password"}
                                        required={true}
                                        className='settings__input__desktop'
                                    />
                                ) : (
                                    <InputDisabled
                                        placeholder={"Senha antiga"}
                                        type={"password"}
                                        required={true}
                                        className='settings__input'
                                    />
                                )}
                                {senhaInformada != "" && senhaInformada == settingsData.senhaAtual ? (
                                    <Input
                                        placeholder={"Senha nova"}
                                        value={novaSenha}
                                        onChange={(e) => setNovaSenha(e.target.value)}
                                        type={"password"}
                                        required={true}
                                        className='settings__input'
                                    />
                                ) : (
                                    <InputDisabled
                                        placeholder={"Senha nova"}
                                        type={"password"}
                                        required={true}
                                        className='settings__input'
                                    />
                                )} */}
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
                    <Button onClick={openModal} label={"Cancelar"} className='settings__options__buttons__cancel__desktop' principal={false} />
                    <Button onClick={handleUpdateUser} label={"Confirmar"} className='settings__options__buttons__confirm__desktop' principal={true} />
                </div>
                {isModalOpen && (
                    <>
                        <div className='modal__overlay'>
                            <div className='modal__content'>
                                <p className='text'>Tem certeza que deseja cancelar suas alterações?</p>
                                <div className='modal__buttons'>
                                    <Button onClick={closeModal} label={"Cancelar"} className='settings__options__buttons__cancel__tablet' principal={false} />
                                    <Button onclick={handleUpdateUser} label={"Confirmar"} className='settings__options__buttons__confirm__tablet' principal={true} />
                                </div>
                            </div>
                        </div>
                        <div className='background'></div>
                    </>
                )}

            </div>
        </>
    )
    const renderTabletView = () => (
        <>
            <div className='settings__container__tablet'>
                <HeaderSettings />
                <div className="settings__form__tablet">
                    <img src={ProfileImage} className='profile__settings__tablet' />
                    <div className='settings__box__image__options__tablet'>
                        <button className='settings__image__options__buttons__tablet'>Alterar</button>
                        <button className='settings__image__options__buttons__tablet' onClick={openImageModal}>Remover</button>
                        {isModalImageOpen && (
                            <>
                                <div className='modal__overlay_tablet'>
                                    <div className='modal__content'>
                                        <p className='text'>Tem certeza que deseja remover sua foto de perfil?</p>
                                        <div className='modal__buttons'>
                                            <Button onClick={closeImageModal} label={"Cancelar"} className='settings__options__buttons__cancel__tablet' principal={false} />
                                            <Button label={"Confirmar"} className='settings__options__buttons__confirm__tablet' principal={true} />
                                        </div>
                                    </div>
                                </div>
                                <div className='background'></div>
                            </>
                        )}
                    </div>
                    <div className='settings__input__container__tablet'>
                        <div className='settings__input__box'>
                            <div className="settings__field__desktop">
                                <InputDisabled
                                    placeholder={"E-mail"}
                                    value={settingsData.email}
                                    type={"text"}
                                    required={true}
                                    className='settings__input'
                                />
                            </div>
                            <div className="settings__field__desktop">
                                <InputDisabled
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
                                    value={settingsData.nomeUsuario}
                                    onChange={(e) => setSettingsData({ ...settingsData, nomeUsuario: e.target.value })}
                                    type={"text"}
                                    required={true}
                                    className='settings__input__tablet'
                                />
                            </div>
                            <div className="settings__field__tablet">
                                <Input
                                    placeholder={"Nome do canal"}
                                    value={settingsData.nomeCanal}
                                    onChange={(e) => setSettingsData({ ...settingsData, nomeCanal: e.target.value })}
                                    type={"text"}
                                    required={true}
                                    className='settings__input__tablet'
                                />
                            </div>
                        </div>
                        <div className='settings__input__box'>
                            <div className="settings__field__tablet">
                                {senhaInformada != settingsData.senhaAtual ? (
                                    <Input
                                        placeholder={"Senha antiga"}
                                        value={senhaInformada}
                                        onChange={(e) => setSenhaInformada(e.target.value)}
                                        type={"password"}
                                        required={true}
                                        className='settings__input__desktop'
                                    />
                                ) : (
                                    <InputDisabled
                                        placeholder={"Senha antiga"}
                                        type={"password"}
                                        required={true}
                                        className='settings__input'
                                    />
                                )}
                                {senhaInformada != "" && senhaInformada == settingsData.senhaAtual ? (
                                    <Input
                                        placeholder={"Nova senha"}
                                        value={novaSenha}
                                        onChange={(e) => setNovaSenha(e.target.value)}
                                        type={"password"}
                                        required={true}
                                        className='settings__input'
                                    />
                                ) : (
                                    <InputDisabled
                                        placeholder={"Nova senha"}
                                        value={novaSenha}
                                        type={"date"}
                                        required={true}
                                        className='settings__input'
                                    />
                                )}
                                <TextArea
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
                        <Button onClick={openModal} label={"Cancelar"} className='settings__options__buttons__cancel__tablet' principal={false} />
                        {isModalOpen && (
                            <>
                                <div className='modal__overlay_tablet'>
                                    <div className='modal__content'>
                                        <p className='text'>Tem certeza que deseja cancelar suas alterações?</p>
                                        <div className='modal__buttons'>
                                            <Button onClick={closeModal} label={"Cancelar"} className='settings__options__buttons__cancel__tablet' principal={false} />
                                            <Button label={"Confirmar"} className='settings__options__buttons__confirm__tablet' principal={true} />
                                        </div>
                                    </div>
                                </div>
                                <div className='background'></div>
                            </>
                        )}
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