<template>
    <div class="modal" >
        <h3>{{title}}</h3>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:['title'],

}
</script>

<style scoped>
.modal{
    height: 100px;
    width: 5 00px;
    border: 1px solid black
}
</style>