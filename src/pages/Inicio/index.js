import React, { useEffect, useState } from 'react'
import Banner from 'componets/Banner'
import Titulo from 'componets/Titulo'
import Card from 'componets/Card'
import styles from "./Inicio.module.css"

export default function Inicio() {
  const[videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/silas-mariosa/cinetag-api/videos")
    .then(respostar => respostar.json())
    .then(dados => {setVideos(dados)
    })
  },[])
  return (
    <>
    <Banner imagem="2"/>
    <Titulo>
      <h2>Um lugar para guardar seus vídeos e filmes!</h2>
    </Titulo>
    <section className={styles.container}>
      {videos.map((video) => {
        return <Card {...video} key={video.id}/>
      })}
    </section>
    </>
  )
}
