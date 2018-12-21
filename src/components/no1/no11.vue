<template>
	<div>
		<p>this is no11 page</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg: 'abc',
				data: '',
			}
		},
		/*beforeCreate(){
			alert('初始化data失败');
			this.data = 'abc'; //此时初始化失败，还没有数据data
			this.getAlert('beforeCreate');  //此时还没有将method进行初始化，所以会报错
		},
		created(){
			this.data = 'abcd';
			this.getAlert('created');   //显示
		},
		beforeMount(){
			this.getAlert('beforeMount');	//显示
		},
		mounted(){
			this.getAlert('mounted');	//显示
			this.data = 'abcdefg';
			this.getAlert('此时修改了data的内容');
		},
		beforeUpdate(){
			this.getAlert('beforeUpdate');	//一般用watcher代替，数据发生修改时调用
		},
		updated(){
			this.getAlert('updated');
		},
		beforeDestroy(){
			this.getAlert('beforeDestroy');	//页面离开时，会调用这个方法
		},
		destroyed(){
			this.getAlert('destroyed');	//页面离开时，会调用这个方法
		},*/
		methods:{
			getAlert(params){
				alert('this is es6 langlage usages: '+this.data+'__'+params);
			}
		}
	}
</script>

<style>
	
</style>