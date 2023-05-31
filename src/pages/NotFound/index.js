import styles from "./NotFound.module.css"

import React from 'react'

export default function NotFound() {
  return (
    <section className={styles.container}> 
        <h1>Ops!</h1>
        <p>
            Conteúno não encontrado.
        </p>
    </section>
  )
}
