<template>
	<view class="box">
		<view class="yuan">
			<image :src=obj.url mode=""></image>
		</view>

		<view class="jd">
			<slider :value="num" @change="sliderChange"  />
		</view>

		<view class="bot">
			<image src="/static/shangyishou.png" mode=""></image>
			<image :src=flag?imgarr[0]:imgarr[1] mode="" @click="sss"></image>
			<image src='/static/xiayishou.png' mode=""></image>
		
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
		url
	} from '../../apis/apis.js'



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

	let qq = async () => {
		let cc = (await url(obj.id)).data.data[0]
		imgurl.value = cc.url
		audioContext.src = cc.url
		audioContext.play();
		audioContext.loop=true
		// audioContext.sessionCategory="soloAmbient"
		// let  duration = audioContext.duration
		// console.log(duration);
		// console.log(imgurl.value);
// console.log(num.value);
		audioContext.onTimeUpdate(() => {

			let currentTime = audioContext.currentTime; // 获取当前播放时间
			let duration = audioContext.duration; // 获取歌曲总时长
			let progress = currentTime / duration * 100; // 计算进度条的进度
			 num.value =progress
		
			// console.log(audioContext.currentTime);
			// console.log(audioContext.duration);
		})

	}
	qq()





	onLoad(() => {
	// console.log(uni.getStorageSync('bf'));
	// audioContext.stop() 
	 // audioContext.stop()

	})

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