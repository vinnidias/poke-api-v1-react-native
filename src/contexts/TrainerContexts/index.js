import * as React from 'react'

export const TrainerContexts = React.createContext({});

export const TrainerProvider = ({children}) => {
  const [userObject, setUserObject] = React.useState(null);
  const [uId, setUid] = React.useState(null)
  
  const setUser = (user) => {
    const parseData = JSON.parse(user)
    setUserObject(({parseData}))
  }

  const setUserId = (id) => {
    setUid(id)
  }
  
  return(
    <TrainerContexts.Provider value={{
      userObject,
      setUser,
      setUserId,
      uId
    }}>
      {children}
    </TrainerContexts.Provider>
  )
};