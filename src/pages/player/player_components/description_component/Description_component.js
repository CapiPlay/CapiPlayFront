import React, { useState } from 'react'
import './Description_component.css'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Description_component(video) {

  const [showMore, setShowMore] = useState(false);

  //são apenas variáveis de exemplo, elas vão vir com o objeto 
  const description = "Noot noot Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot  Noot noot ";
  const description_date = 'há 1 semana'

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
        <div className='description__container'>
            <div className='description__date'><p>{description_date}</p></div>
            <div className='description__content'><p>{showMore ? description : `${description.slice(0, 100)}...`}</p></div>
            <div><button onClick={() => toggleShowMore()} className='description__moreORless'>{!showMore ? <p className='selection'>Mostrar mais <p className='selection__icon'><BiSolidDownArrow/></p></p>: <p className='selection'>Mostrar menos <p className='selection__icon'><BiSolidUpArrow/></p></p>}</button></div>
        </div>
    </>
  )
}

export default Description_component