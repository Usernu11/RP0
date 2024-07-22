import data from "../assets/data"
import '../css/Footer.css'
import '../components/FooterItem'

const Footer = () => {
    return(
        <div className="footer">
            {data.footerData.map(item => {
                <FooterItem 
                    key={item.item}
                    title={item.title}
                    text={item.desc}
                />
            })}
        </div>
    )
}