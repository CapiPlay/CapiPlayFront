import React, { useEffect, useState, useParams } from 'react'
import axios from 'axios';
import './Settings.css'

//imagem
import ProfileImage from '../../assets/image/CapiPlay.png'

//componentes
import HeaderSettings from './header/HeaderSettings'
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import UserService from './../../service/UserService'

const Settings = ({ userId }) => {

    userId = "d033e1ec-d22e-4df6-a250-0b3672da4b59";

    const [settingsData, setSettingsData] = useState({
        nomeUsuario: '',
        nomeCanal: '',
        senhaAtual: '',
        descricao: ''
    });

    useEffect(() => {
        axios.get(`/api/usuario/${userId}`)
            .then(response => {
                const userData = response.data;
                setSettingsData({
                    nomeUsuario: userData.nomeUsuario,
                    nomeCanal: userData.nomeCanal,
                    senhaAtual: '', 
                    descricao: userData.descricao
                });
            })
            .catch(error => {
                console.error('Erro ao obter dados do usuário:', error);
            });
    }, [userId]);

    const handleUpdateUser = () => {
        axios.put(`/api/usuario/${userId}`, settingsData)
            .then(response => {
                console.log('Usuário atualizado com sucesso!', response.data);
            })
            .catch(error => {
                console.error('Erro ao atualizar o usuário:', error);
            });
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

    const verifyScreen = () => {
        if (screenSize.width > 900) {
            return false
        } else {
            return true
        }
    }
    return (
        <>
            {verifyScreen() ?
                <div className='settings__container'>
                <HeaderSettings />
                <div className="settings__form">
                    <img src={ProfileImage} className='profile__settings' />
                    <div className='settings__box__image__options'>
                        <button className='settings__image__options__buttons'>Alterar</button>
                        <button className='settings__image__options__buttons'>Remover</button>
                    </div>
                    <div className="settings__field">
                        <Input
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
                        <Input
                            placeholder={"Senha"}
                            value={settingsData.senhaAtual}
                            onChange={(e) => setSettingsData({ ...settingsData, senhaAtual: e.target.value })}
                            type={"password"}
                            required={true}
                            className='settings__input'
                        />
                    </div>
                    <div className="settings__field">
                        <Input
                            placeholder={"Descrição do canal"}
                            value={settingsData.descricao}
                            onChange={(e) => setSettingsData({ ...settingsData, descricao: e.target.value })}
                            type={"text"}
                            required={true}
                            className='settings__input'
                        />
                    </div>
                </div>
                <br />
                <hr className="solid" />
                <div className='settings__options__buttons__delete_div'>
                    <button className='settings__options__buttons__delete'>Deletar perfil</button>
                </div>
                <div className='settings__options__buttons__div'>
                    <Button onClick={handleUpdateUser} label={"Cancelar"} className='settings__options__buttons__cancel' principal={true} />
                    <Button onClick={handleUpdateUser} label={"Confirmar"} className='settings__options__buttons__confirm' principal={false} />
                </div>
            </div>
                :
                <div className='settings__container__desktop'>
                <HeaderSettings />
                <div className="settings__form__desktop">
                    <img src={ProfileImage} className='profile__settings__desktop' />
                    <div className='settings__box__image__options__desktop'>
                        <button className='settings__image__options__buttons__desktop'>Alterar</button>
                        <button className='settings__image__options__buttons__desktop'>Remover</button>
                    </div>
                    <div className='settings__input__container__desktop'>
                        <div className='settings__input__box'>
                            <div className="settings__field__desktop">
                                <Input
                                    placeholder={"Nome de usuário"}
                                    value={settingsData.nomeUsuario}
                                    onChange={(e) => setSettingsData({ ...settingsData, nomeUsuario: e.target.value })}
                                    type={"text"}
                                    required={true}
                                    className='settings__input__desktop'
                                />
                            </div>
                            <div className="settings__field__desktop">
                                <Input
                                    placeholder={"Nome do canal"}
                                    value={settingsData.nomeCanal}
                                    onChange={(e) => setSettingsData({ ...settingsData, nomeCanal: e.target.value })}
                                    type={"text"}
                                    required={true}
                                    className='settings__input__desktop'
                                />
                            </div>
                        </div>
                        <div className='settings__input__box'>
                            <div className="settings__field__desktop">
                                <Input
                                    placeholder={"Senha"}
                                    value={settingsData.senhaAtual}
                                    onChange={(e) => setSettingsData({ ...settingsData, senhaAtual: e.target.value })}
                                    type={"password"}
                                    required={true}
                                    className='settings__input__desktop'
                                />
                            </div>
                            <div className="settings__field__desktop">
                                <Input
                                    placeholder={"Descrição do canal"}
                                    value={settingsData.descricao}
                                    onChange={(e) => setSettingsData({ ...settingsData, descricao: e.target.value })}
                                    type={"text"}
                                    required={true}
                                    className='settings__input__desktop'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                
                <hr className="solid" />
                <div className='settings__options__buttons__container'>
                    <button className='settings__options__buttons__delete__desktop'>Deletar perfil</button>
                    <div className='settings__options__buttons__div__desktop'>
                        <Button onClick={handleUpdateUser} label={"Cancelar"} className='settings__options__buttons__cancel__desktop' principal={false} />
                        <Button onClick={handleUpdateUser} label={"Confirmar"} className='settings__options__buttons__confirm__desktop' principal={true} />
                    </div>
                </div>
            </div>
            }
        </>
    )
}
export default Settings