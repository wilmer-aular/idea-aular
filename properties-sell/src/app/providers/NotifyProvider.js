import React, { createContext, useContext, useState } from "react";

const NotifyContext = createContext();

export function useNotifyContent() {
    return useContext(NotifyContext);
}

export const NotifyConsumer = NotifyContext.Consumer;

export function NotifyProvider({ children }) {
    const [notify, setNotify] = useState(0)

    const value = {
        notify,
        setNotify
    };
    return (
        <NotifyContext.Provider value={value}>
            {children}
        </NotifyContext.Provider>
    );
}
