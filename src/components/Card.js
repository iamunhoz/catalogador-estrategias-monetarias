import CurrencyIcon from "./CurrencyIcon"
import CicloQuadradinho from "./CicloQuadradinho"

export default function Card({ properties, cardName, gales }) {
  const cardProps = properties[Object.keys(properties)[0]]

  const getPercentage = (value) => {
    let total = cardProps.WIN + cardProps.winG1 + cardProps.winG2 + cardProps.loss

    if (total === 0) total = 1

    return `${(value / total) * 100}%`
  }

  const getGalesPercentage = (galeValue) => {
    let total = cardProps.WIN + cardProps.winG1 + cardProps.winG2 + cardProps.loss

    if (total === 0) total = 1

    switch (galeValue) {
      case 'Mao':
        return `${(cardProps.WIN / total) * 100 }%`
      case 'G1':
        return `${((cardProps.WIN + cardProps.winG1) / total) * 100 }%`
      case 'G2':
        return `${((cardProps.WIN + cardProps.winG1 + cardProps.winG2) / total) * 100 }%`
      default:
        return '%%'
    }
  }

  return (
    <div className='estrategiaContainer'>

      <div className='cardbox-top'>
        <div className='cardbox-top-linha-um'>
          <div className='cardbox-top-linha-um-esquerda'>
            <CurrencyIcon currencyName={cardProps.active}/>
            <p>{cardProps.name}</p>
          </div>
          <p>{cardName}</p>
        </div>
        <p className='cardbox-top-linha-dois'>{getGalesPercentage(gales)}</p>
      </div>

      <div className='cardbox-bottom'>
        <table>
          <thead>
            <tr>
              <th className='table-text infoBranca'>WIN</th>
              <th className='table-text infoBranca'>G1</th>
              <th className='table-text infoBranca'>G2</th>
              <th className='table-text infoBranca'>HIT</th>
            </tr>
          </thead>
          <tbody>
            <tr className='porcentagens'>
              <td className='table-text infoVerde'>{getPercentage(cardProps.WIN)}</td>
              <td className='table-text infoVerde'>{getPercentage(cardProps.winG1)}</td>
              <td className='table-text infoVerde'>{getPercentage(cardProps.winG2)}</td>
              <td className='table-text infoVermelha'>{getPercentage(cardProps.loss)}</td>
            </tr>
            <tr className='absolutos'>
              <td className='table-text infoVerde'>{cardProps.WIN}</td>
              <td className='table-text infoVerde'>{cardProps.winG1}</td>
              <td className='table-text infoVerde'>{cardProps.winG2}</td>
              <td className='table-text infoVermelha'>{cardProps.loss}</td>
            </tr>
          </tbody>
        </table>
        <div className='ciclos-container'>
          {cardProps.ciclos.map((ciclo, i) => <CicloQuadradinho type={ciclo}/>)}
        </div>
      </div>
    </div>
  )
}
