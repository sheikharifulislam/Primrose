import React, { createContext } from 'react';

export const OrderProductContext = createContext();

const OrderProductDataProvider = ({children}) => {
    return (
        <OrderProductContext.Provider>
            {children}
        </OrderProductContext.Provider>
    );
};

export default OrderProductDataProvider;