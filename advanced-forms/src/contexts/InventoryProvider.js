import React, {useState, createContext, useContext, useEffect} from "react";

export const InventoryContext = createContext();

export const InventoryProvider = (props) => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        console.log('values', values);
    }, [values]);
    // console.log('Inventory Provider');
    return(
        <InventoryContext.Provider value={{values, setValues}}>
            {props.children}
        </InventoryContext.Provider>
    );
};

export const useInventoryContext = () => {
    return useContext(InventoryContext);
}
