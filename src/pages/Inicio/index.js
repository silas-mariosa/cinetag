import React from 'react'
import Banner from 'componets/Banner'
import Titulo from 'componets/Titulo'
import videos from "../../json/db.json"
import Card from 'componets/Card'
import styles from "./Inicio.module.css"

export default function Inicio() {
  return (
    <>
    <Banner imagem="2"/>
    <Titulo>
      <h1>Um lugar para guardar seus vídeos e filmes!</h1>
    </Titulo>
    <section className={styles.container}>
      {videos.map((video) => {
        return <Card {...video} key={video.id}/>
      })}
    </section>
    </>
  )
}
