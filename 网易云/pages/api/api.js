
const retre='http://47.113.230.184:7749'
// 二维码
export const ewmone=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: retre+'/login/qr/key',
			data:{
				
			},
			 success: res => resolve(res)
		})
	})
}
 // /login/qr/create
export const ewmtwo=(c,b)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: retre+'/login/qr/create',
			data:{
				key:c,
				qrimg:b
			},
			 success: res => resolve(res)
		})
	})
}
export const ewmthree=(c)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: retre+'/login/qr/check',
			data:{
				key:c,
			},
			 success: res => resolve(res)
		})
	})
}

// 游客 /register/anonimous
export const yk=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: retre+'/register/anonimous',
			data:{
				
			},
			 success: res => resolve(res)
		})
	})
}
//首页 /homepage/block/page
export const shouyei=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: retre+'/homepage/block/page',
			data:{
				
			},
			 success: res => resolve(res)
		})
	})
}
// /homepage/dragon/ball
export const syyunxing=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: retre+'/homepage/dragon/ball',
			data:{
				
			},
			 success: res => resolve(res)
		})
	})
}
//我的
///login/status
export const zuangtai=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: retre+'/login/status',
			data:{
				
			},
			 success: res => resolve(res)
		})
	})
}
//用户 /user/detail?uid=32953014
export const yonhu=(c)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: retre+'/user/detail',
			data:{
				uid:c
			},
			 success: res => resolve(res)
		})
	})
}
// 账号 /user/account
export const zhanghao=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: retre+'/user/level',
			data:{
			},
			 success: res => resolve(res)
		})
	})
}
//音乐
export const yinyue=(c)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: retre+'/song/url',
			data:{
				id:c
			},
			 success: res => resolve(res)
		})
	})
}