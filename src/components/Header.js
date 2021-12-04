import { useState, useEffect } from 'react'
import { retrieveCurrencies } from './../services/api'
import TelegramIcon from './../assets/icons/telegram.png'

function Header({
  setSearchParams,
  setGales
})
{
  const [currencies, setCurrencies] = useState([])

  const handleSearchParams = event => {
    setSearchParams(oldParams => ({
      ...oldParams,
      [`${event.target.name}`]: event.target.value
    }))
  }
  const handleGales = event => {
    setGales(event.target.value)
  }
  useEffect(() => {
    retrieveCurrencies()
      .then(response => {
        setCurrencies(response.data.ok)
      })
  }, [])

  return (
    <header>

        <select name="currency" id="currency" className="select" onClick={handleSearchParams}>
          {currencies.map((currency, index) => <option value={currency} key={index}>{currency}</option>)}
        </select>

        <select name="timeframe" id="timeframeSelect" className="select" onClick={handleSearchParams}>
          <option value="M1">M1</option>
          <option value="M5">M5</option>
          <option value="M15">M15</option>
        </select>

        <select name="gale" id="galeSelect" className="select" onClick={handleGales}>
          <option value="G2">2 Gales</option>
          <option value="G1">1 Gale</option>
          <option value="Mao">Mão Fixa</option>
        </select>

        <a href="https://t.me/agbot_oficial" target='_blank' rel='noreferrer'>
          <img src={TelegramIcon} alt='Telegram Icon' className='telegram-icon'/>
        </a>

    </header>
  )
}

export default Header
