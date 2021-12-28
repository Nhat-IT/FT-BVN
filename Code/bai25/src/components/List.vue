<template>
    <div>
        <div>
            <input type="text" v-model="newTodo">
            <button
            @click="addTodo()"
            >Add</button>
        </div>
        <div class="list">
            <ToDo
                v-for="(todo, index) in todos" 
                :key="index" :todo = "todo"
                :deleteTodo = "deleteTodo" 
                :index = index
            />
        </div>
    </div>
</template>

<script>
import ToDo from './Todo.vue'
export default {
    data () {
        return{
            newTodo: '',
            todos:[{content:"hoc bai", done: false}]
        }
    },
    methods: {
        addTodo(){
            this.todos.push({
                content: this.newTodo,
                done: false
            });
            this.newTodo = ''
        },
        deleteTodo(index){
            console.log(index)
            this.todos.splice(index, 1)
        }
    },
    components: {
        ToDo
    }
}
</script>

<style>

</style>