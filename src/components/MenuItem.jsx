import '../css/MenuItem.css'
import React, { useState } from 'react'

const MenuItem = ({ text, onClick }) => {
    const [color, setColor] = useState('')

    const changeColor = () => {
        setColor(color === 'wheat' ? '#FFF8DC' : 'wheat')

        if (onClick) onClick()
    }

    return (
        <button
            className="menu-button"
            style={{ backgroundColor: color }}
            onClick={changeColor}
        >
            {text}
        </button>
    )
}

export default MenuItem