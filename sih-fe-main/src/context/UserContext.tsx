import React, { createContext } from 'react'
import { IToken } from '../interfaces/token.interface'
import { IUser } from '../interfaces/user.interface'

interface IUserContextProps {
  isUserLoggedIn: boolean
  user: IUser
  token: IToken
  setUser: React.Dispatch<React.SetStateAction<any>>
  setToken: React.Dispatch<React.SetStateAction<any>>
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const initialUserInformation: IUserContextProps = {
  user: {
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
  },
  token: {
    expiresIn: 0,
    token: '',
  },
  isUserLoggedIn: false,
  setUser: () => {},
  setToken: () => {},
  setIsUserLoggedIn: () => {},
}

const UserContext = createContext(initialUserInformation)

export default UserContext
