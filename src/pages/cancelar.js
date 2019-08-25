import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from "../styles/components"
import { Link } from 'gatsby'


export default function cancelar() {
    return (
        <div>
            <SEO title='Compra cancelada' />
            <Purchase>
                <h2>Compra cancelada</h2>
                <p>Esperamos que vuelvas pronto por tu SWAG</p>
                <p>Nos vemos! No pares de aprender</p>
                <span rol='img' aria-label='emoji'> ❤️ </span>
                <Link to="/">
                    <Button>Volver al catalogo</Button>
                </Link>
            </Purchase>

        </div>
    )
}
