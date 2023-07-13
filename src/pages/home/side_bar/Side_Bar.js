import React from 'react'
import './Side_Bar.css'
import art from '../../../assets/image/palette.png'
import science from '../../../assets/image/science.png'
import school from '../../../assets/image/school.png'
import interactive_space from '../../../assets/image/interactive_space.png'
import flightsmode from '../../../assets/image/flightsmode.png'
import video_file from '../../../assets/image/video_file.png'
import kayaking from '../../../assets/image/kayaking.png'
import oven_gen from '../../../assets/image/oven_gen.png'
import sports_esports from '../../../assets/image/sports_esports.png'
import psychiatry from '../../../assets/image/psychiatry.png'
import music_note from '../../../assets/image/music_note.png'
import styler from '../../../assets/image/styler.png'
import { GiHamburgerMenu } from 'react-icons/gi';

function Side_Bar() {
    return (
        <div className='container__side__bar'>
            <div className='category__box'>
            <div className='modal__category__item__side' >
                    <GiHamburgerMenu  color='var(--lightpurple)' size={'2rem'} />
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={art} />
                    </div>
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={science} />
                    </div>
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={oven_gen} />
                    </div>
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={school} />
                    </div>
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={interactive_space} />
                    </div>
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={kayaking} />
                    </div>
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={video_file} />
                    </div>
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={sports_esports} />
                    </div>
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={psychiatry} />
                    </div>
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={styler} />
                    </div>
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={music_note} />
                    </div>
                </div>
                <div className='modal__category__item__side' >
                    <div className='icon__category__area__side'>
                        <img className='icon__category__side' src={flightsmode} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Side_Bar