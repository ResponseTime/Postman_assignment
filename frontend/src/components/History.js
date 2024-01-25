import React, { useEffect, useState } from 'react'
import HistoryItem from './HistoryItem';
import axios from 'axios';
const History = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const [testData, setTestData] = useState()
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get("http://localhost:8080/postman/history")
            setTestData(res.data)
        }
        fetch()
    }, [])
    return (
        <div className='z-auto'>
            <button
                className="fixed top-5 left-5 bg-orange-300 border-4 border-orange-600 rounded-xl text-white px-3 py-2 "
                onClick={toggleSidebar}
            >
                History
            </button>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'visible' : 'invisible'
                    }`}
                onClick={toggleSidebar}
            ></div>
            <div
                className={`h-full w-1/4 bg-white fixed top-0 left-0 z-10 overflow-y-auto shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="space-y-2">
                    <h2 className="text-sm font-bold">History</h2>
                    {testData && testData.map((data) => {
                        return <HistoryItem key={data} data={data} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default History
