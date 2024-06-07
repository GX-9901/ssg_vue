export default {
    namespaced: true,
    state: {
        todos: [
            { id: 1, name: "吃饭", isDone: true },
            { id: 2, name: "睡觉", isDone: false },
            { id: 3, name: "打豆豆", isDone: false },
        ],
        // doneLength : 0,
        // todosLength : 0,
    },
    getters:{},
    actions:{},
    mutations:{
        addTodo(state,name){
            state.todos.push({
                id : Date.now(),
                name,
                isDone: false
            })
        },
        updateSelect(state,a){
            let index = state.todos.findIndex(todo => todo.id === a.id);
            if (index !== -1) {

                state.todos[index].isDone = a.isDone;
            } else {
                console.error('Todo not found with id:', a.id);
            }
        },
        deleteItem(state,id){
            let index = state.todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                state.todos.splice(index,1);
            } else {
                console.error('Todo not found with id:', id);
            }
        },
        deleteSelectItem(state){
            state.todos = state.todos.filter(todo => !todo.isDone);
        },
        selectAll(state){
            state.todos.forEach(todo => todo.isDone = true);
        },
        selectNone(state){
            state.todos.forEach(todo => todo.isDone = false);
        },
    }
}