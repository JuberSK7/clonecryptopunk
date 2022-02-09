import React from 'react';
import '../Componant/CollectionCard.css';
import wedth from '../Assets/weth.png'

const CollectionCard = ({ image, id, name, traits }) => {
  return <div className='CollectionCard'>
      <img src={image} alt=''/>
      <div className='Details'>
      <div className='Name'> 
      {name}
      <div className='id'>.#{id}
      </div>
      </div>
      <div className='princeContainer'>
          <img src={wedth} className='wedthImage' alt=''/>
          <div className='price'>{traits[0]?.value}</div>
      </div>
      </div>
  </div>;
}

export default CollectionCard;
