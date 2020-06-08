<template>
  <div>
    <h1>ROM</h1>
    <label>患者名：</label><input type="text" v-model="clientName"/><br/><br/>
    <table border="1" style="border-collapse:collapse">
      <tr>
        <th>運動方向</th>
        <th>右肩</th>
        <th>左肩</th>
      </tr>
      <tr v-for="content in contents1" :key="content">
        <th>{{content.title}}</th>
        <td>{{content.left}}<button @click="content.left++">+</button><button @click="content.left--">-</button></td>
        <td>{{content.right}}<button @click="content.right++">+</button><button @click="content.right--">-</button></td>
      </tr>
    </table>
    <table border="1" style="border-collapse:collapse">
      <tr>
        <th>運動方向</th>
        <th>右肘</th>
        <th>左肘</th>
      </tr>
      <tr v-for="content in contents2" :key="content">
        <th>{{content.title}}</th>
        <td>{{content.left}}<button @click="content.left++">+</button><button @click="content.left--">-</button></td>
        <td>{{content.right}}<button @click="content.right++">+</button><button @click="content.right--">-</button></td>
      </tr>
    </table>
    <table border="1" style="border-collapse:collapse">
      <tr>
        <th>運動方向</th>
        <th>右手首</th>
        <th>左手首</th>
      </tr>
      <tr v-for="content in contents3" :key="content">
        <th>{{content.title}}</th>
        <td>{{content.left}}<button @click="content.left++">+</button><button @click="content.left--">-</button></td>
        <td>{{content.right}}<button @click="content.right++">+</button><button @click="content.right--">-</button></td>
      </tr>
    </table>
    <table border="1" style="border-collapse:collapse">
      <tr>
        <th>運動方向</th>
        <th>右股関節</th>
        <th>左股関節</th>
      </tr>
      <tr v-for="content in contents4" :key="content">
        <th>{{content.title}}</th>
        <td>{{content.left}}<button @click="content.left++">+</button><button @click="content.left--">-</button></td>
        <td>{{content.right}}<button @click="content.right++">+</button><button @click="content.right--">-</button></td>
      </tr>
    </table>
    <table border="1" style="border-collapse:collapse">
      <tr>
        <th>運動方向</th>
        <th>右膝</th>
        <th>左膝</th>
      </tr>
      <tr v-for="content in contents5" :key="content">
        <th>{{content.title}}</th>
        <td>{{content.left}}<button @click="content.left++">+</button><button @click="content.left--">-</button></td>
        <td>{{content.right}}<button @click="content.right++">+</button><button @click="content.right--">-</button></td>
      </tr>
    </table>
    <table border="1" style="border-collapse:collapse">
      <tr>
        <th>運動方向</th>
        <th>右足首</th>
        <th>左足首</th>
      </tr>
      <tr v-for="content in contents6" :key="content">
        <th>{{content.title}}</th>
        <td>{{content.left}}<button @click="content.left++">+</button><button @click="content.left--">-</button></td>
        <td>{{content.right}}<button @click="content.right++">+</button><button @click="content.right--">-</button></td>
      </tr>
    </table>
    <button @click="insertRowByAxios">Submit</button>
  </div>
</template>
<script>

// fetch('https://sheetdb.io/api/v1/idwa6d315t92r', { 
//   mode: 'cors'
//   })
//   .then(function(res){
//     console.log(res.json())
//   })
import SheetDB from 'sheetdb-js'



export default {
  data: function() {
    return {
      contents1: [
        { title: '屈曲(180)', left: 180, right: 180 },
        { title: '伸展(50)', left: 50, right: 50 },
        { title: '外転(180)', left: 180, right: 180 },
        { title: '外旋(60)', left: 60, right: 60 },
        { title: '内旋(80)', left: 80, right: 80 },
        { title: '水平屈曲(135)', left: 135, right: 135 },
        { title: '水平伸展(30)', left: 30, right: 30 },
        { title: '外旋(90)', left: 90, right: 90 },
        { title: '内旋(70)', left: 70, right: 70 }
      ],
      contents2: [
        { title: '屈曲(145)', left: 145, right: 145 },
        { title: '伸展(5)', left: 5, right: 5 },
        { title: '回内(90)', left: 90, right: 90 },
        { title: '回外(90)', left: 90, right: 90 }
      ],
      contents3: [
        { title: '屈曲(90)', left: 90, right: 90 },
        { title: '伸展(70)', left: 70, right: 70 },
        { title: '撓屈(25)', left: 25, right: 25 },
        { title: '尺屈(55)', left: 55, right: 55 }
      ],
      contents4: [
        { title: '屈曲(125)', left: 125, right: 125 },
        { title: '伸展(15)', left: 15, right: 15 },
        { title: '外転(45)', left: 45, right: 45 },
        { title: '内転(20)', left: 20, right: 20 },
        { title: '外旋(45)', left: 45, right: 45 },
        { title: '内旋(45)', left: 45, right: 45 }
      ],
      contents5: [
        { title: '屈曲(130)', left: 130, right: 130 },
      ],
      contents6: [
        { title: '屈曲(45)', left: 45, right: 45 },
        { title: '伸展(20)', left: 20, right: 20 },
        { title: '外がえし(20)', left: 20, right: 20 },
        { title: '内がえし(30)', left: 30, right: 30 },
        { title: '外転(10)', left: 10, right: 10 },
        { title: '内転(20)', left: 20, right: 20 }
      ],
      clientName: ''
    }
  },
  methods: {
    getByAxios() {
      this.axios.get('https://sheetdb.io/api/v1/idwa6d315t92r')
      .then(function(res) {
        console.log(res.data)
      })
    },
    showData() {
      console.log(this.contents1)
    },
    insertRowByAxios() {
      const self = this
      const namae = this.clientName
      const params = [
        { index : 'contents1', category: '肩' },
        { index : 'contents2', category: '肘' },
        { index : 'contents3', category: '手首' },
        { index : 'contents4', category: '関節' },
        { index : 'contents5', category: '膝' },
        { index : 'contents6', category: '足首' }
      ]
      let tableData = [];
      params.forEach(function(param) {
        const index = param.index
        const assignedValue = { name: namae, category: param.category }

        const obj = self[index].map(el => {
          const newEl = Object.assign(el, assignedValue)
          return newEl
        })

        tableData.push(...obj)
      })

      const json = JSON.stringify(tableData)

console.log(json)

SheetDB.write('https://sheetdb.io/api/v1/idwa6d315t92r', {
  data: json
  })
  .then(function(result){
  console.log(result);
  }, function(error){
    console.log(error);
  });
      
    }
  }
}
</script>
<style scoped>
  table {
    margin: 0 auto;
  }
</style>