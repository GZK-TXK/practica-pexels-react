import React from 'react'

export const Formulario = ({onNuevaCategoria}) => {
    const hanldeSubmit = (ev)=>{
        ev.preventDefault()
        const categoria= ev.target.categoria.value.trim().toLowerCase()
        onNuevaCategoria(categoria)
    }
    return (
        <>
            <h2>Formulario</h2>
            <form action="" onSubmit={hanldeSubmit}>
                <input type="text" placeholder='Buscar' name='categoria' id='categoria' />
                <input type="submit" value='Buscar' />
            </form>
        </>
    )
}
