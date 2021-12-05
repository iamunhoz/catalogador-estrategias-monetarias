import axios from "axios"

const URI = 'https://161.97.150.131:8765'

// const URI_UNSAFE = 'http://161.97.150.131:8765'

export const retrieveData = (currency, timeframe) => (
  axios.get(`${URI}/api/strategies/${currency}/${timeframe}`)
)

export const retrieveCurrencies = () => axios.get(`${URI}/api/coins/`)