<template>
  <div id="hero">
    <div id="banner-links">
      <a href="https://crkvenikalendar.rs/">Црквени календар</a>
      <a href="#">Распоред богослужења</a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#hero {
  height: 450px;
  max-width: 1000px;

  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.4) 20%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(../assets/kupola.jpg);
  background-repeat: no-repeat;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center center;

  #banner-links {
    text-align: center;
    font-family: "Viaoda Libre", cursive;

    a:nth-child(1) {
      background-color: rgba(246, 198, 87, 0.7);
      color: rgba(11, 14, 67, 0.9);
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 1px;
      text-transform: uppercase;
      border: 2px solid rgba(11, 14, 67, 0.9);
      border-radius: 5px;
      text-decoration: none;
      padding: 10px 24px;

      &:hover {
        background-color: rgba(11, 14, 67, 0.7);
        color: rgba(246, 198, 87);
      }
    }

    a:nth-child(2) {
      background-color: rgba(246, 198, 87, 0.7);
      color: rgba(11, 14, 67, 0.9);
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 1px;
      text-transform: uppercase;
      border: 2px solid rgba(11, 14, 67, 0.9);
      border-radius: 5px;
      text-decoration: none;
      padding: 10px 20px;

      &:hover {
        background-color: rgba(11, 14, 67, 0.7);
        color: rgba(246, 198, 87);
      }
    }
  }
}
</style>
