<template>
  <div class="row" id="translateForm">
  	<form id="transForm" v-on:submit="formSubmit">
  		<input type="text" v-model="textToTranslate"  placeholder="请输入需要翻译的文字">
  		<select v-model="language">
  			<option value="en">English</option>
  		</select>
  		<input type="submit" value="翻译">
  	</form>
  </div>
</template>
<script>

export default {
  name:'translateForm',
  data:function{
  	return {
  		textToTranslate:"",
  		language:""
  	}
  },
  methods:{
  	formSubmit:function(e){
//		alert(this.textToTranslate);
  		this.$emit("formSubmit",this.textToTranslate,this.language);
  		e.preventDefault();
  	},
  	created:function(){
  		this.language = "en"
  	}
  }
}
</script>

<style>

</style>
