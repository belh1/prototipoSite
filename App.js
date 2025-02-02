import "./App.css";

import Cabecalho from "./components/Cabecalho/Cabecalho";
import Contato from "./components/Contato/Contato";
import Informacao from "./components/Informação/Informacao";
import Inicio from "./components/inicio/inicio";
import Sobre from "./components/Sobre/Sobre";
import Ajuda from "./components/Ajuda/Ajuda";
import Router from "./src/Router";

function App() {
  return (
    <>
      <Cabecalho />
      <Inicio />
      <Sobre />
      <Informacao />
      <Ajuda />
      <Contato />

      <Router/>
    </>
  );
}

export default App;