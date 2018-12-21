<template>
	<div class="index-content">
		<p>vue的生命周期</p>
		<!-- 添加replace的表示链接跳转后不会留下历史记录，也就是路由不能后退 -->
		<!-- <p><router-link to="/rightOne" replace>to rightOne</router-link></p> -->
		<p><router-link to="/rightOne">to a new page</router-link></p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg: 'aaa'
			}
		}
	}
</script>

<style scoped>
	.index-content{
		width: 100%;
		height: auto;
	}
</style>
