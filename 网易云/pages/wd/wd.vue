<template>
</template>

<script setup>
	import {ref,onMounted} from 'vue'
	import {zuangtai,yonhu,zhanghao,yinyue} from "../api/api.js"
	let id =ref('')
	onMounted(async()=>{
		let res =await zuangtai()
		id.value=res.data.data.account.id
        let ess =await yonhu(32953014)
		let mcx =await zhanghao()
		let yin =await yinyue()
	     console.log(yin);
	})
</script>

<style>
</style>