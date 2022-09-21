import React, { useContext } from 'react'

const Context = React.createContext()
export function useTheme(){
    return useContext(Context)
}
export function ThemeContext({children}) {
    const theme = 'kamal'

  return (
    <Context.Provider value={theme}>
        {children}
    </Context.Provider>
  )
}

export default Context