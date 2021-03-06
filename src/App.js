import { BrowserRouter, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Recipe } from "./pages/Recipe/Recipe";
import { Timer } from "./pages/Timer/Timer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <Link to="/">Recetas</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/recipe/:recipeId" component={Recipe} />
          <Route path="/timer" component={Timer} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
