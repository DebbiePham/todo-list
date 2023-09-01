import React, {useState} from 'react';


const Todo = (props) => {
    const {item, index, task, setTask} = props;

    const onClick = () => {
        const newList = () => task.filter((item) => task.indexOf(item) !== index);

        setTask(newList);
    };

    const onChange = () => {
        task[index].isCompleted = !task[index].isCompleted;
        setTask([...task]);
    };

    return (
        <>
            <div className='d-flex'>
                <div>
                    <p><strong>{item.name}</strong></p>
                    <label style={{ textDecorationLine: item.isCompleted ? "line-through":"none"}} htmlFor='checkbox'>Completed?</label>
                    <input onChange={onChange} type='checkbox' name='' checked={item.isCompleted} className='m-2'></input>
                    <button onClick={onClick} className='m-2 btn btn-danger'> Delete </button>
                </div>
            </div>
        </>
    );
}

export default Todo;