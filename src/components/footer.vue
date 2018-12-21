<template>
	<div class="footer">
		<p>这是footer的内容</p>
	</div>
</template>

<script>
	
</script>

<style>
	.footer{
		width: 100%;
		height: 100px;
		margin-top: 20px;
		background-color: gray;
		bottom: 0;
		overflow: hidden;  /*解决上方元素脱离文档流的问题，也可以使用clear:both来解决*/
	}
</style>
