<template>
  <div class="home">
    <form>
      <table>
        <tr v-for="item in items1" :key="item">
          <th>{{ item }}</th>
          <td><input type="text" /></td>
        </tr>
      </table>

      <h2>ＡＤＬ等</h2>
      <table>
        <tr v-for="item in items2" :key="item">
          <th>{{ item }}</th>
          <td>
            <select :name="item">
              <option v-for="option in options" :key="option">
                {{ option }}
              </option>
            </select>
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <th>実施プログラム</th>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <th>特記事項</th>
          <td><textarea cols="30" rows="10"></textarea></td>
          <code></code>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: function(){
      return {
        items1: [
          '医療機関',
          '医師',
          '患者名',
          'お伺した傷病名(又は症状)',
          '主訴',
          '既往歴'
        ],
        items2: [
          '寝返り',
          '起き上がり',
          '座位保持',
          '立ち上がり',
          '立位保持',
          '移動(方法)',
          '移乗(方法)'
        ],
        options: [
          '',
          '可能',
          '自立',
          '一部介助',
          '全介助',
          '問題なし',
          '見守り',
          'あり',
          'なし',
          '自立・見守り・一部介助・全介助',
          '独歩',
          '杖',
          'シルバーカー',
          '歩行器',
          '車いす'
        ]
      }
  }
}
  // components: {
  //   HelloWorld
  // }
</script>
<style scoped>
  table {
    margin: 0 auto;
  }
  th {
    text-align: left;
    padding-right: 5px;
  }
</style>