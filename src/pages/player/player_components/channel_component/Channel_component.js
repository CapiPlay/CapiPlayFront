import React from 'react'
import './Channel_component.css'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Channel_component(video) {

    //são apenas variáveis de exemplo, elas vão vir com o objeto
    const channel_subs_var = '50 mi'
    const channel_name_var = 'Pingu - OfficialChannel'
    const channel_image_var = 'https://yt3.ggpht.com/PFRD_rpPwAIY-FC2t6Ob0GpJe2udeEaXNwug4Dx8v7zxxda6ZKHU1aKBX-XoWvYh2H4Ow6TtBDk=s176-c-k-c0x00ffffff-no-rj-mo'

    return (
        <div>
            <div className='component'>
                <div className='channel__container'>
                    <div className='channel'>
                        <img src={channel_image_var} className='channel__image' />
                    </div>
                    <div className='channel__info'>
                        <div>
                            <div className='channel__name'>{channel_name_var}</div>
                            <div className='channel__subs'>{channel_subs_var} de inscritos</div>
                        </div>
                    </div>
                </div>
                <div className='subscribe'>
                    <button className='subscribe__btn'>inscrever-se</button>
                </div>
            </div>
        </div>
    )
}

export default Channel_component