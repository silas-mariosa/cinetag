import BasePage from "pages/BasePage";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
