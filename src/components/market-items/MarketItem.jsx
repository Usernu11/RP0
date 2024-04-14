import '../../css/MarketItem.css'
import MarketItemImage from './MarketItemImage'
import MarketItemDesc from './MarketItemDesc'
import MarketItemBtn from './MarketItemBtn'
import MarketItemAttr from './market-items-attr/MarketItemAttr'

const MarketItem = () => {
    return(
        <div className='item-wrapper'>
            <div className='item-wrapper__visual'>
                <MarketItemImage/>
                <MarketItemDesc/>
            </div>

            <MarketItemAttr/>
            <MarketItemBtn/>
        </div>
    )
}

export default MarketItem