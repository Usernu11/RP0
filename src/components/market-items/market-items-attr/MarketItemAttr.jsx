import MarketItemRadio from '../market-items-attr/MarketItemRadio'
import MarketItemSelect from '../market-items-attr/MarketItemSelect'
import '../../../css/MarketItemAttr.css'

const MarketItemAttr = () => {
    return(
        <div className='market-item-attr-wrapper'>
            <MarketItemSelect/>
            <MarketItemRadio/>
        </div>
    )
}

export default MarketItemAttr