<template>
  <div class="home">
    <form>
      <div>
        <label>医療機関</label>
        <input type="text"/>
      </div>
      <div>
        <label>医師</label>
        <input type="text"/>
      </div>
      <div>
        <label>患者名</label>
        <input type="text"/>
      </div>
      <div>
        <label>お伺した傷病名(又は症状)</label>
        <input type="text"/>
      </div>
      <div>
        <label>主訴</label>
        <input type="text"/>
      </div>
      <div>
        <label>既往歴</label>
        <input type="text"/>
      </div>
      <h2>ＡＤＬ等</h2>
      <label>寝返り</label>				
      <select name="negaeri">
        <option v-for="item in items" :key="item">{{item}}</option>
      </select><br/>
				
      <label>起き上がり</label>
      <select name="negaeri">
        <option v-for="item in items" :key="item">{{item}}</option>
      </select><br/>
      
      <label>座位保持</label>
      <select name="zaihoji">
        <option v-for="item in items" :key="item">{{item}}</option>
      </select><br/>

      <label>立ち上がり</label>
      <select name="tatiagari">
        <option v-for="item in items" :key="item">{{item}}</option>
      </select><br/>

      <label>立位保持</label>
      <select name="rituihoji">
        <option v-for="item in items" :key="item">{{item}}</option>
      </select><br/>

      <label>移動(方法)</label>
      <select name="idou">
        <option v-for="item in items" :key="item">{{item}}</option>
      </select><br/>

      <label>移乗(方法)</label>
      <select name="ijou">
        <option v-for="item in items" :key="item">{{item}}</option>
      </select><br/>
      <div>
        <label for="jissiprogram">実施プログラム</label>
        <input type="text" name="jissiprogram"/>
        <br/>
        <label for="tokkijikou">特記事項</label>
        <textarea name="tokkijikou" id="" cols="30" rows="10"></textarea>
      </div>

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
        message: 'HelloWorld',
        items: [
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
