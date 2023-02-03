<template>
  <div class="context">
    <div class="sadrzaj">
      <span class="citat"
        >"Ни један пријатељ злата никада није постао пријатељ Христа или људи."</span
      >
      <span class="svetac">Свети Јован Златоусти</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.context {
  height: 450px;
  max-width: 1000px;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(../assets/Gospojina.jpg);
  margin: 50px auto;
  font-family: "Viaoda Libre", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center center;
  border: 2px solid rgb(215, 165, 0);

  .sadrzaj {
    z-index: 99;
    width: 750px;
    max-width: 100%;
    margin: 0 auto;

    .citat {
      font-style: italic;
      text-align: center;
      display: block;
      font-size: 52px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 1.8px;
      opacity: 0.7;

      &::after {
        content: "";
        width: 130px;
        height: 1.25px;
        display: block;
        background-color: rgb(215, 165, 0);
        margin: 0 auto;
        margin-top: 35px;
        margin-bottom: 35px;
        opacity: 0.9;
      }
    }

    .svetac {
      font-size: 18px;
      letter-spacing: 0.9px;
      text-align: center;
      display: block;
      font-style: italic;
      color: #fff;
      opacity: 0.8;
    }
  }
}
</style>
