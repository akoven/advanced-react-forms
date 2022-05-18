// import React, {useState} from 'react';
// import Selections from './Selections';
// import { useInventoryContext } from '../contexts/InventoryProvider';
// import { useHistory } from 'react-router-dom';
import InventoryQuestions from './InventoryQuestions';
import data from '../mockdata/spi.json';

const Invetory = () => {
    // const {setValues} = useInventoryContext();
    // const history = useHistory();

    // const [value1, setValue1] = useState('');
    // const [value2, setValue2] = useState('');
    // const [value3, setValue3] = useState('');
    // const [value4, setValue4] = useState('');
    // const [value5, setValue5] = useState('');
    // const [value6, setValue6] = useState('');
    // const [value7, setValue7] = useState('');
    // const [value8, setValue8] = useState('');
    // const [value9, setValue9] = useState('');
    // const [value10, setValue10] = useState('');
    // const [value11, setValue11] = useState('');
    // const [value12, setValue12] = useState('');
    // const [value13, setValue13] = useState('');
    // const [value14, setValue14] = useState('');
    // const [value15, setValue15] = useState('');

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const result = [
    //         value1,
    //         value2,
    //         value3,
    //         value4,
    //         value5,
    //         value6,
    //         value7,
    //         value8,
    //         value9,
    //         value10,
    //         value11,
    //         value12,
    //         value13,
    //         value14,
    //         value15
    //     ];

    //     setValues(result);
    //     history.push('/report');
    // };

    return(
        <form>
            <div><h2>Inventory Assessment</h2></div>
            <div>
                {data.questions.map(question =>{
                    if(question.type === 'section'){
                        return(
                            <h3>{question.instructions}</h3>
                        )
                    }else{
                        return(
                            <InventoryQuestions name={question.code} stem={question.stem} onChange={(value) => console.log('change question', question.code, value)}/>
                        )
                    };
                }
                )}

                {/* <p>I learn the most when the lesson engages my sense of <em>hearing</em></p>
                <select name='q2'onChange={(e) => setValue2(e.target.value)} value={value2}>
                <Selections />
                </select>
                <p>I learn the most when the lesson engages my sense of <em>touch, taste,</em> or <em>smell</em></p>
                <select name='q3'onChange={(e) => setValue3(e.target.value)} value={value3}>
                <Selections />
                </select>
                <p>I find it easiest to remember things I see rather than things I hear or do</p>
                <select name='q4'onChange={(e) => setValue4(e.target.value)} value={value4}>
                <Selections />
                </select>
                <p>I find it easiest to remember things I hear rather than things I see or do</p>
                <select name='q5' onChange={(e) => setValue5(e.target.value)} value={value5}>
                <Selections />
                </select>
                <p>I find it easiest to remember things I do rather than things I see or hear</p>
                <select name='q6' onChange={(e) => setValue6(e.target.value)} value={value6}>
                <Selections />
                </select>
                <p>I would rather look at photos than listen to music or workout (physical exercise)</p>
                <select name='q7' onChange={(e) => setValue7(e.target.value)} value={value7}>
                <Selections />
                </select>
                <p>I would rather listen to music than look at photos or workout (physical exercise)</p>
                <select name='q8' onChange={(e) => setValue8(e.target.value)} value={value8}>
                <Selections />
                </select>
                <p>I would rather workout (physical exercise) than look at photos or listen to music</p>
                <select name='q9' onChange={(e) => setValue9(e.target.value)} value={value9}>
                <Selections />
                </select>
                <p>The lessons I remember best are those in which I had to use my sense of sight</p>
                <select name='q10' onChange={(e) => setValue10(e.target.value)} value={value10}>
                <Selections />
                </select>
                <p>The lessons I remember best are those in which I had to use my sense of hearing</p>
                <select name='q11' onChange={(e) => setValue11(e.target.value)} value={value11}>
                <Selections />
                </select>
                <p>The lessons I remember best are those in which I had to use my sense of touch, smell or taste</p>
                <select name='q12' onChange={(e) => setValue12(e.target.value)} value={value12}>
                <Selections />
                </select>
                <p>When I get a new device, I usually read the instructions to learn how to operate it</p>
                <select name='q13' onChange={(e) => setValue13(e.target.value)} value={value13}>
                <Selections />
                </select>
                <p>When I get a new device, I usually ask someone to explain verbally how to operate it</p>
                <select name='q14' onChange={(e) => setValue14(e.target.value)} value={value14}>
                <Selections />
                </select>
                <p>When I get a new device, I usually try a hands-on approach to figure out how to operate it</p>
                <select name='q15' onChange={(e) => setValue15(e.target.value)} value={value15}>
                <Selections />
                </select> */}
                {/* <div className='submitButton'>
                    <button type='submit' disabled={!value1 || !value2 || !value3 || !value4 || !value5 || !value6 || !value7 || !value8 || !value9 || !value10 || !value11 || !value12 || !value13 || !value14 || !value15}>Submit!</button>
                </div> */}
                <div className='submitButton'>
                    <button type='submit' disabled>Next</button>
                </div>
            </div>
        </form>

    )
}

export default Invetory;
