<template>
<div class="text-center">
    <div>你的16型人格是：<input type="text" v-model="personalityType" @input="checkFamily" /></div>
      <div class="mt-2">恭喜你!!你是{{ familyName }}家族</div>
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
        "INTJ": "分析",
        "INTP": "分析",
        "ENTJ": "分析",
        "ENTP": "分析",
        "INFJ": "外交",
        "INFP": "外交",
        "ENFJ": "外交",
        "ENFP": "外交",
        "ISTJ": "守護",
        "ISFJ": "守護",
        "ESTJ": "守護",
        "ESFJ": "守護",
        "ISTP": "探險",
        "ISFP": "探險",
        "ESTP": "探險",
        "ESFP": "探險",
      };

      const inputType = this.personalityType.trim().toLowerCase().toUpperCase();
      this.familyName = personalityToFamilyMap[inputType] || "...";
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
</style>
