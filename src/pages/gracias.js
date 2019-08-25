import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from "../styles/components"
import { Link } from 'gatsby'


export default function gracias() {
    return (
        <div>
            <SEO title='Compra exitosa' />
            <Purchase>
                <h2>Compra exitosa</h2>
                <p>Esperamos que disfrutes tu SWAG</p>
                <p>Nos vemos! No pares de aprender</p>
                <span rol='img' aria-label='emoji'> ❤️ </span>
                <Link to="/">
                    <Button>Volver al catalogo</Button>
                </Link>
            </Purchase>

        </div>
    )
}
