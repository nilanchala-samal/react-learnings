import React from 'react'
import { useContext } from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

function FunctionContextComponent() {

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: '30px',
    margin: '20px',
    height: '20vh',
    width: '20vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem'
  }

  return (<>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <div style={themeStyles}>
      Function Theme
    </div>
  </>
  )
}

export default FunctionContextComponent