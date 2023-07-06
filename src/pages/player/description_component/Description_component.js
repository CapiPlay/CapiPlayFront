import React, { useState } from 'react'
import './Description_component.css'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'

function Description_component() {

  const [showMore, setShowMore] = useState(false);

  //essa variável vai vir com o vídeo 'desc = video.desc' 
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas id mi eu erat porttitor hendrerit et sed magna. Suspendisse vitae odio volutpat, venenatis quam a, viverra felis. Aenean vel dolor nec neque rutrum condimentum. Sed iaculis orci turpis, et sodales tellus tincidunt nec. Nam vestibulum elit ac ligula consequat, sed consectetur sem sollicitudin. Aliquam erat volutpat. Fusce vel purus in lectus elementum commodo sit amet ut nibh.Phasellus dignissim nec quam et semper. Donec sollicitudin finibus libero non scelerisque. Mauris tristique sem et enim suscipit sagittis quis nec diam. Nunc volutpat lacus ligula, ac scelerisque erat dapibus at. Nam malesuada, lacus ornare egestas pharetra, arcu arcu tincidunt ante, non vulputate nisi odio ut orci. Praesent erat ex, laoreet id condimentum et, fermentum vitae enim. Suspendisse a odio sit amet enim placerat hendrerit eu nec nisl. Aenean vestibulum ex in turpis sollicitudin varius. Donec vel sollicitudin libero.";

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
        <div className='description__container'>
            <div className='description__date'><p>há 1 semana</p></div>
            <div className='description__content'><p>{showMore ? description : `${description.slice(0, 100)}...`}</p></div>
            <div><button onClick={() => toggleShowMore()} className='description__moreORless'>{!showMore ? <p className='selection'>Mostrar mais <p className='selection__icon'><BiSolidDownArrow/></p></p>: <p className='selection'>Mostrar menos <p className='selection__icon'><BiSolidUpArrow/></p></p>}</button></div>
        </div>
    </>
  )
}

export default Description_component