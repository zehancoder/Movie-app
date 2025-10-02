import React from 'react'
import UserContext from './userContext'

function UserContextProvider({children}) {
  return (
    <UserContext.Provider>
        {
            children
        }
    </UserContext.Provider>
  )
}

export default UserContextProvider