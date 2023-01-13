<template>
    <div class="header">

		<img src="img/header-img.jpg" alt="slika_header" title="Свети Василије Острошки">

		<button>МЕНИ</button>
			
		<ul>
			<li><a href="index.html">Почетна</a></li>
			<li><a href="o_nama.html" target="_blank">О нама</a></li>
			<li><a href="https://www.eparhijabanatska.rs/veronauka-2/">Веронаука</a></li>
			<li><a href="#">Галерија</a></li>
			<li><a href="contact.html" target="_blank">Контакт</a></li>
		</ul>
			
	</div>
</template>


<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	max-width: 1000px;
	margin: auto;
	align-items: center;
	padding: 20px;
	border: 2px solid orange;
	background-color: rgba(11, 14, 67, 0.9);
	margin-bottom: 50px;
}

.header img {
	max-width: 200px;
    height: 60px;
    width: 60px;
    border-radius: 7px;
    outline: 1px solid orange;
}

.header ul {
	display: flex;
	list-style: none;
	font-size: 16px;
	justify-content: space-around;
    z-index: 99;
}

.header ul li a {
	padding: 10px 20px;
	display: inline-block;
    color: white;
}

.header ul li a:hover {
    text-decoration: none;
    color: #fff;
    position: relative;
    top: -2px;
}

.header button {
	display: none;
	padding: 10px;
    color: navy;
    font-weight: 700;
    border-radius: 5px;
    border: 2px solid navy;
    background-color: blanchedalmond;
}

@media (max-width: 1000px) {
	.header button {
		display: block;
	}

	.header ul {
		display: none;
		background-color: rgba(11, 14, 67, 0.9);
        border: 2px solid orange;
		position: absolute;
	    width: 100%;
	    left: 0;
	    right: 0;
	    top: 119px;
	}
}
</style>