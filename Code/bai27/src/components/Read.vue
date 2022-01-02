<template>
    <div>
        <h1>Doc Thu</h1>
        <div>
            Doc Thu So {{id}}
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id']
}
</script>

<style scoped>

</style>