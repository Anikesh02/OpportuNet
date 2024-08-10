import React, { useRef, useState, useEffect } from 'react';
import PlayIcon from './PlayIcon';


const CameraFeed = ({ currentQuestion, onNext, onBack, getFeedback }) => {
    const videoRef = useRef(null);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const [isMicOn, setIsMicOn] = useState(false);
    const [recognizedText, setRecognizedText] = useState('');

    const recognitionRef = useRef(null);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';
    
            recognition.onresult = (event) => {
                let interimTranscript = '';
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    } else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }
                setRecognizedText((prev) => prev + finalTranscript);
            };
    
            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                if (event.error === 'network') {
                    alert('Network error occurred. Please check your internet connection.');
                } else if (event.error === 'not-allowed') {
                    alert('Permission to use microphone is denied.');
                } else if (event.error === 'service-not-allowed') {
                    alert('Speech recognition service is not allowed.');
                } else {
                    alert(`Speech recognition error: ${event.error}`);
                }
            };
    
            recognitionRef.current = recognition;
        } else {
            console.error('Speech recognition not supported in this browser.');
            alert('Speech recognition not supported in this browser.');
        }
    }, []);

    const toggleCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        } else {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                });
        }
        setIsCameraOn((prev) => !prev);
    };

    const toggleMic = () => {
        if (recognitionRef.current) {
            if (isMicOn) {
                recognitionRef.current.stop();
                submitAnswer();
            } else {
                setRecognizedText('');
                recognitionRef.current.start();
            }
        }
        setIsMicOn((prev) => !prev);
    };

    const speakText = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('Text-to-Speech not supported in this browser.');
        }
    };

    // useEffect(() => {
    //     if (currentQuestion?.Question) {
    //         speakText(currentQuestion.Question);
    //     }
    // }, [currentQuestion]);

    const submitAnswer = () => {
        console.log(`Submitted Answer: ${recognizedText}`);
        getFeedback(recognizedText);
        setRecognizedText('');
    };

    const handlePlayAudio = () => {
        if (currentQuestion?.Question) {
            speakText(currentQuestion.Question);
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex items-center mb-4">
                <span onClick={handlePlayAudio} className='w-12'>
                <PlayIcon className="w-6 h-6"></PlayIcon>
                </span>
                <h1 className="text-2xl font-bold">{currentQuestion?.Question}</h1>

            </div>
            {isCameraOn ? (
                <video ref={videoRef} autoPlay className="rounded-lg shadow-md mb-4"></video>
            ) : (
                <div
                    className="rounded-lg shadow-md mb-4"
                    style={{ backgroundColor: '#333', width: '100%', height: '300px' }}
                ></div>
            )}
            <div className="flex space-x-4">
                <button onClick={onBack} className="bg-blue-500 text-white p-2 rounded">
                    Back
                </button>
                <button onClick={toggleCamera} className="bg-blue-500 text-white p-2 rounded">
                    {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
                </button>
                <button onClick={toggleMic} className="bg-blue-500 text-white p-2 rounded">
                    {isMicOn ? 'Turn Off Mic' : 'Turn On Mic'}
                </button>
                <button onClick={onNext} className="bg-blue-500 text-white p-2 rounded">
                    Next
                </button>
                {/* <button onClick={submitAnswer} className="bg-green-500 text-white p-2 rounded">
                    Submit
                </button> */}
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Recognized Text:</h2>
                <p>{recognizedText}</p>
            </div>
        </div>
    );
};

export default CameraFeed;