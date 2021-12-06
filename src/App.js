import { useEffect, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { retrieveData, retrieveCurrencies } from './services/api'

const date = new Date()

function App() {
  const [listOfCards, setListOfCards] = useState([])
  const [searchParams, setSearchParams] = useState({
    currency: '',
    timeframe: ''
  })
  
  const [lastUpdate, setLastUpdate] = useState(date.toLocaleTimeString('pt-BR'))
  const [gales, setGales] = useState('G2')

  const getCards = (objectOfObjects) => {
    const propertiesList = Object.keys(objectOfObjects || {})
    const arrayOfObjects = propertiesList.map(property => objectOfObjects[property])
    return arrayOfObjects
  }

  useEffect(() => {
    retrieveCurrencies()
      .then(response => {
        setSearchParams(oldParams => ({
          ...oldParams,
          currency: 'all',
          timeframe: 'M5'
        }))
        setLastUpdate(date.toLocaleTimeString('pt-BR'))
      })
      .catch(e => console.error(e))
  }, [])

  useEffect(() => {
    retrieveData(searchParams.currency, searchParams.timeframe)
     .then(response => {
       setListOfCards(getCards(response.data.ok))
     })
     .catch(e => console.error(e))
  }, [searchParams])

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(date.toLocaleTimeString('pt-BR'))
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header setSearchParams={setSearchParams} setGales={setGales} setLastUpdate={setLastUpdate}/>
      
      <h5 className='last-update'>
        {`Última Atualização feita às: ${lastUpdate} UTC-3`}
      </h5>

      <Content gales={gales} listOfCards={listOfCards}/>
    </>
  );
}

export default App
