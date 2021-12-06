import { useState, useEffect } from 'react'
import { retrieveCurrencies } from './../services/api'
import TelegramIcon from './../assets/icons/telegram.png'
import CurrencyExchange from '../assets/icons/currencyExchange.svg'
import Stopwatch from '../assets/icons/stopwatch.svg'
import Gear from '../assets/icons/gearfill.svg'

const date = new Date()

function Header({
  setSearchParams,
  setGales,
  setLastUpdate
})
{
  const [currencies, setCurrencies] = useState([])

  const handleSearchParams = event => {
    setSearchParams(oldParams => ({
      ...oldParams,
      [`${event.target.name}`]: event.target.value
    }))
    setLastUpdate(date.toLocaleTimeString('pt-BR'))
  }
  const handleGales = event => {
    setGales(event.target.value)
  }
  useEffect(() => {
    retrieveCurrencies()
      .then(response => {
        setCurrencies(response.data.ok)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <header>

        <label>
          <img src={CurrencyExchange} alt='currency-selection' className='header-icon'/>
          <select name="currency" id="currency" className="select" onChange={handleSearchParams}>
            <option value='all'>Todos</option>
            {currencies.map((currency, index) => <option value={currency} key={index}>{currency}</option>)}
          </select>
        </label>

        <label>
          <img src={Stopwatch} alt='timeframe-selection' className='header-icon'/>
          <select name="timeframe" id="timeframeSelect" className="select" onChange={handleSearchParams}>
            <option value="M5">M5</option>
            <option value="M1">M1</option>
            <option value="M15">M15</option>
          </select>
        </label>

        <label>
        <img src={Gear} alt='gale-selection' className='header-icon'/>
          <select name="gale" id="galeSelect" className="select" onChange={handleGales}>
            <option value="G2">2 Gales</option>
            <option value="G1">1 Gale</option>
            <option value="Mao">Mão Fixa</option>
          </select>
        </label>

        <a href="https://t.me/agbot_oficial" target='_blank' rel='noreferrer'>
          <img src={TelegramIcon} alt='Telegram Icon' className='telegram-icon'/>
        </a>

    </header>
  )
}

export default Header
