import { createContext, useContext, useEffect, useState } from "react";
import React from 'react';

export const UserContext = createContext();

const Context = ({children}) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        if(!isLoading) {
            setLoading(true);
            fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
        }
    }, [isLoading]);

    if (!data) {
        return null;
    }

    return (
        <UserContext.Provider value={{data, setData}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}
export default Context;