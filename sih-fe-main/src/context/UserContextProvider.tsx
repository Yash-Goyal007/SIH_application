import React, { useState } from 'react'
import { IToken } from '../interfaces/token.interface'
import { IUser } from '../interfaces/user.interface'
import UserContext from './UserContext'

interface IUserContextProviderProps {
  children: React.ReactNode
}

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    pwdHash: '',
    image: '',
    phone: '',
    dob: '',
    institute: '',
    standard: '',
    events: [],
    profileType: 'Patient',
    createdTimeStamp: '',
    updatedTimeStamp: '',
  })
  const [token, setToken] = useState<IToken>({
    expiresIn: 0,
    token: '',
  })

  const initialUserInformation = {
    isUserLoggedIn: isUserLoggedIn,
    user: user,
    token: token,
    setToken: setToken,
    setUser: setUser,
    setIsUserLoggedIn: setIsUserLoggedIn,
  }

  return (
    <UserContext.Provider value={initialUserInformation}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
