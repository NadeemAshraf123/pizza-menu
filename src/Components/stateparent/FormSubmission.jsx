import React , {useState} from 'react'

const FormSubmission = () => {
    const [userInput, setUserInput] = useState('');
    const [items, setItems] = useState([]);

    function handleinputchange(e){
        setUserInput(e.target.value);
    }
    function handlesubmitt(){
        if (userInput.trim() !== ''){
            setItems([...items, userInput]);
            setUserInput("");
        }
    };

    function handledelete(index){
        const updatedItems = items.filter((_,i) => i != index);
        setItems(updatedItems);
};

  return (
    <div className='form-interactivity'>
        <h1>Form Submission</h1>

        <input type='text' 
               placeholder='enter text'
               value={userInput} 
               onChange={handleinputchange}
               />

        <button onClick={handlesubmitt}>
                click
                </button>

        <ul className='unorder-list'>

            {items.map((item, index)=>(

                <li key={index}> 

                {item}
                <button onClick={() => handledelete(index)}>delete</button>

                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default FormSubmission
