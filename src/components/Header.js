import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import FullScreen from './FullScreen'

export default () => {
    const {name} = useContext(UserContext)
    return(
        <div>
            <h1 className="header">{name}</h1>
            <FullScreen />
        </div>
    )

}