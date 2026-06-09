import React, { useState } from 'react'
import { Formulario } from './Formulario'
import { GridGaleria } from './GridGaleria'

export const Galeria = () => {
    const [categorias, setCategorias] = useState([])
    const onNuevaCategoria = (categoria)=>{
        setCategorias([...categorias, categoria])
    }
    return (
        <>
            <h1>PRACTICA PEXELS REACT</h1>
            <Formulario onNuevaCategoria = {onNuevaCategoria} />
            {
                categorias?.map((categoria) => (

                    <GridGaleria key={categoria} category={categoria} />
                )
                )
            }


        </>
    )
}
