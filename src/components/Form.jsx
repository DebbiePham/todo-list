import React, {useState} from 'react';


const Form = (props) => {

    const {task, setTask} = props;

    const [input, setInput] = useState("");

    const onChange = (e) => {
        e.preventDefault();
        
        setInput(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let item = {
            name:input,
            isCompleted: false,
        };

        setTask([...task, item]);
        e.target.value = "";
    }


    return (
        <div>
            <form onSubmit = {onSubmit} className='mb-5 d-flex'>
                <input className='m-2 form-control' type='text' value={input} onChange={onChange}></input>
                <button className='m-2 btn btn-success rounded'>Add</button>
            </form>
        </div>
    );
}

export default Form;