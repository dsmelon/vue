<template>
	<div>
		<input type="text" v-model.trim="text"><button v-on:click="addTodo">add</button>
		<ol>
			<li v-for="todo,index in todolist" v-on:click="remove(index)">{{ todo }}</li>
		</ol>
	</div>
</template>

<script type="text/javascript">
export default {
  name: 'todo',
  data(){
    return {
    	text: '',
  		todolist: ['A','B','C']
  	}
  },
  methods: {
  	addTodo(){
  		if(this.text){
  			this.todolist.unshift(this.text);
  			this.text='';
  		}
  	},
  	remove(index){
  		this.todolist.splice(index,1);
  	}
  }
}
</script>

<style scoped>
	div {
		width: 400px;
		margin: 0 auto;
	}
</style>