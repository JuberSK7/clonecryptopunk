import React, { useEffect, useState } from 'react';
import '../Componant/Main.css'
import instaLogo from '../Assets/instagram.png';
import TwitLogo from '../Assets/twitter.png';
import MoreLogo from '../Assets/more.png';


const Main = ({ selectedPunk, punkListData }) => {

    const [activePunk, setActivePunk] =  useState(punkListData[0])
  


    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

  return(
    <div className='Main'>
        <div className='mainContain'>
            <div className='punkHighLight'>
                <div className='punkContainer'>
                    <img className='selectPunk' 
                   src={activePunk.image_thumbnail_url}
                    alt=''/>
                </div>
            </div>
              <div className='punkDetails'>
                  <div className='title'>{activePunk.name}</div>
                  <span className='itemNumber'>.#{activePunk.token_id}</span>
              </div>
              <div className='oWners'>
                  <div className='oWnerContainer'>
                  <img className='oWnimgContainer' src={activePunk.image_thumbnail_url}/>
                 
                  </div>

                  <div className='ownerDetail'>
                      <div className='ownerNmaeHandel'>
                          <div>{activePunk.owner.address}</div>
                          <div className='oWnerHandel'>@SHAIKHZUBER2001</div>
                      </div>

                    <div className='oWnerLink'>
                        <img src={instaLogo} alt=''/>
                    </div>

                    <div className='oWnerLink'>
                        <img src={TwitLogo} alt=''/>
                    </div>

                    <div className='oWnerLink'>
                        <img src={MoreLogo} alt=''/>
                    </div>
                  </div>
              </div>

        </div>
    </div>

  ) 
}

export default Main;
