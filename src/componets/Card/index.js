import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Card.module.css"
import desfavoritar from "./desfavoritar.png";
import favoritar from "./favoritar.png";
import {Link} from "react-router-dom";

export default function Card({id, titulo, capa}) {
  const {favorito, adicionarFavorito} = useFavoritoContext()
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? favoritar : desfavoritar
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa}/>
        <h2>{titulo}</h2>
      </Link>
        <img 
          src={icone} 
          alt="desfavoritar filme" 
          className={styles.favoritar}
          onClick={() => {
            adicionarFavorito({id, titulo, capa})
          }}
        />
    </div>
  )
}
