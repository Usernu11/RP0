 import data from '/src/assets/data.js'
 import MenuItem from '/src/components/MenuItem.jsx'
 import '../css/Menu.css'
 
 const Menu = () => {
    return(
        <div className='menu'>
            {data.menuButtonsData.map(item => (
                <MenuItem key={item.id} text={item.text}/>
            ))}
        </div>
    )
 }

 export default Menu