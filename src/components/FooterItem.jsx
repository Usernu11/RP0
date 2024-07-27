import '../css/FooterItem.css'

const FooterItem = ({img, title, text}) => {
    // ❗ обрати вним на параметры (возмож ошибки, т.к. в data.js немного другие)
    return (
        <div className="footer-item">    
            <img src={img} alt={img} className="about-item-img"/>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default FooterItem