import '../css/MarketBlock.css'
import MarketItem from './market-items/MarketItem'

const MarketBlock = () => {
    const marketItems = []

    for (let i = 0; i < 3; i++) {
        marketItems.push(<MarketItem key={i}/>)
    }

    return(
        <div className='market-wrapper'>
            {marketItems}
        </div>
    )
}

export default MarketBlock