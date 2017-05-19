<template>
	<footer id="footer">
		<ul>
			<li v-for="(item,index) in footerList" v-bind:class="['foo-icon-'+(index+1),{active: $route.path===item.path}]">
				<router-link :to="item.path">{{ item.text }}</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
	export default {
		data: function(){
			return {
				footerList: [{
					path: "/",
					text: "首页"
				},{
					path: "/category",
					text: "分类"
				},{
					path: "/cart",
					text: "购物车"
				},{
					path: "/user",
					text: "我的"
				}]
			}
		}
	}
</script>