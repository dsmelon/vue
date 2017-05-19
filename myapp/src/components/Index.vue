<template>
<div>
	<header id="headerNav">
	<div class="logo">
		<img src="../assets/img/logo.png" alt="">
	</div>
	<a href="#" class="search-bar">
		<input type="text" placeholder="搜索商品名称">
	</a>
	<a href="#" class="login">登录</a>
	</header>

	<div class="swiper-container">
		<div class="swiper-wrapper">
			<a href="" class="swiper-slide"><img src="../assets/img/1.jpg" alt=""></a>
			<a href="" class="swiper-slide"><img src="../assets/img/2.jpg" alt=""></a>
			<a href="" class="swiper-slide"><img src="../assets/img/1.jpg" alt=""></a>
			<a href="" class="swiper-slide"><img src="../assets/img/2.jpg" alt=""></a>
		</div>
		<div class="swiper-pagination"></div>
	</div>
	<div class="top-news">
		<div class="news-logo">
			<img src="../assets/img/news_logo.png" alt="">
		</div>
		<a href="#" class="news-title ellipsis">
			<span>|</span>
			出行新玩物，米家电动滑板车开箱
		</a>
	</div>
	<div id="product">
		<section>
			<div class="head-product">
				<a href="#">
					<img src="../assets/img/p1.jpg" alt="">
				</a>
			</div>
			<ul class="product-list">
				<li>
					<a href="">
						<div>
							<img src="../assets/img/p2.jpg" alt="">
						</div>
						<div class="tips">
							<h2 class="ellipsis">小米手环2</h2>
							<p class="sub-title ellipsis">OLED 显示屏，触摸操作</p>
							<p class="price">&yen; 149</p> 
						</div> 
					</a>
				</li>
				<li>
					<a href="">
						<div>
							<img src="../assets/img/p2.jpg" alt="">
						</div>
						<div class="tips">
							<h2 class="ellipsis">小米手环2</h2>
						<p class="sub-title ellipsis">OLED 显示屏，触摸操作</p>
						<p class="price">&yen; 149</p> 
						</div> 
					</a>
				</li>
				<li>
					<a href="">
						<div>
							<img src="../assets/img/p2.jpg" alt="">
						</div>
						<div class="tips">
							<h2 class="ellipsis">小米手环2</h2>
						<p class="sub-title ellipsis">OLED 显示屏，触摸操作</p>
						<p class="price">&yen; 149</p> 
						</div> 
					</a>
				</li>
				<li>
					<a href="">
						<div>
							<img src="../assets/img/p2.jpg" alt="">
						</div>
						<div class="tips">
							<h2 class="ellipsis">小米手环2</h2>
						<p class="sub-title ellipsis">OLED 显示屏，触摸操作</p>
						<p class="price">&yen; 149</p> 
						</div> 
					</a>
				</li>
			</ul>
		</section>
	</div>
	
	<footer-bar></footer-bar>

	<a href="" id="goTop"><img src="../assets/img/go_top.png" alt=""></a>
</div>
</template>

<script>
	export default {
		name: 'index',
		mounted(){
			new Swiper(".swiper-container", {
		        pagination: ".swiper-pagination",
		        loop: true,
		    })
		}
	}
	
</script>