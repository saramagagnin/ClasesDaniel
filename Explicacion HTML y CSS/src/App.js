import logo from './logo.svg';
import './styles/styles.css';
import borderCollie from './media/collie.jpg'
import rodhesian from './media/rhodesian.jpg'

function App() {
  return (
    <div classNameName="App">
      
    <header>
        <ul className="navbar">
            
            <li>
                <img className="logo" src="./media/logoPerro.png" alt="Logo Perro"/>
            </li>

            <li>
                <button className="button mainButton">Nuevo post test</button>
            </li>

            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza" type="text" name="" id=""/>
                    <i className="fas fa-search button iconoBusqueda"></i>
                </div>
            </li>

            <li><button className=" button secundaryButton">Login</button></li>
            <li><button className="button mainButton">Registro</button></li>
        
        </ul>  
    </header>

    <main>
        <section>
            <h2  className="tituloPrincipal">RAZAS DE PERROS</h2>
            <ul className="breedCardContainer">
                
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={borderCollie} alt="border collie foto"/> 
                    </div>
                    <span className="breedTittle">
                    Border Collie
                    </span>
                    <ul className="likes">
                        <li><i className="fas fa-heart corazonLikes"></i> 150</li>
                        <li><i className="fas fa-comment"></i> 1.5k</li>
                        <li><i className="fas fa-eye"></i> 120</li>
                    </ul>
                </li>

                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={rodhesian} alt="rhodesian foto"/> 
                    </div>
                    <span className="breedTittle">
                    Rhodesian
                    </span>
                    <ul className="likes">
                        <li><i className="fas fa-heart corazonLikes"></i> 450</li>
                        <li><i className="fas fa-comment"></i> 1.1k</li>
                        <li><i className="fas fa-eye"></i> 850</li>
                    </ul>
                </li>
            
            </ul>
        </section>
        <section></section>
    </main>
    <footer>

    </footer>
    </div>
  );
}

export default App;
