import "./App.css";
import Saludo from "./components/Saludo";
import Button from "./components/Button/Button";
import Item from "./components/Item";
import Flex from "./components/Flex/Flex";
import NavBar from "./components/NavBar";

/* 
function AppAlumnos(){
  return (
    <NavBar/>
    <ItemListContainer/>
  )
} */

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
        <Flex>
        <img src="/imgs/Logo.png" height="200" alt="logo"/>
          {/*<Saludo texto="Bienvenidos a la clase 4" />
          <Button color="orange" text="Soy naranja" />

          <Button disabled={false} color="purple">
            Soy violeta
          </Button>

          <Button disabled={true}>No tengo color y estoy disabled :(</Button>
          <Button>Soy un children</Button>
          Children☝ */}

        <NavBar/>
        <h2>🛒</h2>  
        </Flex>
        <hr />
        <h3>Juegos</h3>
          <Flex>
            <Item
              title="Call of Duty"
              price="100"
              description="Jueguito de tiros"
              img="/imgs/cod_img.jpg"
            />
            <Item
              title="Fifa"
              price="300"
              description="Jueguito de Furbo"
              img="/imgs/fifa_img.png"
            />
            <Item
              title="Forza Horizon"
              price="600"
              description="Jueguito de autitos"
              img="/imgs/forza_img.jpg"
            />
          </Flex>
        <h3>Componentes</h3>
          <Flex>
          
          <Item
            title="Nvidia RTX 3090"
            price="Demasiado"
            description="para que el jueguito se vea mejor"
            img="/imgs/nvidia_3090.png"
          />
          <Item
            title="Ryzen 9"
            price="Tambien mucho pero menos que el anterior"
            description="Para que carguen mas rapido las cosas"
            img="/imgs/ryzen9_img.webp"
          />

          </Flex>  
        </header>
      </div>
    </div>
  );
}

export default App;