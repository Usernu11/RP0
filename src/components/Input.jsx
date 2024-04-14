import '../css/Input.css'

const Input = () => {
    return (
        <div className="input-wrapper">
            <label htmlFor="" className='input-label'>Test input</label>
            <input type="text" placeholder='Lorem, ipsum dolor.'/>
            {/* <div className='input-search'>🔍</div> */}
            {/* <div className='input-clear'>❌</div> */}
        </div>
    )
}

export default Input