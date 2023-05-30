import Cabecalho from "componets/Cabecalho";
import Container from "componets/Container";
import Rodape from "componets/Rodape";
import { FavoritoContext } from "contextos/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritoContext>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </FavoritoContext>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}
