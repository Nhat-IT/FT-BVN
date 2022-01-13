<template>
  <div id="app">
    <div v-show="screen == 'cauhoi'">
      <Question :question="questions[current]"></Question>
      <div>
        <button 
          type="button" 
          class="btn btn-primary" 
          v-show="current > 0" 
          @click="current--"
        >
          Prev
        </button>
        <button 
          type="button" 
          class="btn btn-primary" 
          v-show="current < questions.length - 1" 
          @click="current++"
        >
        Next
        </button>
        <button 
          type="button" 
          class="btn btn-primary" 
          v-show="current == questions.length - 1" 
          @click="screen = 'ketqua'"
        >
        Submit
        </button>
      </div>
    </div>
    <div v-show="screen == 'ketqua'">
      <result :questions = "questions"/>
    </div>
  </div>
</template>

<script>
import Question from './components/Question.vue'
import Result from './components/Result.vue'
export default {
  components: {
    Question,
    Result
  },
  data() {
    return {
      screen: 'cauhoi',
      current: 0,
      questions: [
        {
          content: " Nguyên nhân cơ bản nào dẫn đến sự  ra đời của mạng máy tính ?",
          answers: [
            "Nhu cầu trao đổi thông tin ngày càng tăng", 
            "Khối lượng thông tin lưu trên máy tính ngày càng tăng", 
            "Khoa học và công nghệ về lĩnh vực máy tính và truyền thông phát triển", 
            "Cả ba câu trên đúng"
          ],
          correctAnswer: 3,
          point: 0.5,
          answer: null
        },
        {
          content: "Ý nghĩa cơ bản nhất của mạng máy tính là gì ?",
          answers: [
            "Nâng cao độ tin cậy của hệ thống máy tính", 
            "Trao đổi và chia sẻ thông tin", 
            "Phát triển ứng dụng trên máy tính", 
            "Nâng cao chất lượng khai thác thông tin"
          ],
          correctAnswer: 1,
          point: 1,
          answer: null
        },
        {
          content: "Thuật ngữ viết tắt bằng tiếng Anh của mạng cục bộ là gì ?",
          answers: [
            "LAN (Local Area Network)", 
            "MAN (Metropolitan Area Network)", 
            "WAN (Wide Area Network)", 
            "GAN (Global Area Network)"
          ],
          correctAnswer: 0,
          point: 0.5,
          answer: null
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
