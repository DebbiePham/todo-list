import React, {useState} from 'react';


const Form = (props) => {

    const [task, setTask] = props;

    const [input, setInput] = useState("");

    

    const handleSubmit = (e) => {
        e.preventDefault();

        let item = {
            name:input,
            isCompleted: false,
        };

        setTask([...task, item]);
        setInput("");
    }


    return (
        <div>
            <form onSubmit = {handleSubmit} className='mb-5 d-flex'>
                <input className='m-2 form-control' type='text' value={input} onChange={(e) => { setInput(e.target.value); }} placeholder='Enter task' />
                <button className='m-2 btn btn-success rounded'>Add</button>
            </form>
        </div>
    );
}

export default Form;
