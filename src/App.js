
import './App.css';
import Header from './Componant/Header'
import CollectionCard from './Componant/CollectionCard';
import axios from 'axios';
import { useState, useEffect} from 'react';
import Punklist from './Componant/Punklist';
import Main from './Componant/Main';

function App() {
  const [ punkListData, setPunkListData ] = useState([])
  const [ selectedPunk, setSelectedPunk ] = useState(0)

  useEffect(() => {  
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x85a2548eb1370baeE939183445Fe839F3179a9A3&order_direction=asc'
        )

        console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets)
        
    } 
   
    return getMyNfts()
    
  }, [])

  return (
    <div className='app'>
       <Header />
       {punkListData.length > 0 && (
        <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}  />
        <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
        </>
       )}
       
      {/*<CollectionCard 
       id={0}
       name={'Bandan Punk'}
       traits={[{'value': 7}]}
       image='https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg' />
      */}
      
   </div>
    
  


  
    
  );
  
}

export default App;
