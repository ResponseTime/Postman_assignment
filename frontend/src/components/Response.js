import React, { useContext } from 'react'
import responseContext from '../context/responseContext'
const Response = () => {
    const res = useContext(responseContext)
    return (
        <div className='bg-orange-200 mx-[25%] m-5 absolute bottom-0 z-auto w-1/2 h-1/4 overflow-y-auto border-2  border-orange-500 rounded-lg p-5'>
            <pre className='w-fit' style={{ whiteSpace: 'pre-wrap' }} >{JSON.stringify(res?.response, null, 2)}</pre>
        </div>
    )
}

export default Response
