import React, { useState } from 'react'

const SDEitem = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <section>
            <div className='p-3 lg:p-5 rounded-[18px] border-2 border-solid border-[#D9DCE2] mb-5 cursor-default'>
                <div className="flex items-center justify-between gap-5" onClick={toggleAccordion}>
                    <h5 className='text-[12px] leading-7 lg:text-[15px] lg:leading-8 text-black font-semibold '>{item.question}</h5>
                    <div className={`${isOpen && 'bg-primaryColor text-black border-none'}w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>
                    {isOpen ? '▲' : '▼'}
                    </div>
                </div>

                {isOpen && (
                    <div className='mt-4'>
                        <table className='w-full '>
                            <thead>
                                <tr>
                                    {item.headers.map((header, index) => (
                                        <th key={index} className='border-2  p-4 text-[15px] font-semibold '>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {item.rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, colIndex) => (
                                            <td key={colIndex} className='border p-6'>
                                                {cell.img ? ( 
                                                    <a href={cell.url} target="_blank" rel="noopener noreferrer ml-16">
                                                        <img src={cell.img} alt="logo" className="w-10 h-10 content-center ml-16 " /> 
                                                    </a>
                                                ) : (
                                                    <p className='text-black text-[15px]' target="_blank" rel="noopener noreferrer">
                                                        {cell.text}
                                                    </p>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
        </>
    );
}

export default SDEitem