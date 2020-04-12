import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


export default () => {
    const [text, setText] = useState('')
    const {setName} = useContext(UserContext)
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            setName(text)
        }}>
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button type="submit">Submit</button>
        </form>
    )
}