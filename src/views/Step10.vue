<template>
  <div>
    <div v-for="state in states" :key="state">
      <label :for="state">{{ state }}</label>
      <input type="text" :name="state"/>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      states: [
      '筋性拘縮：',
      '皮膚性拘縮：',
      '関節性拘縮：',
      '結合組織性拘縮：',
      '神経性拘縮：',
      '強直：',
      '痛みによる運動制限：',
      '関節のこわばりによる運動制限：'
      ]
    }
  }
}
</script>