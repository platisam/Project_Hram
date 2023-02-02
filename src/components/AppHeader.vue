<template>
  <div class="header">
    <!--<RouterLink to="/">Home</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>-->

    <img
      src="@/assets/sveti-vasilije.jpg"
      alt="slika_header"
      title="Свети Василије Острошки"
    />

    <button @click="responsiveHeader()">МЕНИ</button>

    <ul>
      <li><a href="index.html">Почетна</a></li>
      <li><a href="o_nama.html" target="_blank">О нама</a></li>
      <li><a href="https://www.eparhijabanatska.rs/veronauka-2/">Веронаука</a></li>
      <li><a href="#">Галерија</a></li>
      <li><a href="contact.html" target="_blank">Контакт</a></li>
    </ul>
  </div>
</template>

<script setup>
let btnHeader = document.querySelector(".header button");
let menuList = document.querySelector(".header ul");

const responsiveHeader = () => {
  if (btnHeader.textContent === "МЕНИ") {
    menuList.style.display = "block";
    btnHeader.textContent = "ЗАТВОРИ";
  } else {
    menuList.style.display = "none";
    btnHeader.textContent = "МЕНИ";
  }
};
</script>

<style lang="scss">
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

  img {
    max-width: 200px;
    height: 60px;
    width: 60px;
    border-radius: 7px;
    outline: 1px solid rgb(215, 165, 0);
  }

  button {
    display: none;
    padding: 10px;
    color: rgb(0, 0, 128);
    cursor: pointer;
    font-weight: 700;
    border-radius: 5px;
    border: 2px solid rgb(0, 0, 128);
    background-color: rgb(255, 235, 205);
  }

  ul {
    display: flex;
    list-style: none;
    font-size: 16px;
    justify-content: space-around;
    z-index: 99;

    li {
      a {
        padding: 10px 20px;
        display: inline-block;
        color: #fff;

        &:hover {
          text-decoration: none;
          color: rgb(215, 165, 0);
          position: relative;
          top: -2px;
        }
      }
    }
  }
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
