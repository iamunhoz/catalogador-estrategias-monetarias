import AUDCAD from '../assets/icons/AUDCAD.svg'
import AUDUSD from '../assets/icons/AUDUSD.svg'
import EOSUSD from '../assets/icons/EOSUSD.svg'
import EURAUD from '../assets/icons/EURAUD.svg'
import EURJPY from '../assets/icons/EURJPY.svg'
import GBPJPY from '../assets/icons/GBPJPY.svg'
import LTCUSD from '../assets/icons/LTCUSD.svg'
import USDCHF from '../assets/icons/USDCHF.svg'
import AUDJPY from '../assets/icons/AUDJPY.svg'
import BTCUSD from '../assets/icons/BTCUSD.svg'
import ETHUSD from '../assets/icons/ETHUSD.svg'
import EURGBP from '../assets/icons/EURGBP.svg'
import EURUSD from '../assets/icons/EURUSD.svg'
import GBPUSD from '../assets/icons/GBPUSD.svg'
import USDCAD from '../assets/icons/USDCAD.svg'
import XRPUSD from '../assets/icons/XRPUSD.svg'
import AgbotIcon from '../assets/icons/agbot.jpg'

export default function CurrencyIcon({ currencyName }) {
  switch (currencyName) {

    case 'AUDCAD':
      return (
        <img className='currencyPairFlag' src={AUDCAD} alt='AUDCAD'/>
      )
    case 'AUDUSD':
      return (
        <img className='currencyPairFlag' src={AUDUSD} alt='AUDUSD'/>
      )
    case 'EOSUSD':
      return (
        <img className='currencyPairFlag' src={EOSUSD} alt='EOSUSD'/>
      )
    case 'EURAUD':
      return (
        <img className='currencyPairFlag' src={EURAUD} alt='EURAUD'/>
      )
    case 'EURJPY':
      return (
        <img className='currencyPairFlag' src={EURJPY} alt='EURJPY'/>
      )
    case 'GBPJPY':
      return (
        <img className='currencyPairFlag' src={GBPJPY} alt='GBPJPY'/>
      )
    case 'LTCUSD':
      return (
        <img className='currencyPairFlag' src={LTCUSD} alt='LTCUSD'/>
      )
    case 'USDCHF':
      return (
        <img className='currencyPairFlag' src={USDCHF} alt='USDCHF'/>
      )
    case 'AUDJPY':
      return (
        <img className='currencyPairFlag' src={AUDJPY} alt='AUDJPY'/>
      )
    case 'BTCUSD':
      return (
        <img className='currencyPairFlag' src={BTCUSD} alt='BTCUSD'/>
      )
    case 'ETHUSD':
      return (
        <img className='currencyPairFlag' src={ETHUSD} alt='ETHUSD'/>
      )
    case 'EURGBP':
      return (
        <img className='currencyPairFlag' src={EURGBP} alt='EURGBP'/>
      )
    case 'EURUSD':
      return (
        <img className='currencyPairFlag' src={EURUSD} alt='EURUSD'/>
      )
    case 'GBPUSD':
      return (
        <img className='currencyPairFlag' src={GBPUSD} alt='GBPUSD'/>
      )
    case 'USDCAD':
      return (
        <img className='currencyPairFlag' src={USDCAD} alt='USDCAD'/>
      )
    case 'XRPUSD':
      return (
        <img className='currencyPairFlag' src={XRPUSD} alt='XRPUSD'/>
      )
    default:
      return <img className='currencyPairFlag agbot' src={AgbotIcon} alt='agbot-icon'/>
  }
}
