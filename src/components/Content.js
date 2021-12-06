import Card from './Card'

function Content({
  listOfCards,
  gales
}){
  const getGalesPercentage = ({ WIN, winG1, winG2, loss }, galeValue) => {
    const total = WIN + winG1 + winG2 + loss || 1 // divisões por 0 travam o app

    /* let total = WIN + winG1 + winG2 + loss
    if (total === 0) total = 1 */

    switch (galeValue) {
      case 'Mao':
        return Math.round((WIN / total) * 100)
      case 'G1':
        return Math.round(((WIN + winG1) / total) * 100 )
      case 'G2':
        return Math.round(((WIN + winG1 + winG2) / total) * 100)
      default:
        return 0
    }
  }

  const sortedListOfCards = listOfCards.sort((previousCard, nextCard) => {
    if (previousCard.length < 1 || nextCard.length < 1) {
      return -1
    }

    const A = previousCard[Object.keys(previousCard)[0]]
    const B = nextCard[Object.keys(nextCard)[0]]
    
    if (getGalesPercentage(A, gales) >= getGalesPercentage(B, gales)) {
      return -1
    } else return 1
  })

  return (
    <main className='cardGrid'>
      {
        sortedListOfCards.length > 0 
        ? sortedListOfCards.map((card, index) => (
            <Card
              properties={card}
              gales={gales}
              key={index}
              position={index}
            />
          ))
        : 'Loading'
      }
    </main>
  )
}

export default Content
