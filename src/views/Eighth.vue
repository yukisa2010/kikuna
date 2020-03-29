<template>
  <div>
    <table border="1" style="border-collapse: collapse">
      <tr>
        <th>時間</th>
        <th v-for="day in week" :key="day">{{ day }}</th>
      </tr>
      <tr v-for="strTime in strTimes" :key="strTime">
        <th>{{ strTime }}</th>
        <td v-for="day in week" :key="day"><input type="text"/></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      week: [
        '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'
      ],
      strTimes: [
        '5:00', '5:30', '6:00', '6:30', 
        '7:00', '7:30', '8:00', '8:30', 
        '9:00', '9:30', '10:00', '10:30', 
        '11:00', '11:30', '12:00', '12:30',
        '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30',
        '17:00', '17:30', '18:00', '18:30',
        '19:00', '19:30', '20:00', '20:30',
        '21:00', '21:30', '22:00', '22:30',
        '23:00', '23:30', '24:00'
      ]
    }
  },
  computed: function() {
    return {
      timeZone: function() {
        return this.week
      }
    }

  }
}
</script>

<style scoped>
  table {
    margin: 0 auto;
  }

</style>