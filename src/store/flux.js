const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            tasks: [
                "Task 1",
                "Task 2",
                "Task 3",
                "Task 4"
            ]
        },
        actions: {
            addTask: (task) => {
                const { tasks } = getStore();
                setStore({ tasks: [...tasks, task]})
            },
            deleteTask: (index) => {
                const { tasks } = getStore();
                setStore({ tasks: [...tasks.filter((task, i) => i !== index)]})
            },
            handleKeyUp: e => {
                const { addTask } = getActions();
                if(e.target.value !== '' && e.key === 'Enter'){
                    addTask(e.target.value);
                    e.target.value = "";
                }
            }
        }
    }
}

export default getState;
