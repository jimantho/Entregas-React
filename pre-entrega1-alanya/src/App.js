
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/navBar/NavBar";


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"hola soy anyela, bienvenido"}/>
      
    </div>
  );
}

export default App;
