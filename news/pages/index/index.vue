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
		<view class="card" v-for="item in news" :key="item.post_id"
			@tap="openinfo(item)">
			
			<image class="cover" :src="item.img"></image>

			<view class="info">
				<view class="title">{{ item.title }}</view>
				<view class="time">{{ item.created_at }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			news: []
		}
	},
	onLoad() {
		uni.showLoading({ title: "加载中..." });

		uni.request({
			url: "https://raw.githubusercontent.com/Nyla11/school-data/main/posts.json",
			success: res => {
				this.news = res.data.posts;
			},
			complete: () => uni.hideLoading()
		})
	},
	methods: {
		openinfo(item) {
			uni.navigateTo({
				url: "/pages/info/info?data=" + encodeURIComponent(JSON.stringify(item))
			});
		}
	}
}
</script>

<style>
.content {
	padding: 20rpx;
	background: #f5f6fa;
	min-height: 100vh;
}

.card {
	background: #fff;
	border-radius: 16rpx;
	box-shadow: 0 6rpx 20rpx rgba(0,0,0,0.06);
	margin-bottom: 26rpx;
	overflow: hidden;
}

.cover {
	width: 100%;
	height: 320rpx;
	object-fit: cover;
}

.info {
	padding: 24rpx;
}

.title {
	font-size: 32rpx;
	font-weight: 700;
	color: #333;
}

.time {
	font-size: 26rpx;
	color: #888;
	margin-top: 12rpx;
}
</style>
