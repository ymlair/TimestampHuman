<template>
<el-row :gutter="20">
  <el-col :span="12">
	<el-input
	  type="textarea"
	  autosize
	  placeholder="请输入内容"
	  v-model="textA">
	</el-input>
  </el-col>
  <el-col :span="12">
	<el-input
	  type="textarea"
	  autosize
	  placeholder="请输入内容"
	  v-model="getNewVal">
	</el-input>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'TimestampHuman',
  props: {
  },
  data: function(){
    return{ 
	textA: ""
    }
  },
  computed: {
    getNewVal: function() {
	return this.textA.replace(/\d{10}/g, function(word) {
		let date = new Date(parseInt(word) * 1000);
		let Y = date.getFullYear() + '-';
		let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		let D = date.getDate() + ' ';
		let h = date.getHours() + ':';
		let m = date.getMinutes() + ':';
		let s = date.getSeconds();
		return word + "( " + Y + M + D + h + m + s + " )";
      });
	
    }
  },
  attached () {
  },
  watch: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
