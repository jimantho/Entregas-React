import ItemCount from "../itemCount/ItemCount.js"


export const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h1> {greeting}</h1>
      <ItemCount></ItemCount>
      
    </div>
  )
}
