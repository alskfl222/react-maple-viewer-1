import './Header.css'

function Header ({chars, classes, change}) {
    const options = chars[1].map(x => {
        return (
            <option value={x} key={x}>{x}</option>
        )
    })

    const changeChar = (e) => {
        change[0]([[e.target.value], chars[1]])
        change[1]([classes[1][chars[1].indexOf(e.target.value)], classes[1]])
    }
    const backChars = () => {
        change[0]([chars[1], chars[1]])
        change[1]([classes[1], classes[1]])
    }

    return (
        <header>
            <div className="logo" onClick={backChars}>
                <img src="./logo.png" alt="logo" />
            </div>
            <div className="dropdown">
                <select title="char-select" name="charactor"
                        onChange={changeChar}>
                    {options}
                </select>
            </div>
        </header>
    )
}

export default Header;