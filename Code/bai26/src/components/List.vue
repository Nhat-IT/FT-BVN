<template>
    <div>

    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    mounted() {
        this.$root.$on('abcde', function(data) {
            console.log(data)
        })
    }
}
</script>

<style scoped>

</style>