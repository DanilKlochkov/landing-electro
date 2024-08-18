import {createContext, useContext, createRef, RefObject} from 'react'

export interface NavRefsProps {
    [key: string]: RefObject<HTMLDivElement>
}

export const NavContext = createContext<NavRefsProps>({
    about: createRef(),
    history: createRef(),
    command: createRef(),
    contacts: createRef(),
})

export const useNavContext = () => useContext(NavContext)
