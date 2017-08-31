var Todos = Vue.extend({
    name: 'todos'
});

var app = new Vue({
    el: '#app',
    data: {
        title: 'Список задач',
        todos: JSON.parse(localStorage.getItem('todos')),
        newTask: ''
    },
    methods: {
        addTask: function (e) {
            e.preventDefault();
            this.todos.push({
                title: this.newTask,
                done: false
            });
            localStorage.setItem('todos', JSON.stringify(this.todos));
            this.newTask = '';
            console.log('Task added');
        },
        removeTask: function (index) {
            this.todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        doneTask: function (index) {
            this.todos[index].done = true;
            localStorage.setItem('todos', JSON.stringify(this.todos));
        }
    },
    ready: function () {
        console.log('Ready.');
    },
    created: function () {
        if (!localStorage.getItem('todos')) {
            localStorage.setItem('todos', JSON.stringify([
                {
                    title: 'Создать TODO',
                    done: true
                }
            ]));

            this.todos = JSON.parse(localStorage.getItem('todos'));
        }
    }
});