import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/param/123">Param #1</Link>
                </li>
                <li>
                    <Link to="/param/texto">Param #2</Link>
                </li>
                <li>
                    <Link to="/semrota">Sem rota</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu