import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.css"
import logo from "./Logo-cinetag-branco 1.png"
import CabecalhoLink from "componets/CabecalhoLink"

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Link to={"./"}>
            <img src={logo} alt="Logo Cine Tag"></img>
        </Link>
        <nav>
            <CabecalhoLink url={"./"}>Home</CabecalhoLink>
            <CabecalhoLink url={"./favoritos"}>Favoritos</CabecalhoLink>
        </nav>
    </header>
  )
}
