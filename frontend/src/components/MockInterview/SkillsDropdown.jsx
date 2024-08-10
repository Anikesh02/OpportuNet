import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const SkillsDropdown = () => {
    const handleSelectTopic = (topic) => {
        setSelectedTopics((prevTopics) => {
            if (prevTopics.includes(topic)) {
                return prevTopics.filter((t) => t !== topic);
            } else {
                return [...prevTopics, topic];
            }
        });
    };
    const [selectedTopics, setSelectedTopics] = useState([]);
    const navigate = useNavigate();
    const topics = [
        'General Programming',
        'Data Structures',
        'Web Development',
        'Databases and SQL',
        'Languages and Frameworks',
        'Version Control',
        'System Design',
        'Security',
        'Testing',
        'DevOps',
        'Frontend Development',
        'Backend Development',
        'Full Stack Development',
        'Algorithms',
        'Machine Learning',
    ];
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='mt-24 flex items-center justify-center max-w-7xl mx-auto flex-col'>
            <div className='flex items-center justify-center text-center flex-col gap-5'>
                <h1 className='text-5xl text-black font-semibold'>Choose Your Interview Topics</h1>
                <h1 className='flex text-center max-w-xl'>Select the topics you'd like to focus on for your mock interview. You can choose multiple topics to tailor the experience to your needs.</h1>
            </div>
            <div className='flex flex-col items-center justify-between'>
                <div className="relative">
                    <div className="my-5 w-[50svw] bg-white border border-gray-300 rounded-lg shadow-lg">
                        <div className="py-1 overflow-y-scroll h-96">
                            {topics.map((topic) => (
                                <label
                                    key={topic}
                                    className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedTopics.includes(topic)}
                                        onChange={() => handleSelectTopic(topic)}
                                        className="mr-2"
                                    />
                                    {topic}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className=''>
                    <button
                        className='mt-5 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700'
                        onClick={() => {
                            if(selectedTopics.length === 0) {
                                alert('Please select at least one topic');
                                return;
                            }
                            localStorage.setItem('selectedTopics', JSON.stringify(selectedTopics));
                            navigate('/mock-interview');
                        }}
                    >
                        Start Mock Interview
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SkillsDropdown
