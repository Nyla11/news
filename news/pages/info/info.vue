<!-- <template>
	<view class="content">
		<view class="title">
			{{title}}
		</view>
		<view class="art-content">
			<rich-text class="richText" :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				strings:''
			}
		},
		onLoad:function(e){
			console.log(e);
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					this.title=res.data.title;
					this.strings=res.data.content;
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
.content{padding:10upx 2%; width: 96%; flex-warp:warp;}
.title{line-hight:2em; font-weight:700; font_size:38upx;}
.art-content{line-height: 2em;}
</style -->>
<template>
	<view class="content">

		<!-- 我的名字 -->
		<view style="text-align:center;margin:20rpx 0;color:#888;font-size:26rpx;">
			孙晗宁
		</view>

		<view class="title">{{title}}</view>

		<view class="art-content">
			<rich-text class="richText" :nodes="strings"></rich-text>
		</view>

	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			strings: ''
		};
	},

	onLoad(e) {
		const id = e.newsid;

		uni.request({
			// 这里也改成 posts.json
			url: 'https://raw.githubusercontent.com/Nyla11/school-data/main/posts.json',
			method: 'GET',
			success: res => {
				let list = res.data.posts; // 使用 posts
				let art = list.find(v => v.post_id == id);

				this.title = art.title;
				this.strings = art.content;
			}
		});
	}
}
</script>

<style>
.content {
	padding:10upx 2%;
	width: 96%;
}
.title {
	line-height:2em;
	font-weight:700;
	font-size:38upx;
}
.art-content {
	line-height: 2em;
}
</style>
