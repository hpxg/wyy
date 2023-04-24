<template>
	<view class="box">
		<view class="yuan">
			<image :src=obj.url mode=""></image>
		</view>

		<view class="jd">
			<slider :value="num" @change="sliderChange"  />
		</view>

		<view class="bot">
			<image src="@/static/bf/zanting.png" mode=""></image>
			<image src="@/static/zan.png" mode="" @click="sss"></image>
			<image src='@/static/icon_acosp6m53u/bofang.png' mode=""></image>
		
		</view>

	</view>
</template>

<script setup>
	import {
		useRoute
	} from 'vue-router'
	import {
		onLoad,
		onShow,
		onReady,
		onUnload,
		onHide
	} from "@dcloudio/uni-app"
	import {
		ref
	} from "vue";
	import {
		yinyue
	} from '../api/api.js'



	let imgarr = ['../../static/zanting.png', '/static/bofang_1.png']

	const route = useRoute()
	let flag = ref(true)
	let obj = uni.getStorageSync('bf')
	let imgurl = ref('')
	let num = ref(0)
 onLoad((option)=>{
	console.log(option.id);
	// arr.value=option.id

qq(option.id)
	})
	const audioContext = uni.createInnerAudioContext();
	// audioContext.stop()
	// console.log(uni.getStorageSync('bf'));

	let qq = async (w) => {
		let cc = (await yinyue(w)).data.data[0]
		console.log(cc);
		imgurl.value = cc.url
		audioContext.src = cc.url
		audioContext.loop=true
		audioContext.play();

		audioContext.onTimeUpdate(() => {

			let currentTime = audioContext.currentTime; // 获取当前播放时间
			let duration = audioContext.duration; // 获取歌曲总时长
			let progress = currentTime / duration * 100; // 计算进度条的进度
			 num.value =progress
		
			// console.log(audioContext.currentTime);
			// console.log(audioContext.duration);
		})

	}



	onHide(()=>{
	
	}) 

	onUnload(() => {
		audioContext.destroy()
		
	})





	let sliderChange = (e) => {
	
		let value = e.detail.value;
		let duration = audioContext.duration;
		let currentTime = duration * value / 100; 
		audioContext.seek(currentTime);
		// console.log(duration);
	}

	let sss = () => {

		flag.value = !flag.value

		// console.log(flag.value);
		if (flag.value) {
			console.log(1);
			audioContext.play();
		} else {
			console.log(2);
			audioContext.pause()
		}
	}
</script>

<style scoped>
	.box {
		background: linear-gradient(to right, #111, #444);
		overflow: hidden;
		/* opacity: .7; */
		height: 100vh;
	}

	.yuan {
		width: 300rpx;
		height: 300rpx;
		/* background-color: forestgreen; */
		border: 100rpx solid black;

		border-radius: 50%;
		margin: 0 auto;
		margin-top: 280rpx;
	}

	.yuan image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.jd {
		margin: 0 auto;
		margin-top: 180rpx;
		width: 650rpx;
	}

	.bot {
		margin: 0 auto;
		margin-top: 80rpx;
		display: flex;
		justify-content: space-around;
	}

	.bot image {
		width: 100rpx;
		height: 100rpx;

	}
</style>