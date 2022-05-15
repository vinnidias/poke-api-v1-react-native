import * as React from 'react'

export const PokeDataContexts = React.createContext({});

export const PokeDataProvider = ({children}) => {
  const [fullPokemonData, setFullPokemonData] = React.useState(null)

  const setData = (data) => {
    setFullPokemonData(({...data}))
  }


  return(
    <PokeDataContexts.Provider value={{
      fullPokemonData,
      setData
    }}>
      {children}
    </PokeDataContexts.Provider>
  )
};