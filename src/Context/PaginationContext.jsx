import React, { createContext, useContext, ReactNode } from 'react';


// Create a context with a default value of null
const PaginationContext = createContext();

// PaginationProvider component
export const PaginationProvider = ({ children }) => {
    const pagination = {
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`;
        },
    };

    return (
        <PaginationContext.Provider value={pagination}>
            {children}
        </PaginationContext.Provider>
    );
};

// Custom hook to use the PaginationContext
export const usePagination = () => {
    const context = useContext(PaginationContext);
    if (!context) {
        throw new Error("usePagination must be used within a PaginationProvider");
    }
    return context;
};