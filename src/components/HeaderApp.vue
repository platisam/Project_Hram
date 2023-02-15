<template>
  <header>
    <img
      src="@/assets/header-img.jpg"
      alt="slika_header"
      title="Свети Василије Острошки"
    />

    <button @click="responsiveHeader()">{{ btntext }}</button>

    <ul v-if="ulList">
      <li>
        <RouterLink to="/">Почетна</RouterLink>
      </li>
      <li>
        <RouterLink to="/онама">О нама</RouterLink>
      </li>
      <li>
        <RouterLink to="/религија">Религија</RouterLink>
        >
      </li>
      <li>
        <RouterLink to="/галерија">Галерија</RouterLink>
      </li>
      <li>
        <RouterLink to="/контакт">Контакт</RouterLink>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

let btntext = ref("МЕНИ");
let ulList = ref(true);

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

<style lang="scss" scoped>
header {
  font-family: "Viaoda Libre", cursive;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: auto;
  align-items: center;
  padding: 20px;
  border: 2px solid orange;
  background-color: rgba(11, 14, 67, 0.9);
  margin-bottom: 50px;
  opacity: 1;

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
        font-weight: 400;
        letter-spacing: 0.75px;
        text-decoration: none;

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
  header button {
    display: block;
  }

  header ul {
    display: block;
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
