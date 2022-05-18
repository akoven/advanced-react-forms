// import { useState } from "react";

const Selections = () => {
    // const [selection, setSelection] = useState('');

    // return(
    //     <div>
    //         <input type='radio' value={1} />Strongly Disagree
    //         <input type='radio' value={2} />Disagree
    //         <input type='radio' value={3} />Neutral
    //         <input type='radio' value={4} />Agree
    //         <input type='radio' value={5} />Strongly Agree

    //     </div>
    // )

    return[
        <option value='' key='prompt' disabled>Select one ...</option>,
        <option value={1} key='1'>Strongly Disagree</option>,
        <option value={2} key='2'>Disagree</option>,
        <option value={3} key='3'>Neutral</option>,
        <option value={4} key='4'>Agree</option>,
        <option value={5} key='5'>Strongly Agree</option>,
    ];
}

export default Selections;
