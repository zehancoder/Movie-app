import React from 'react'
import userContext from './userContext'

function UserContextProvider({children}) {
  return (
    <userContext.Provider>
        {
            children
        }
    </userContext.Provider>
  )
}

export default UserContextProvider