const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            tasks: []
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
