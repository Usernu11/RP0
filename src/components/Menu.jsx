import data from '/src/assets/data.js'
import MenuItem from '/src/components/MenuItem.jsx'
import '../css/Menu.css'
import React, { useState } from 'react'
import AboutItem from './AboutItem'

const Menu = () => {
    const [activeButton, setActiveButton] = useState(null)

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId)
    }

    return (
        <div className='menu'>
            {data.menuButtonsData.map(item => (
                <MenuItem
                    key={item.id}
                    text={item.text}
                    onClick={() => handleButtonClick(item.id)}
                    color={activeButton === item.id ? 'wheat' : '#FFF8DC'}
                />
            ))}

            {/* <AboutItem
                text={activeButton === 1 ? 'Highlighted text' : 'Regular text'}
            /> */}
        </div>
    )
}

export default Menu