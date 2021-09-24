import './View.css'

import { useState, useEffect } from 'react'

function View ({char, classes, date}) {
    const imgsrc = `http://192.168.50.130:5000/static/char/${date}_${char[0][0]}.png`
    const [data, setData] = useState("")
    useEffect (
        () => {
        fetch(`http://192.168.50.130:5000/${char[0][0]}`).then(res => res.json())
                                                    .catch(msg => msg)
                                                    .then(res => {
                                                        setData(JSON.parse(res))
                                                    })
        // eslint-disable-next-line
        }, [char[0][0]]
    )
    let statAtt;
    if (data) {
        statAtt = Number(Number(data.stat_att.split("~")[1]).toPrecision(3)).toLocaleString("ko-kr")
    }

    return (
        <div className="view-container">
            <div className={`view-left ${classes[0]}`}>
                <div className="view-image">
                    <img src={imgsrc} alt={char[0][0]}/>
                </div>
                <div className="view-name">
                    <img src="" alt="icon" />
                    {char[0][0]}
                </div>
            </div>
            <div className="view-right">
                <div className="view-info-basic">
                    <div className="view-info">
                        <div className="info-name">직업</div><div className="info">{data.class_type}</div>
                    </div>
                    <div className="view-info">
                        <div className="info-name">레벨</div><div className="info">{data.level}</div>
                    </div>
                </div>
                <div className="view-info-stat">
                    <div className="view-info">
                        <div className="info-name">스탯 공격력</div><div className="info">{statAtt ? statAtt : "로딩 중..."}</div>
                    </div>
                    <div className="view-info">
                        <div className="info-name">보스 공격력</div><div className="info">{data.boss_att}</div>
                    </div>
                    <div className="view-info">
                        <div className="info-name">방어율 무시</div><div className="info">{data.ignore_def}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View;