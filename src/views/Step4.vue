<template>

  <div>
    <h2>その他情報</h2>
    <div v-for="item in items" :key="item">
      <label for="">{{ item }}</label>
      <select name="" id="">
        <option v-for="option in options" :key="option" value="">{{ option }}</option>
      </select>
    </div>

    <h2>長期臥床または安静による症状</h2>
    <p>※現在わかる範囲で記入してください。</p>
    <div v-for="item in items_2" :key="item">
      <label for="">{{ item }}</label>
      <select name="" id="">
        <option v-for="option in options_2" :key="option" value="">{{ option }}</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      items: [
        '禁忌、注意点', 
        'アレルギー等'
      ],
      items_2: [
        '骨格筋の委縮・麻痺',
        '骨粗鬆症',
        '尿路結石',
        '循環障害(起立性低血圧・肺炎)',
        '褥瘡',
        '括約筋障害(失禁・頻尿・便秘)',
        '心理的荒廃(意欲低下・不眠)',
        '感覚障害(疼痛・冷感)',
        '骨折・脱臼',
        '人工関節(頸肩部、腰部の筋緊張又は凝り)',
        '消化器障害(胃潰瘍、吐血、下血)',
        '自律神経障害(発汗、体温、血圧調節)',
        'その他'
        ],
      options: [
        'なし',
        '人工関節の為、施術注意',
        '骨粗鬆症の為、軽めの施術のみ'
      ],
      options_2: [
        'あり',
        'なし',
        '特に問題なし',
        '注意必要',
        '過去にあり',
        '術後'
      ]
    }
  }
}
</script>
<style scoped>
p {
  text-decoration-line:underline;
}

</style>