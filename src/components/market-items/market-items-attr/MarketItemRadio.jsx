import '../../../css/MarketItemRadio.css'

const MarketItemRadio = () => {
    return (
        <div className="market-item-attr-radio">
            <div className='market-item-attr-radio-wrapper'>
                <input type="radio" id="small" value="s" />
                <label htmlFor="s">Small</label>
            </div><br />

            <div className='market-item-attr-radio-wrapper'>
                <input type="radio" id="medium" value="m" />
                <label htmlFor="m">Medium</label>
            </div><br />

            <div className='market-item-attr-radio-wrapper'>
                <input type="radio" id="large" value="l" />
                <label htmlFor="l">Large</label>
            </div>
        </div>
    )
}

export default MarketItemRadio