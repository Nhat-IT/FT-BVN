<template>
    <div id="dropdown">
        <a href="#" @click.prevent="open = !open">dropdown</a>
        <ul v-show="open">
            <li><a href="#" @click="select(1)">Home</a></li>
            <li><a href="#" @click="select(2)">Home</a></li>
            <li><a href="#" @click="select(3)">Home</a></li>
            <li><a href="#" @click="select(4)">Home</a></li>
            <li><a href="#" @click="select(5)">Home</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            open: false
        }
    },
    methods: {
        select(id){
            this.$emit('select', id)
        }
    }
}
</script>

<style scoped>
#dropdown{
    display: inline-block;
}
</style>
