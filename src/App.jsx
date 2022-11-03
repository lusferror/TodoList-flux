import React, { useContext } from 'react';
import injectContext, { Context } from './store/appContext';

const App = () => {

    const { store, actions } = useContext(Context);

    const { tasks } = store;
    const { handleKeyUp, deleteTask } = actions;

    /* const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        //setTasks([...tasks, task])
        setTasks(preState => [...preState, task]);
    }

    const handleKeyUp = e => {
        if(e.target.value !== '' && e.key === 'Enter'){
            addTask(e.target.value);
            e.target.value = "";
        }
    } */

    return (
        <>
            <h1>APP React</h1>
            <div className='d-flex flex-column w-25 mx-auto'>
                <input type="text" placeholder='Ingrese nueva tarea' className='form-control mb-3' onKeyUp={handleKeyUp} />
                <ul className="list-group">
                    {
                        tasks.length > 0 &&
                        tasks.map((task, i) => (
                            <li key={i} className='list-group-item d-flex justify-content-between'>
                                {task}
                                <button className='btn btn-danger btn-sm' onClick={() => deleteTask(i)}>del</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default injectContext(App);