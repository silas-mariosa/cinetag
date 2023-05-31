import { useParams } from "react-router-dom";
import Banner from "componets/Banner";
import Titulo from "componets/Titulo";
import styles from "./Player.module.css";
import NotFound from "pages/NotFound";
import {useEffect, useState} from "react";

export default function Player() {
  const[videos, setVideo] = useState([]);
  const parametros = useParams(); 

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
}, [])

  if(!videos){
    return <NotFound/>
  }

  return (
    <>
      <Banner imagem={"3"} />
      <Titulo>Player</Titulo>
      <section className={styles.container}>
      <iframe
        width="100%"
        height="100%"
        src={videos.link}
        title={videos.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </section>
    </>
  );
}
