import Card from './Card'

function Content({
  listOfCards,
  gales
}){
  const getGalesPercentage = (cardProps, galeValue) => {
    let total = cardProps.WIN + cardProps.winG1 + cardProps.winG2 + cardProps.loss

    if (total === 0) total = 1

    switch (galeValue) {
      case 'Mao':
        return Math.round((cardProps.WIN / total) * 100)
      case 'G1':
        return Math.round(((cardProps.WIN + cardProps.winG1) / total) * 100 )
      case 'G2':
        return Math.round(((cardProps.WIN + cardProps.winG1 + cardProps.winG2) / total) * 100)
      default:
        return 0
    }
  }

  const sortedListOfCards = listOfCards.sort((a, b) => {
    if (a.length < 1 || b.length < 1) {
      return -1
    }

    const A = a[Object.keys(a)[0]]
    const B = b[Object.keys(b)[0]]
    
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
