<template>
  <div>
    <div>
      <h1>
        KẾT QUẢ
        ({{
          questions.reduce((total, question) => {
            if (question.answer == question.correctAnswer) {
              total += question.point;
            }
            return total;
          }, 0)
        }} điểm)
      </h1>
    </div>
    <div v-for="(question, questionIndex) in questions" :key="questionIndex">
      <div>Câu hỏi: {{ question.content }}</div>
      <div
        v-for="(answer, index) in question.answers"
        :key="index"
        @click="question.answer = index"
        :class="{
          selected: question.answer == index,
          correct: question.correctAnswer == index,
        }"
      >
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["questions"],
};
</script>

<style scoped>
.selected {
  background-color: red;
}
.correct {
  background-color: green;
  color: white;
}
</style>