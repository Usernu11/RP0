import '../css/AboutItem.css'

const AboutItem = ({img, title, text, color}) => {
    return (
        <div className="about-item">
            <img src={img} alt={img} className="about-item-img"/>
            <h1>{title}</h1>
            <p style={{ color: color}}>{text}</p>
        </div>
    )
}

export default AboutItem