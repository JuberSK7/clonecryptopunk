import React from 'react';
import '../Componant/Header.css';
import pLogo from '../Assets/cryptopunk-logo.png';   
import SearchIcon from '../Assets/search.png';  
import themeSwithIcon from '../Assets/theme-switch.png';  

const Header = () => {
  return (
      <>
    <div className='Header'>
        <div className='logoContainer'>
            <img src={pLogo} className='pLogo' alt='logo'/>
        </div>
    
     
     <div className='searchBar'>
        <div className='searchBarContainer'>
            <img src={SearchIcon}/>
        </div>
        <input 
        className='searchInput'
        placeholder='Collection , Item or User'/>
     </div>

    <div className='headerItem'>
        <p>Drope</p>
        <p>MarketPlace</p>
        <p>Create</p>
    </div>

    <div className='headerActions'>
      <div className='themeSwitchContainer'>
           <img src={themeSwithIcon}/>
      </div>
    </div>

    <div className='loginButton'>
        GET IN
    </div>
     </div> 
     </>

  )
  
}

export default Header;
