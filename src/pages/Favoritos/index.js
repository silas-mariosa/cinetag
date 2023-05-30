import Banner from "componets/Banner";
import styles from "./Favoritos.module.css";
import React from "react";
import Titulo from "componets/Titulo";
import Card from "componets/Card";

export default function Favoritos() {
  return (
    <>
      <Banner imagem="1" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card></Card>
      </section>
    </>
  );
}
