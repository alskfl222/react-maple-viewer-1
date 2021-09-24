import Charactor from './Charactor';

import './Charactors.css'

function Charactors ({chars, classes, date, change}) {
    let container = [], lines = []
    let count = 0
    if (classes.length !== 0) {
        for (let i = 0; i < chars[0].length; i++) {
            lines.push([chars[0][i], classes[0][i]])
            count++
            if (count > 2) {
                container.push(lines)
                count = 0
                lines = []
            }
            if (i === chars[0].length - 1) {
                container.push(lines)
            }
        }
    }


    return (
        <div className="chars-container">
            {container.map(line => {
                return (
                    <div className="char-line" key={line[0]}>
                       {line.map(char => {
                            return (
                                <div key={char[0]}>
                                    <Charactor char={char[0]} type={char[1]} date={date} />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Charactors;