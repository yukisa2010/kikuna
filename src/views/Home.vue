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
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
				
      <label>起き上がり</label>
      
      <label>座位保持</label>
      <label>立ち上がり</label>
      <label>立位保持</label>
      <label>移動(方法)</label>
      <label>移乗(方法)</label>
				
				
				
				
				
				
				
				
				
				
				
				


    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'
  // components: {
  //   HelloWorld
  // }
}
</script>
