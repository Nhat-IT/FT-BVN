<template>
    <div>
        <div>Câu hỏi: {{question.content}} ({{question.point}} điểm)</div>
        <div 
            v-for="(answer, index) in question.answers" 
            :key ="index"
            @click = "question.answer = index"
            :class="{selected: question.answer == index}"
          >
            {{answer}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['question']
}
</script>

<style scoped>
.selected{
  background-color: #ebebeb;
}
</style>