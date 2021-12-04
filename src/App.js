import { useEffect, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { retrieveData, retrieveCurrencies } from './services/api'

function App() {
  const [listOfCards, setListOfCards] = useState([])
  const [searchParams, setSearchParams] = useState({
    currency: '',
    timeframe: 'M1'
  })
  const [gales, setGales] = useState('G1')

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
          currency: response.data.ok[0]
        }))
      })
  }, [])

  useEffect(() => {
    retrieveData(searchParams.currency, searchParams.timeframe)
     .then(response => {
       setListOfCards(getCards(response.data.ok))
     })
  }, [searchParams])

  return (
    <>
      <Header setSearchParams={setSearchParams} setGales={setGales}/>
      <Content gales={gales} listOfCards={listOfCards}/>
    </>
  );
}

export default App
