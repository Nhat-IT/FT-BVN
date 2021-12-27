<template>
    <div>
        <h3>{{search}}</h3>
        <input type="text">
    </div>
</template>

<script>
export default{
    data(){
        return{
            search: 'tim kiem'
        }
    }
}
</script> 

<style scoped>
input{
    border-radius: 5px;
}

</style>
