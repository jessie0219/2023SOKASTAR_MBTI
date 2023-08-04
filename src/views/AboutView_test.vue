<template>
  <div class="text-center">
    <div>你的16型人格是：<input type="text" v-model="personalityType" @input="checkFamily" /></div>
    <div class="mt-2">恭喜你!!你是{{ familyName }}家族</div>

    <!-- 添加显示图片的部分 -->
    <div v-if="showImage" class="mt-2">
      <img src="../assets/ENFP.jpg" alt="图片" class="image" />
      <!-- <img :src="getImageURL(personalityType)" alt="图片" class="image" /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personalityType: "",
      familyName: "",
    };
  },
  methods: {
    checkFamily() {
      const personalityToFamilyMap = {
        "ENFP": "外交",
        "ISTJ": "守護",
      };

      const inputType = this.personalityType.trim().toLowerCase().toUpperCase();
      this.familyName = personalityToFamilyMap[inputType] || "...";
    },
    getImageURL(personalityType) {
      return `../assets/${personalityType.trim().toLowerCase().toUpperCase()}.jpg`;
    },
  },
  computed: {
    showImage() {
      // 在这里根据输入的人格类型来判断是否显示图片
      // 例如：
      // return this.personalityType.trim() !== "";
    },
  },
};
</script>

<style scoped>
.container {
  margin: 20px;
}
.text-center {
  text-align: center;
}

input[type="text"] {
  width: 150px;
}

/* 图片样式 */
.image {
  width: 200px; /* 图片宽度（可以根据需要调整宽度） */
  height: auto;
  margin: 10px;
}
</style>
