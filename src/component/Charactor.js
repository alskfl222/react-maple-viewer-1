import './Charactor.css'

function Charactor ({char, type, date}) {
    const imgsrc = `http://192.168.50.130:5000/static/char/${date}_${char}.png`

    return (
        <div className={`char-box`} data-value={`${char}`}>
            <div className="char-box-image" data-value={`${char}`}>
                <img src={imgsrc} alt={char} data-value={`${char}`}/>
            </div>
            <div className={`char-name ${type}`} data-value={`${char}`}>
                {char}
            </div>
        </div>
    )
}

export default Charactor;