<template>
    <div>
        <input type="text" placeholder="search">
        <button @click="search">Search</button>
    </div>
</template>

<script>
export default {
    props: ['onsearch'],
    methods:{
        search(){
            this.$root.$emit('abcde', {name: 'nhat'});
        }
    }
}
</script>

<style scoped>
</style>
