
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/navBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Contenedor de la lista de items"}/>

      
      
    </div>
  );
}

export default App;
