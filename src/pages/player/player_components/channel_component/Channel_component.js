import React from 'react'
import './Channel_component.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react';
import UsuarioEngajamentoService from '../../../../service/Engajamento/UsuarioEngajamentoService'; 
import ProfilePicture from '../../../../assets/image/channel_profile.png'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Channel_component({video}) {

    const [usuario, setUsuario] = useState({});
    const [foto, setFoto] = useState(ProfilePicture)


    useEffect(() => {
        UsuarioEngajamentoService.buscarUm(video.usuario.uuid)
            .then((data) => setUsuario(data))
            .catch((error) => console.error('Erro ao buscar usuario:', error));
    }, [video]);

    useEffect(() => {
        setFoto('http://10.4.96.50:7000/api/usuario/static/' + usuario.foto)
    }, [usuario])

    return (
        <div>
            <div className='component'>
                <Link to={`/profile`} className='link__player'>
                    <div className='channel__container'>
                        <div className='channel'>
                            <img src={foto} className='channel__image' />
                        </div>
                        <div className='channel__info'>
                            <div>
                                <div className='channel__name'>{usuario.nomeCanal}</div>
                                <div className='channel__subs'>{usuario.quantidadeInscritos} de inscritos</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className='subscribe'>
                    <button className='subscribe__btn'>inscrever-se</button>
                </div>
            </div>
        </div>
    )
}

export default Channel_component