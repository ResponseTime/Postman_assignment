import React, { useContext } from 'react'
import headerscontext from '../context/headerscontext';
const Headers = () => {
    const context = useContext(headerscontext)
    const { inputValues, setInputValues } = context;

    const addInput = () => {
        const newInputValues = [...inputValues, {}];
        setInputValues(newInputValues);
    };

    const handleInputChange = (index, type, event) => {
        const newInputValues = [...inputValues];
        if (type === 'key') {
            newInputValues[index].key = event.target.value;
        } else {
            newInputValues[index].value = event.target.value;
        }
        setInputValues(newInputValues);
    };

    return (
        <>
            <div className='w-1/2 m-auto scroll-m-2 h-96 overflow-y-auto p-11'>
                <div className='m-auto w-1/2 space-y-5'>
                    {inputValues.map((pair, index) => (
                        <div key={index}>
                            <input
                                className='w-1/2 p-2 rounded-md'
                                value={pair.key}
                                onChange={(e) => handleInputChange(index, 'key', e)}
                                placeholder="Key"
                            />
                            <input
                                className='w-1/2 p-2 rounded-md'
                                value={pair.value}
                                onChange={(e) => handleInputChange(index, 'value', e)}
                                placeholder="Value"
                            />
                        </div>
                    ))
                    }
                </div >
            </div >
            <button className='w-1/2 mx-[25%] text-center bg-orange-200 border-2 p-2 border-orange-500 rounded-lg' onClick={addInput}>Add Headers</button>
        </>
    )
}

export default Headers
