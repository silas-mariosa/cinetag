import Banner from "componets/Banner";
import styles from "./Favoritos.module.css";
import React from "react";
import Titulo from "componets/Titulo";
import Card from "componets/Card";
import { useFavoritoContext } from "contextos/Favoritos";

export default function Favoritos() {
  const {favorito} = useFavoritoContext();
  return (
    <>
      <Banner imagem="1" />
      <Titulo>
        <h2>Meus Favoritos</h2>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fave)=>{
          return (<Card {...fave} key={fave.id}/>)
        })}
       
      </section>
    </>
  );
}
