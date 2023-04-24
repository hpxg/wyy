<template>
	<view class="shosuo-box">
		<image class="left-img" src="@/static/icon_yxx2l6zwvb/sousuo.png" mode=""></image>
		<view class="shosuo" @click="">
			<image src="@/static/sousuo.png" class="sou-img"></image><span class="sou-sapn">请输入您想要的商品</span>
		</view>
		<image class="right-img" src="@/static/icon_yxx2l6zwvb/yuyin.png" mode=""></image>
	</view>
    <view class="lun-box">
		<swiper class="img-box" :indicator-dots="true" circular  indicator-color="#bbbbbb" indicator-active-color="#fff" :autoplay="true" :circular="true">
			<swiper-item v-for="(item,index) in luns" :key="index"  :data-id="item.bannerId">
				<image class="lun-img"  :src="item.pic" mode="" ></image>
			</swiper-item>
		</swiper>
	</view>
	<view class="lx-box">
		<swiper class="lximg-box"  :display-multiple-items="5">
			<swiper-item v-for="(item,index) in lx" :key="index"  :data-id="item.bannerId">
				<view class="l-box">
					<image class="lx-img"  :src="item.iconUrl" mode="" ></image>
					<text class="lx-te">{{item.name}}</text>
				</view>	
			</swiper-item>
		</swiper>
	</view>
	<view class="tuiji" >
		<view class="biaoti"  >
			<text class="biao-te">{{gedante}}<image class="biao-im" src="@/static/icon_6p9n04fpd0h/yx_icon_right.png"></image></text><image class="biao-im" src="@/static/icon_6p9n04fpd0h/Androidgengduo_o.png" mode=""></image>
		</view>
		<view class="gedan">
			<swiper class="gedan-b"   :display-multiple-items="2.5" autoplay>
				<swiper-item v-for="(item,index) in gedan.creatives" :key="index"  :data-id="item.bannerId" >
					<view class="li-box" >
						<swiper class="biao-img"  >
							<swiper-item class="gedan-x"  v-for="(it,ine) in item.resources" :key="ine"  :data-id="item.bannerId" autoplay :vertical="true">
								<image  class="img-geda" :src="it.uiElement.image.imageUrl" mode=""></image>
								<image class="imgcc" src="@/static/icon_vrnc0dxevrr/tingge.png" mode=""></image>
							</swiper-item>
						</swiper>
						<view class="li-ber"> {{item.uiElement.mainTitle.title}}</view>
						
					</view>	
				</swiper-item>
			</swiper>
		</view>
	</view>
	<view class="jingxuan" >
		<view class="biaoti"  >
			<text class="biao-te">{{dingzhite}}</text><image class="biao-im" src="@/static/icon_6p9n04fpd0h/Androidgengduo_o.png" mode="" :interval="3000"></image>
		</view>
		<view class="box-jx">
			<swiper class="jx-b"   :display-multiple-items="1" autoplay  next-margin="30rpx">
				<swiper-item v-for="(item,index) in dingzhi" :key="index"  :data-id="item.bannerId">
					<view class="jx-box">
					   <view class="jbox" v-for="(it,inx) in item.resources" :key="inx "  @click="ccc(it.resourceId)">
						   <div class="mmm">
							   <image class="j-img" :src="it.uiElement.image.imageUrl" mode=""></image>
							   <view class="mmbb">
                                   <p>{{it.uiElement.mainTitle.title}}</p>
      							   <!-- <span>{{it.uiElement.subTitle.title}}</span> -->
							   </view>
						   </div>
						   <image class="bofang" src="@/static/bofang.png" mode=""></image>
					   </view>
					</view>	
				</swiper-item>
			</swiper>
		</view>
	</view>
	<view class="paihang" >
		<view class="biaoti"  >
			<text class="biao-te">{{paihangte}}<image class="biao-im" src="@/static/icon_6p9n04fpd0h/yx_icon_right.png"></image></text>
		</view>
		<view class="pai-box">
			<swiper class="pai-box"   :display-multiple-items="1" autoplay>
				<swiper-item v-for="(item,index) in paihang" :key="index"  :data-id="item.bannerId" >
					<view class="hang-box">
					   <view class="tou-x">
						   <text class="biao-te">
					        {{item.uiElement.mainTitle.title}} <image class="biao-im" src="@/static/icon_6p9n04fpd0h/yx_icon_right.png"></image>
						   </text>
						   <text class="biao-tex">
						    {{item.uiElement.mainTitle.titleDesc}} 
						   </text>
					   </view>
					   <view class="">
					   	  <view class="gexx-b" v-for="(it,inx) in item.resources" :key="inx">
					   	  	   <div class="gexx">
					   	  			<image class="gax-img" :src="it.uiElement.image.imageUrl" mode=""></image>
					   	  				<view class="gea-tx">
					   	                    <p>{{it.uiElement.mainTitle.title}}</p>
					   	        							   
					   	  				 </view>
					   	  		 </div>
								 <text class="mmxo">{{it.uiElement.labelText.text}}</text>
					   	  					
					   	  </view>
					   </view>
					</view>	
				</swiper-item>
			</swiper>
		</view>
	</view>
	<view class="leida" >
		<view class="biaoti"  >
			<text class="biao-te">{{leidatr}}<image class="biao-im" src="@/static/icon_6p9n04fpd0h/yx_icon_right.png"></image></text><image class="biao-im" src="@/static/icon_6p9n04fpd0h/Androidgengduo_o.png" mode=""></image>
		</view>
		<view class="gedan">
			<swiper class="gedan-b"   :display-multiple-items="2.5" autoplay>
				<swiper-item v-for="(item,index) in leida" :key="index"  :data-id="item.bannerId" >
					<view class="li-box" >
						<image class="leida-img" :src="item.uiElement.image.imageUrl" mode=""></image>
						<view class="li-ber"> {{item.uiElement.mainTitle.title}}</view>
						<image class="imhccc" src="@/static/bofang.png" mode=""></image>
					</view>	
				</swiper-item>
			</swiper>
		</view>
	</view>
	<view class="jingxuan" >
		<view class="biaoti"  >
			<text class="biao-te">{{xingdte}}<image class="biao-im" src="@/static/icon_6p9n04fpd0h/yx_icon_right.png"></image></text><image class="biao-im" src="@/static/icon_6p9n04fpd0h/Androidgengduo_o.png" mode=""></image>
		</view>
		<view class="box-jx">
			<swiper class="jx-b"   :display-multiple-items="1" autoplay  next-margin="30rpx" :interval="3000">
				<swiper-item v-for="(item,index) in xingd" :key="index"  :data-id="item.bannerId" >
					<view class="jx-box">
					   <view class="jbox" v-for="(it,inx) in item.resources" :key="inx">
						   <div class="mmm">
							   <image class="j-img" :src="it.uiElement.image.imageUrl" mode=""></image>
							   <view class="mmbb">
			                       <p>{{it.uiElement.mainTitle.title}}</p>
								   <p class="mmx-tex"><span></span>{{it.uiElement.subTitle.title}}<span>{{it.resourceExtInfo.artists[0].name}}</span></p>
							   </view>
						   </div>
					   </view>
					</view>	
				</swiper-item>
			</swiper>
		</view>
	</view>
	
	
	 <view class="casda">
	 	
	 </view>

</template>

<script setup>
	import{ref,onMounted} from 'vue'
	import {shouyei,syyunxing} from "../api/api.js"

	 let luns=ref([])
	 //推荐歌单
	 let gedan=ref([])
	 let gedante=ref([])
	 //为你定制精选歌曲
	 let dingzhi=ref([])
	  let dingzhite=ref([])
	 //排行榜
	 let paihang=ref([])
	  let paihangte=ref([])
	 // 你的雷达歌单
	 let leida=ref([])
	  let leidatr=ref([])
	 //新歌
	 let xingd=ref([])
	 let xiname=ref([])
	 let xingdte=ref([])
	 let lx=ref([])
	onMounted(async()=>{
		let res =await shouyei()
		console.log(res);
		console.log(res.data.data.blocks[2].creatives);
		luns.value=res.data.data.blocks[0].extInfo.banners;
		gedan.value=res.data.data.blocks[1]
		gedante.value=res.data.data.blocks[1].uiElement.subTitle.title
		dingzhi.value=res.data.data.blocks[2].creatives
	    dingzhite.value=res.data.data.blocks[2].uiElement.subTitle.title
		paihang.value=res.data.data.blocks[3].creatives
		paihangte.value=res.data.data.blocks[3].uiElement.subTitle.title
		leida.value=res.data.data.blocks[4].creatives
	    leidatr.value=res.data.data.blocks[4].uiElement.subTitle.title
		xingd.value=res.data.data.blocks[5].creatives
		xingdte.value=res.data.data.blocks[5].uiElement.subTitle.title
		let esc=await syyunxing()
		lx.value=esc.data.data
	})
let ccc=(e)=>{
	console.log(e);
	uni.navigateTo({
		url:"/pages/bofang/bofang?id="+e
	})
}

</script>

<style>
@import url("../../static/css/faxian.css");
</style>