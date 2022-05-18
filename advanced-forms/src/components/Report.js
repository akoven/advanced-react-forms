import React from 'react';
import { useInventoryContext } from '../contexts/InventoryProvider';

const Report = () => {
    const {values} = useInventoryContext();
    return(
        <div>
        <h2>Report</h2>
        <ul>
            {values.map((val,i) => <li key={i}>{val}</li>)}
        </ul>
        </div>

    )
}

export default Report;
