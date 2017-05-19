<template>
	<div>
		<div class="top-banner">
        <header>
            <a href="#" class="back-btn">
                <i class="iconfont icon-back"></i>
            </a>
            <h2>
                购物车
            </h2>
            <a href="#">
                <i class="iconfont icon-search"></i>
            </a>
        </header>
	    </div>
	    <div class="nologin">
	        <a href="###">
	            <span>登录后享受更多优惠</span>
	            <em>去登录<i class="iconfont icon-more"></i></em>
	        </a>
	    </div>
	    <div class="noitem">
	        <a href="###">
	            <span>购物车还是空的</span>
	            <em>去逛逛</em>
	        </a>
	    </div>
	    <div id="recomment">
	        <h2>为你推荐</h2>
	        <ul class="recomment-list">
	            <li>
	                <a href="###">
	                    <img src="../assets/img/p2.jpg" alt="">
	                    <div class="info">
	                        <p>米家压力IH电饭煲</p> 
	                        <strong class="price">
	                            &yen;999
	                        </strong>
	                    </div>
	                </a>
	            </li>
	            <li>
	                <a href="###">
	                    <img src="../assets/img/p2.jpg" alt="">
	                    <div class="info">
	                        <p>米家压力IH电饭煲</p> 
	                        <strong class="price">
	                            &yen;999
	                        </strong>
	                    </div>
	                </a>
	            </li>
	            <li>
	                <a href="###">
	                    <img src="../assets/img/p2.jpg" alt="">
	                    <div class="info">
	                        <p>米家压力IH电饭煲</p> 
	                        <strong class="price">
	                            &yen;999
	                        </strong>
	                    </div>
	                </a>
	            </li>
	            <li>
	                <a href="###">
	                    <img src="../assets/img/p2.jpg" alt="">
	                    <div class="info">
	                        <p>米家压力IH电饭煲</p> 
	                        <strong class="price">
	                            &yen;999
	                        </strong>
	                    </div>
	                </a>
	            </li>
	        </ul>
	    </div>
	   <footer-bar></footer-bar>
	</div>
</template>

<script>
	export default {
		name: 'cart',
		mounted(){
		    this.$http.get("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",{
		    	params: {
		    		wd: "哈哈",
		    	}
		    }).then(function(response){
				console.log(response);
			})
		}
	}
</script>