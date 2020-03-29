<template>
  <div>
    <div v-for="item in items" :key="item">
      <label for="">{{ item }}</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      items: [
        'ご本人の希望',
        '性格・コミュニケーション',
        '趣味・好きな話題・苦手な事',
        '出身・長期在住地',
        'ご家族の希望',
        '介護状況・困りごと・不安や心配ごと等',
        '社会的情報/日中の過ごし方/外出等',
        'その他情報'
      ]
    }
  }
}
</script>
<style scoped>
</style>