<!-- <template>
	<view class="content">
		<view class="text-area">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" :key="index" @tap="openinfo" :data-newsid="item.post_id">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="item.img"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{item.title}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news : []
			}
		},
		onLoad:function(){
			uni.showLoading({
				title:"加载中...."
			})
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					
					this.news = res.data;
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			openinfo(e) {
				var newsid=e.currentTarget.dataset.newsid;
				uni.navigateTo({
					url: '../info/info?newsid='+newsid
				});
			}
		},
	}
</script>

<style>
	.uni-media-list-body{height: auto;}
	.uni-media-list-text-top{line-height: 1.6em;}
</style> -->
<template>
	<view class="content">

		<!-- 我的名字 -->
		<view style="text-align:center;margin:20rpx 0;color:#888;font-size:26rpx;">
			孙晗宁
		</view>

		<view class="text-area">
			<view class="uni-list">
				<view class="uni-list-cell"
					hover-class="uni-list-cell-hover"
					v-for="(item,index) in news"
					:key="index"
					@tap="openinfo"
					:data-newsid="item.post_id">

					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="item.img"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{item.title}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
						</view>
					</view>

				</view>
			</view>
		</view>

	</view>
</template>

<script>
export default {
	data() {
		return {
			news : []
		};
	},

	onLoad() {
		uni.showLoading({ title:"加载中..." });

		uni.request({
			// 已替换为 posts.json
			url: 'https://raw.githubusercontent.com/Nyla11/school-data/main/posts.json',
			method: 'GET',
			success: res => {
				this.news = res.data.posts; // 注意这里是 posts
				uni.hideLoading();
			}
		});
	},

	methods: {
		openinfo(e) {
			let id = e.currentTarget.dataset.newsid;
			uni.navigateTo({
				url: '../info/info?newsid=' + id
			});
		}
	}
}
</script>

<style>
	.uni-media-list-body{height: auto;}
	.uni-media-list-text-top{line-height: 1.6em;}
</style>
