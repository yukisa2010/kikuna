<template>
  <div>
    <form action="">
      <h2>現在発生の可能性が高い病態</h2>
      <div v-for="(item, index) in items" :key="item" style="display: inline">
        <input type="checkbox" :name="item" :value="item"/>
        <label :for="item">{{ item }}</label>
        <br v-if="index % 3 === 0">
      </div>
      <h2>問題行動の有無</h2>
      <div v-for="(item2, index) in items_2" :key="item2">
        <input type="checkbox" :name="item2" :value="item2"/>
        <label :for="item2">{{ item2 }}</label>
        <br v-if="index % 3 === 0">
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      items: [
        '尿失禁',
        '転倒・骨折',
        '徘徊',
        '褥瘡',
        '嚥下性肺炎',
        '腸閉塞',
        '易感染性',
        '心肺機能の低下',
        '痛み',
        '脱水',
        'その他'
      ],
      items_2: [
        '幻視・幻聴',
        '妄想',
        '昼夜逆転',
        '暴言',
        '暴行',
        '介護への抵抗',
        '徘徊',
        '火の不始末',
        '不潔行為',
        '異食行動',
        '性的問題行動',
        'その他',
      ]
    }
  }
}
</script>
<style scoped>
</style>