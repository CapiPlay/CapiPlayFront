import React, { useEffect, useState } from 'react'
import './Settings.css'

//imagem
import ProfileImage from '../../assets/image/CapiPlay.png'

//componentes
import HeaderSettings from './header/HeaderSettings'
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Settings = () => {

    const obj = {
        email: '',
        nomeUsuario: '',
        nomeCanal: '',
        dataNascimento: '',
        senhaAtual: '',
        senhaNova: '',
        descricao: ''
    }

    const [settingsData, setSettingsData] = useState(obj)
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
        <><HeaderSettings />
            {verifyScreen() ?
                <div className='settings__container'>
                    <div className="settings__form">
                        <img src={ProfileImage} className='profile__settings' />
                        <div className='settings__box__image__options'>
                            <button className='settings__image__options__buttons'>Alterar</button>
                            <button className='settings__image__options__buttons'>Remover</button>
                        </div>
                        <div class="settings__field">
                            <Input
                                placeholder={"Nome de usuário"}
                                value={settingsData.nomeUsuario}
                                onChange={(e) => setSettingsData({ ...settingsData, nomeUsuario: e.target.value })}
                                type={"text"}
                                required={true}
                                className='settings__input'
                            />
                        </div>
                        <div class="settings__field">
                            <Input
                                placeholder={"Nome do canal"}
                                value={settingsData.nomeCanal}
                                onChange={(e) => setSettingsData({ ...settingsData, nomeCanal: e.target.value })}
                                type={"text"}
                                required={true}
                                className='settings__input'
                            />
                        </div>
                        <div class="settings__field">
                            <Input
                                value={settingsData.dataNascimento}
                                onChange={(e) => setSettingsData({ ...settingsData, dataNascimento: e.target.value })}
                                type={"date"}
                                required={true}
                                className='settings__input'
                            />
                        </div>
                        <div class="settings__field">
                            <Input
                                placeholder={"Senha"}
                                value={settingsData.senhaAtual}
                                onChange={(e) => setSettingsData({ ...settingsData, senhaAtual: e.target.value })}
                                type={"password"}
                                required={true}
                                className='settings__input'
                            />
                        </div>
                        <div class="settings__field">
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
                    <hr class="solid" />
                    <div className='settings__options__buttons__delete_div'>
                        <button className='settings__options__buttons__delete'>Deletar perfil</button>
                    </div>
                    <div className='settings__options__buttons__div'>
                        <Button label={"cancelar"} className='settings__options__buttons__cancel'
                            principal={true} />
                        <Button label={"confirmar"} className='settings__options__buttons__confirm'
                            principal={false} />
                    </div>
                </div>
                :
                <div className='settings__container__desktop'>
                    <div className="settings__form__desktop">
                        <img src={ProfileImage} className='profile__settings__desktop' />
                        <div className='settings__box__image__options__desktop'>
                            <button className='settings__image__options__buttons__desktop'>Alterar</button>
                            <button className='settings__image__options__buttons__desktop'>Remover</button>
                        </div>
                        <div className='settings__field_container__desktop'>
                            <div className="settings__field__desktop">
                                <label>E-mail</label>
                                <input type="email" className='settings__input__desktop' placeholder='E-mail' />
                            </div>
                            <div class="settings__field__desktop">
                                <label>Nome de usuario</label>
                                <input type="text" className='settings__input__desktop' placeholder='Nome de usuário' />
                            </div>
                            <div class="settings__field__desktop">
                                <label>Nome do canal</label>
                                <input type="text" className='settings__input__desktop' placeholder='Nome do canal' />
                            </div>
                            <div class="settings__field__desktop">
                                <label>Data de nascimento</label>
                                <input type="date" className='settings__input__desktop' />
                            </div>
                            <div class="settings__field__desktop">
                                <label>Senha atual</label>
                                <input type="password" className='settings__input__desktop' placeholder='Senha atual' />
                            </div>
                            <div class="settings__field__desktop">
                                <label>Senha nova</label>
                                <input type="password" className='settings__input__desktop' placeholder='Senha nova' />
                            </div>
                            <div class="settings__field__textarea__desktop">
                                <label>Descrição do canal</label>
                                <textarea className='settings__field__textarea__input__desktop' placeholder='Descrição' ></textarea>
                            </div>
                        </div>
                    </div>
                    <hr class="solid" />
                    <div className='settings__options__buttons__container'>
                        <button className='settings__options__buttons__delete__desktop'>Deletar perfil</button>
                        <div className='settings__options__buttons__div__desktop'>
                            <Button label={"cancelar"} className='settings__options__buttons__cancel__desktop'
                                principal={true} />
                            <Button label={"confirmar"} className='settings__options__buttons__confirm__desktop'
                                principal={true} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Settings