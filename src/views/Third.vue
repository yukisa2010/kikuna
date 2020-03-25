<template>
  <div>
    <h2>ＡＤＬ</h2>
    <h3>(身の回り・生活関連動作)</h3>
    <form action="">
      <div v-for="item in items" :key="item">
        <label for="">{{ item }}</label>
        <select>
          <option 
            v-for="option in options" 
            :key="option"
            >{{ option }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      items: [
        '食事',
        '更衣',
        '整容',
        'トイレ',
        '入浴',
        '家事',
        '運動',
        '薬の飲み忘れ等',
        '服薬の管理',
        '階段昇降',
        '電話の使用',
        '排尿排便コントロール',
        '買い物等',
        '金銭の管理'
      ],
      options: [
        '',
        'ご自身で行える',
        '見守りで行う',
        'ご家族様の介助で行える',
        'ご自身では行えない',
        '問題なし',
        'ご自身では行わない',
        'しない',
        'できない',
        'ややできない',
        '不可能',
        '自立・見守り・一部介助・全介助'
      ]
    }
  }
}
</script>script