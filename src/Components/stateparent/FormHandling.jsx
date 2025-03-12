import React from 'react';
import { useState } from 'react';
import './FormHandling.css';

const FormHandling = () => {
    const [inputValue, setInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [noticeMessage, setNoticeMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        if (localStorage.getItem('formData')) {
            setIsSubmitted(true);
            setNoticeMessage('');
        } else {
            setNoticeMessage('Please enter data first');
        }
    };

    const handleStoreData = () => {
        const formData = {
            inputValue,
            textAreaValue,
            selectedOption
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        setNoticeMessage('Data stored successfully.');
    };

    return (
        <div className="formStyle">
            <h2>Form Submission</h2>
            <input 
                className='inputStyle'
                type='text'
                placeholder='Enter your name...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <textarea
                className='textareaStyle'
                onChange={(e) => setTextAreaValue(e.target.value)}
                value={textAreaValue}
                rows='4'
                cols='40'
                id='message'
                placeholder='Enter your message here...'
            ></textarea>

            <select
                className='selectStyle'
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                <option value="">Select an Option</option>
                <option value='Front-end-Developer'>Front-end Developer</option>
                <option value='Back-end-Developer'>Back-end Developer</option>
                <option value='Full-Stack-Developer'>Full-Stack Developer</option>
                <option value='UI-UX-Developer'>UI/UX Developer</option>
            </select>

            <button className="btn buttonStyle" onClick={handleStoreData}>Store Data</button>
            <button className='btn buttonStyle' onClick={handleSubmit}>Submit</button>

            {noticeMessage && <p style={{ color: 'red' }}>{noticeMessage}</p>}
            {isSubmitted && (
                <div className='resultStyle'>
                    <h3>Submitted Data:</h3>
                    <p><b>Name:</b> {inputValue}</p>
                    <p><b>About:</b> {textAreaValue}</p>
                    <p><b>Job:</b> {selectedOption}</p>
                </div>
            )}
        </div>
    );
};

export default FormHandling;
