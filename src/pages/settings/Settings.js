import React, { useEffect, useState } from 'react'
import HeaderSettings from './header/HeaderSettings'
import ProfileImage from '../../assets/image/CapiPlay.png'
import './Settings.css'

const VideoDetails = () => {

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
                        <div className="settings__field">
                            <label>E-mail</label>
                            <input type="email" className='settings__input' placeholder='E-mail' />
                        </div>
                        <div class="settings__field">
                            <label>Nome de usuario</label>
                            <input type="text" className='settings__input' placeholder='Nome de usuário' />
                        </div>
                        <div class="settings__field">
                            <label>Nome do canal</label>
                            <input type="text" className='settings__input' placeholder='Nome do canal' />
                        </div>
                        <div class="settings__field">
                            <label>Data de nascimento</label>
                            <input type="date" className='settings__input' />
                        </div>
                        <div class="settings__field">
                            <label>Senha atual</label>
                            <input type="password" className='settings__input' placeholder='Senha atual' />
                        </div>
                        <div class="settings__field">
                            <label>Senha nova</label>
                            <input type="password" className='settings__input' placeholder='Senha nova' />
                        </div>
                        <div class="settings__field">
                            <label>Descrição do canal</label>
                            <textarea className='settings__field__textarea__input' placeholder='Descrição' ></textarea>
                        </div>
                    </div>
                    <hr class="solid" />
                    <div>
                        <button className='settings__options__buttons__delete'>Deletar perfil</button>
                    </div>
                    <div className='settings__options__buttons__div'>
                        <button className='settings__options__buttons__cancel'>Cancelar</button>
                        <button className='settings__options__buttons__confirm'>Confirmar</button>
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
                            <button className='settings__options__buttons__cancel__desktop'>Cancelar</button>
                            <button className='settings__options__buttons__confirm__desktop'>Confirmar</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default VideoDetails