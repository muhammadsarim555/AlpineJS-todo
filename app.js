function toDoList() {
    return {
        newTodo: "",
        todos: [{
            todo: "ssss",
            completed: false
        }],
        addToDo() {


            if (this.targetIndex == 0 || this.targetIndex) {



                this.todos[this.targetIndex].todo = this.newTodo

                this.shouldUpdate = false
                this.targetIndex = null
                this.newTodo = "";

                return this.todos
            } else {
                this.todos.push({
                    todo: this.newTodo,
                    completed: false
                });

                this.newTodo = "";
          
            }

        },
        toggleToDoCompleted(index) {
            this.todos[index].completed = !this.todos[index].completed;
        },
        deleteToDo(index) {
            this.todos = this.todos.filter((todo, todoIndex) => {
                return index !== todoIndex
            })
        },

        updateTodo(index) {

            this.newTodo = this.todos[index].todo
            this.targetIndex = index

            return this.shouldUpdate = true
        },

        updateItem() {
            console.log("updateItem", this.targetIndex)

            //  


        },
        numberOfToDosCompleted() {
            return this.todos.filter(todo => todo.completed).length;
        },
        toDoCount() {
            return this.todos.length
        },
        isLastToDo(index) {
            return this.todos.length - 1 === index
        }
    };
}
