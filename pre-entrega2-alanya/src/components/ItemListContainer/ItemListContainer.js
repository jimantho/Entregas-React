import ItemCount from "../itemCount/ItemCount.js"
import ItemList from "../itemList/ItemList.js"


export const ItemListContainer = ({ greeting }) => {
  

  return (
    <div>
      <h1> {greeting}</h1>
      <ItemList />
      <ItemCount />

    </div>
  )
}
