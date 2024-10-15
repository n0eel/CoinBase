import { createContext, useState } from "react";

export const Context = createContext()

export const AuthContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || false) 
    const [agents, setAgents] = useState(JSON.parse(localStorage.getItem("agents")) || []) 

    localStorage.setItem("token", JSON.stringify(token))
    localStorage.setItem("agents", JSON.stringify(agents))

    return(
        <Context.Provider value={{token, setToken, agents, setAgents}}>{children}</Context.Provider>
    )
}

