import { createContext,useEffect,useState } from "react";


export const StateConxtext = createContext({})

export function UserContextProvider({children}){
    const [active, setActive] = useState('')

    return (
        <UserContext.Provider value={{active,setActive}}>
            {children}
        </UserContext.Provider>
    )
}