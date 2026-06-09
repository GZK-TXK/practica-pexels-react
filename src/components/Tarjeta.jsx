import React from 'react'

export const Tarjeta = ({foto}) => {
  return (
    <>
        <article>
            <img src={foto.src.medium} alt={foto.alt}></img>
            <h3>{foto.alt}</h3>
        </article>
    </>
  )
}