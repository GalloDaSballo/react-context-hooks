import React, {useEffect, useState, useContext} from 'react'
import UserContext from '../context/UserContext'


export default () => {

    const [text, setText] = useState('')
    const [visible, setVisible] = useState(true)
    const {setName} = useContext(UserContext)

    const handleClick = () => {
        setVisible(false)
        document.documentElement.requestFullscreen()
        document.getElementById("invisiName").focus()
    }
    return(
        <div onClick={handleClick}>
            {visible &&
                <p>Click to get started</p>
            }
            <textarea id="invisiName" onChange={(e) => {setText(e.target.value); setName(e.target.value)}} value={text}>
            </textarea>
        </div>
    )
}