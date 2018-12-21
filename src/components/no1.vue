<template>
	<div>
		<h2>this is no1 page</h2>
		<ul>
			<span class="no1-li-span"><router-link to="/no1/no11">no11</router-link></span>
			&nbsp;&nbsp;&nbsp;
			<span class="no1-li-span"><router-link to="/no1/no12">no12</router-link></span>
		</ul>
		<div class="no1-content">
			<router-view/>
		</div>
	</div>
</template>

<script>
	import no11 from '../components/no1/no11'
</script>

<style scoped>
	.no1-content{
		width: 100%;
		height: auto;
		margin-top: 20px;
		background-color: lightskyblue;
	}
	div ul{
		margin-top: 10px;
	}
	.no1-li-span{
		cursor: pointer;
	}
</style>
