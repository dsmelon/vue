<template>
	<div>
		<header class="user-info">
        <a href="###">
            <div class="user-logo">
                <img src="../assets/img/user_logo.png" alt="">
            </div>
            <span>登录/注册</span>
        </a>
	    </header>
	    <div class="order-box">
	        <a href="###" class="my-order">
	            <span>我的订单</span>
	            <span>全部订单 <i class="iconfont icon-more"></i></span>
	        </a>
	        <nav class="nav-order">
	            <a href="###">
	                <i class="iconfont icon-yijianfankui"></i>
	                <p>待付款</p>
	            </a>
	             <a href="###">
	                <i class="iconfont icon-wodedingdan"></i>
	                <p>待收货</p>
	            </a>
	             <a href="###">
	                <i class="iconfont icon-auto"></i>
	                <p>退换修</p>
	            </a>
	        </nav>
	        <ul class="order-list">
	            <li class="o-list-1">
	                <a href="###">
	                     <i class="iconfont icon-discount"></i>
	                     <span>我的优惠</span>
	                     <i class="iconfont icon-more"></i>
	                </a>
	            </li>
	        </ul>
	        <ul class="order-list">
	            <li class="o-list-2">
	                <a href="###">
	                     <i class="iconfont icon-favorites"></i>
	                     <span>服务中心</span>
	                     <i class="iconfont icon-more"></i>
	                </a>
	            </li>
	            <li class="o-list-3">
	                <a href="###">
	                     <i class="iconfont icon-home"></i>
	                     <span>小米之家</span>
	                     <i class="iconfont icon-more"></i>
	                </a>
	            </li>
	        </ul>
	        <ul class="order-list">
	            <li class="o-list-4">
	                <a href="###">
	                     <i class="iconfont icon-set"></i>
	                     <span>设置</span>
	                     <i class="iconfont icon-more"></i>
	                </a>
	            </li>
	        </ul>
	    </div>
	    <footer-bar></footer-bar>
	</div>
</template>

<script>
	export default {
		name: 'user'
	}
</script>