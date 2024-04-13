import data from "../assets/data"
import AboutItem from "./AboutItem.jsx"
import img1 from "../assets/test-img-0.jpg"
import '../css/About.css'

const About = () => {
    return (
        <div className="about">
            {data.aboutData.map(item => (
                <AboutItem
                    key={item.item}
                    text={item.text}
                    img={img1}
                    title={item.title}
                />
            ))}
        </div>
    )
}

export default About