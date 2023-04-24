<template>

<view class="">
	<image :src="imgc" mode=""></image>
</view>
<view class="" @click="youke">
	<text>游客登录</text>
</view>
</template>

<script setup>
     import {ewmone,ewmtwo,ewmthree,yk} from '../api/api.js'
     import {ref, onMounted} from 'vue'
	 let key =ref('')
	let imgc=ref('')
	let timer=ref('')
	 onMounted(async ()=>{
		  const res =await ewmone()
		  // console.log(res);
		  key.value=res.data.data.unikey	
		  two(key.value,1)	
	   timer = setInterval(() => {
             three(key.value)
		
		  }, 5000);
	 })
	 let two =async(k,c)=>{
		 const res =await ewmtwo(k,c)
		 	 console.log(res)
		imgc.value=res.data.data.qrimg
	 }
	 
    	 let three=async()=>{
		let res=await ewmthree(key.value)
			 console.log(res.data);
			 if(res.data.message=="授权登陆成功"){
				  clearInterval(timer)
				  	// uni.setStorageSync('cookie',res.deta.cookie)
			youke()
			 }else if(res.data.message=="二维码已过期"){
				  clearInterval(timer)
			 }
		 }
	let ye =async()=>{
		let res =await yk();
		console.log(res.data.cookie);
		uni.setStorageSync('cookie',res.deta.cookie)
	 }
	 let youke=()=>{
		 ye()
		 uni.switchTab({
			 url:"/pages/wd/wd"
		 })
	 }

</script>

<style>

</style>
