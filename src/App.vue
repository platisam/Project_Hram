<template>
  <div class="header">
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
  </div>
  <RouterView />
  <footer>
    <p>пратите нас</p>
    <div class="social-links">
      <a href="https://sr-rs.facebook.com/crkvasvvasilija/"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a
        href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fexplore%2Flocations%2F551820990%2Fcrkva-sveti-vasilije-ostroski%2F%3Fhl%3Den%26__coig_login%3D1"
        ><i class="fab fa-instagram"></i
      ></a>
      <a href="https://www.youtube.com/watch?v=PmUC4H0n1J0&t=35s"
        ><i class="fab fa-youtube"></i
      ></a>
    </div>
    <div class="footerCopyright">
      <small>Copyright &copy; Храм Светог Василија Острошког</small>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
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

<style lang="scss">
.header {
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

footer {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
  text-align: center;
  background-color: rgba(246, 198, 87, 0.9);
  padding: 10px 0 0;
  max-width: 1000px;
  margin: 40px auto 0;
  border: 2px solid orange;
  box-shadow: inset 0 5px 5px rgb(0, 0, 0, 0.1);

  p {
    color: navy;
    font-size: 14px;

    &::after {
      content: "";
      width: 55px;
      height: 1px;
      display: block;
      background-color: rgb(94, 94, 12);
      margin: 0 auto;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
  }

  .footerCopyright {
    text-align: center;
    padding: 15px 0;
    border-top: 1px solid rgb(94, 94, 12);
    margin-top: 10px;
    color: navy;
  }
}
</style>
