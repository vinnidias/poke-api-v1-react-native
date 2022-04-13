import * as React from 'react'

export const PokeDataContexts = React.createContext({});

export const PokeDataProvider = ({children}) => {
  const [fullPokemonData, setFullPokemonData] = React.useState(null)

  const setData = (data) => {
    setFullPokemonData(({...data}))
  }
  
  React.useEffect(()=> {
    console.log("full data on context:", fullPokemonData)
  },[fullPokemonData])

  return(
    <PokeDataContexts.Provider value={{
      fullPokemonData,
      setData
    }}>
      {children}
    </PokeDataContexts.Provider>
  )
};