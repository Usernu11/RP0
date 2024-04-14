import '../../../css/MarketItemSelect.css'

const MarketItemSelect = () => {
    return(
        <div className="market-item-attr-select-wrapper">
            <label htmlFor="colors">Choose a color: </label>

            <select name="colors" id="colors" className="market-item-attr-select">
                <option value="black" className='market-item-attr-select-opt'>Black</option>
                <option value="white" className='market-item-attr-select-opt'>White</option>
            </select>
        </div>
    )
}

export default MarketItemSelect