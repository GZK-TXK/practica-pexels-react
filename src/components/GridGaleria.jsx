import React, { useState, useEffect } from 'react'
import { Tarjeta } from './Tarjeta'

export const GridGaleria = ({ category }) => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_PEXELS_API_KEY

        setLoading(true)
        fetch(`https://api.pexels.com/v1/search?query=${category}&per_page=12`, {
            headers: { Authorization: API_KEY }
        })
            .then(res => res.json())
            .then(data => {
                setImages(data.photos)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [category])

    return (
        <>
            <h3>{category}</h3>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                images.map((imagen) => (
                    <Tarjeta key={imagen.id} foto={imagen} />
                ))
            )}
        </>
    )
}