import '../css/FooterItem.css'

const FooterItem = ({img, title, text}) => {
    // ❗ обрати вним на параметры (возмож ошибки, т.к. в data.js немного другие)
    return (
        <div className="footer-item">    
            {/* <img src={img} alt={img} className="about-item-img"/> */}
            <h1 className='footer-item-title'>{title}</h1>
            {/* <p className='footer-item-desc'>{typeof text === 'string' ? text : text.join(', ')}</p> */}
            <p className='footer-item-desc'>{
                typeof text === 'string' 
                ? text 
                : text.map(item => (
                    <div className='footer-item-mail-wrapper'>
                        <div className='footer-item-mail-type'>{item.type}</div>
                        <a className='footer-item-mail-adress'>{item.mail}</a>
                    </div>
            ))
            }</p>
        </div>
    )
}

export default FooterItem