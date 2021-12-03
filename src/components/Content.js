import Card from './Card'

function Content({
  listOfCards,
  listOfCardNames,
  gales
}) 

{
  return (
    <div className='cardGrid'>
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
    </div>
  );
}

export default Content;
