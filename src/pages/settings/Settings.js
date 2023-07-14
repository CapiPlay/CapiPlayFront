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
                <div className='container__settings'>
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
                            <input type="date" className='settings__input'  />
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
                    <hr class="solid"/>
                    <div>
                    <button className='settings__image__options__buttons__delete'>Deletar conta</button>
                    </div>
                </div>
                :
                <div className='container__settings'>
                    <div class="ui form">
                        <div class="field">
                            <label>E-mail</label>
                            <input type="email" />
                        </div>
                        <div class="field">
                            <label>Nome de usuario</label>
                            <input type="email" />
                        </div>
                        <div class="field">
                            <label>Nome do canal</label>
                            <input type="email" />
                        </div>
                        <div class="field">
                            <label>Data de nascimento</label>
                            <input type="email" />
                        </div>
                        <div class="field">
                            <label>Senha atual</label>
                            <input type="email" />
                        </div>
                        <div class="field">
                            <label>Senha nova</label>
                            <input type="email" />
                        </div>
                        <div class="field">
                            <label>Descrição do canal</label>
                            <textarea ></textarea>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default VideoDetails