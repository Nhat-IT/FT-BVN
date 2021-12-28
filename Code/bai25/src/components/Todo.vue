<template>
    <div>
        <span
        class="checkbox" :class="{checked: todo.done}" @click="todo.done = !todo.done"
        >
        </span>
        <span
        :class="{done: todo.done}"
        >
        {{todo.content}}
        <a href="#" @click.prevent="deleteTodo(index)">Xoa</a>
        </span>
    </div>
</template>

<script>
export default {
    props: ['todo', 'deleteTodo', 'index']
}
</script>

<style>
span.done{
    text-decoration: line-through;
}
span.checkbox{
    display: inline-block;
    border: 1px solid black;
    width: 20px;
    height: 20px;
}
span.checked{
    background-color: red;
}
</style>