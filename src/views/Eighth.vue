<template>
  <div>
    <table>
      <tr>
        <th v-for="day in week" :key="day">{{ day }}</th>
      </tr>
      <tr>
        <td>{{ timeZone }}</td>
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
      ]
    }
  },
  computed: function() {
    return {
      timeZone: function() {
        const date = new Date(2020,3,31,5,0)
        date.setHours(date.getHours() + 0.5)
        console.log(date.toLocaleString())
      }

    }

  }
}
</script>