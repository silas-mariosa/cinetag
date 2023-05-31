import Cabecalho from "componets/Cabecalho";
import Container from "componets/Container";
import Rodape from "componets/Rodape";
import FavoritosProvider from "contextos/Favoritos";
const { Outlet } = require("react-router-dom");

function BasePage() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}

export default BasePage;
