<template>
  <div>
    <h1>ROM</h1>
    <table border="1" style="border-collapse:collapse">
      <tr>
        <th>運動方向</th>
        <th>右肩</th>
        <th>左肩</th>
      </tr>
      <tr v-for="content in contents1" :key="content">
        <th>{{content.title}}</th>
        <td>{{content.left}}<button>+</button><button>-</button></td>
        <td>{{content.right}}<button>+</button><button>-</button></td>
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
        <td>{{content.left}}<button>+</button><button>-</button></td>
        <td>{{content.right}}<button>+</button><button>-</button></td>
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
        <td>{{content.left}}<button>+</button><button>-</button></td>
        <td>{{content.right}}<button>+</button><button>-</button></td>
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
        <td>{{content.left}}<button>+</button><button>-</button></td>
        <td>{{content.right}}<button>+</button><button>-</button></td>
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
        <td>{{content.left}}<button>+</button><button>-</button></td>
        <td>{{content.right}}<button>+</button><button>-</button></td>
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
        <td>{{content.left}}<button>+</button><button>-</button></td>
        <td>{{content.right}}<button>+</button><button>-</button></td>
      </tr>
    </table>

  </div>
</template>
<script>
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
    }
  }
}
</script>
<style scoped>
  table {
    margin: 0 auto;
  }
</style>