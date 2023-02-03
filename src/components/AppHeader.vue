<template>
  <div class="header">
    <!--<RouterLink to="/">Home</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>-->

    <img
      src="../assets/header-img.jpg"
      alt="slika_header"
      title="Свети Василије Острошки"
    />

    <button @click="responsiveHeader()">{{ btntext }}</button>

    <ul v-if="ulList">
      <li>
        <a href="index.html">{{ start }}</a>
      </li>
      <li>
        <a href="o_nama.html" target="_blank">{{ aboutUs }}</a>
      </li>
      <li>
        <a href="https://www.eparhijabanatska.rs/veronauka-2/" target="_blank">{{
          religion
        }}</a>
      </li>
      <li>
        <a href="#">{{ galery }}</a>
      </li>
      <li>
        <a href="/contact" target="_blank">{{ contact }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

let btntext = ref("МЕНИ");
let ulList = ref(true);

let start = ref("Почетна");
let aboutUs = ref("О нама");
let religion = ref("Веронаука");
let galery = ref("Галерија");
let contact = ref("Контакт");

const responsiveHeader = () => {
  if (btntext.value === "МЕНИ") {
    ulList.value = true;
    btntext.value = "ЗАТВОРИ";
  } else {
    ulList.value = false;
    btntext.value = "МЕНИ";
  }
};
</script>

<style lang="scss">
.header {
  font-family: Arial, sans-serif;
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
