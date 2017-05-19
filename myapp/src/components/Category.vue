<template>
	<div>
		<div id="category" class="top-banner">
	        <header>
	            <a href="#" class="back-btn">
	                <i class="iconfont icon-back"></i>
	            </a>
	            <h2>
	                商品分类
	            </h2>
	            <a href="#">
	                <i class="iconfont icon-search"></i>
	            </a>
	        </header>
	        <nav class="product-category">
	            <div class="product-category-wrapper">
	                <div class="nav-info">
	                    <a class="active">手机·电话卡</a>
	                    <a>笔记本·平板</a>
	                    <a>电视·盒子</a>
	                    <a>智能硬件·路由器</a>
	                    <a>移动电源·插线板·电池</a>
	                    <a>耳机·音响·存储卡</a>
	                </div>
	            </div>
	        </nav>
	        <div id="infoList">
	            <section>
	                <div class="channel-banner">
	                    <a href="###">
	                        <img src="../assets/img/active/p3.jpg" alt="">
	                    </a>
	                </div>
	                <h2 class="category-title">手机·电话卡</h2>
	                <ul class="list-wrap">
	                    <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                     <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                     <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                     <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                </ul>
	            </section>
	            <section>
	                <div class="channel-banner">
	                    <a href="###">
	                        <img src="../assets/img/active/p3.jpg" alt="">
	                    </a>
	                </div>
	                <h2 class="category-title">手机·电话卡</h2>
	                <ul class="list-wrap">
	                    <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                     <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                     <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                     <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                </ul>
	            </section>
	            <section>
	                <div class="channel-banner">
	                    <a href="###">
	                        <img src="../assets/img/active/p3.jpg" alt="">
	                    </a>
	                </div>
	                <h2 class="category-title">手机·电话卡</h2>
	                <ul class="list-wrap">
	                    <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                     <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                     <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                     <li>
	                        <a href="#">
	                            <img src="../assets/img/active/product1.jpg" alt="">
	                            <p>笔记本12.5"</p> 
	                        </a>
	                    </li>
	                </ul>
	            </section>
	        </div>
	    </div>
	   <footer-bar></footer-bar>
	</div>
</template>

<script>
	export default {
		name: 'category',
		mounted(){
			var navTop = document.querySelector(".product-category").getBoundingClientRect().top;
	        var navBar = document.querySelector(".product-category-wrapper");
	        window.addEventListener("scroll", function() {
	            if(document.body.scrollTop > navTop) {
	                console.log("as")
	                navBar.classList.add("nav-fixed");
	            }else {
	                navBar.classList.remove("nav-fixed");
	            }
	        }, false) 
		}
	}
</script>