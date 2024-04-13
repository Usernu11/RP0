import '../css/AboutItem.css'

const AboutItem = ({img, title, text}) => {
    return (
        <div className="about-item">
            <img src={img} alt={img} className="about-item-img"/>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default AboutItem