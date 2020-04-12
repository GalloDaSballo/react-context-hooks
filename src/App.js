import React, {useState} from 'react'
import UserContext from './context/UserContext'
import Header from './components/Header'
import './App.css'
const App = () => {
  const [name, setName] = useState('Gino')
  return(
    <UserContext.Provider value={{name, setName}}>
      <Header />
    </UserContext.Provider>
  )
}
export default App