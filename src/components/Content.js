import Card from './Card'

function Content({
  listOfCards,
  listOfCardNames,
  gales
}) 

{
  return (
    <main className='cardGrid'>
      {
        listOfCards.length > 0 
        ? listOfCards.map((card, index) => (
            <Card
              properties={card}
              cardName={listOfCardNames[index]}
              gales={gales}
              key={index}
            />
          ))
        : 'Loading'
      }
    </main>
  );
}

export default Content;
