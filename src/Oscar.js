import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import "./CSS/style.css";

function Oscar() {
  return (
    <div className="App">
      < NavBar />
      < Hero />
      <main class="content shadow">
      <Main />

      </main>

      
    </div>
  );
}

export default Oscar;
