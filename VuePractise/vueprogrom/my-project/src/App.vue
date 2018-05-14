<template>
   <div id="app">
   	     <h1>在线翻译</h1>
   	     <h5 class="text-muted">简单、易用，便捷</h5>
         <translateForm v-on:formSubmit="translateText"></translateForm>
         <translateOutput v-text="trabslatedText"></translateOutput>
   </div>  
</template>
<script>

import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'

export default {
  name:"app",
  components:{
  	TranslateForm,TranslateOutput 	
  },
  methods:{
  	translateText:function(text,language){
//		alert(text);
      this.$http.get('https:translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl&lang='+language+'&text='+text)
      .then((reponse)=>{
      	console.log(response.body.text[0]);
      	this.trenslatedText = respose.body.text[0];
      })
  	}
  }
}
</script>

<style>

</style>
