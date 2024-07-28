import data from "/src/assets/data.js"
import FooterItem from '../components/FooterItem'
import '../css/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            {data.footerData.map(item => (
                <FooterItem
                key={item.id}
                title={item.title}
                text={item.desc}
                img={item.img}
            />
            ))}
        </div>
    )
}

export default Footer