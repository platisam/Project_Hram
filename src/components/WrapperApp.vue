<template>
  <div class="slider-wrapper">
    <button id="left-btn" @click="toLeft()"><i class="arrow"></i></button>

    <div class="slider-images">
      <img
        src="../assets/slide8.jpg"
        alt="slika8"
        title="Слика Храма - купола и звоник"
      />
      <img src="../assets/kupola.jpg" alt="vitraz" title="Слика Храма - купола" />
      <img src="../assets/slide3.jpg" alt="slika3" title="Слика Храма - главни улаз" />
      <img src="../assets/slide5.jpg" alt="slika5" title="Слика Храма - порта" />
      <img src="../assets/slide6.jpg" alt="slika6" title="Слика Храма - улаз двориште" />
      <img src="../assets/vitraz.jpg" alt="vitraz" title="Слика Храма - витраж" />
      <img src="../assets/slide7.jpg" alt="slika7" title="Слика Храма - улаз и купола" />
      <img src="../assets/slide1.jpg" alt="slika1" title="Слика Храма - пејзаж" />
    </div>

    <button id="right-btn" @click="toRight()"><i class="arrow"></i></button>
  </div>
</template>

<script setup>
//let desnoDugme = document.querySelector("#right-btn");
//let levoDugme = document.querySelector("#left-btn");
let slike = document.querySelectorAll(".slider-images img");

let indekSlike = 0;

const toRight = () => {
  obrisiSlike();
  indekSlike++;

  if (indekSlike === slike.length) {
    indekSlike = 0;
  }

  slike[indekSlike].style.display = "block";
};

const toLeft = () => {
  obrisiSlike();
  indekSlike--;

  if (indekSlike === -1) {
    indekSlike = slike.length - 1;
  }

  slike[indekSlike].style.display = "block";
};

const obrisiSlike = () => {
  slike.forEach((slika) => {
    slika.style.display = "none";
  });
};
</script>

<style lang="scss">
.slider-wrapper {
  max-width: 1000px;
  height: 550px;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.24), 0 9px 46px 8px rgba(0, 0, 0, 0.22),
    0 11px 15px -7px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  margin-bottom: 50px;

  .slider-images {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: none;

      &:first-child {
        display: block;
      }
    }
  }

  button {
    height: 65px;
    width: 65px;
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    top: 40%;
    position: absolute;
    z-index: 999;

    .arrow {
      border: solid rgb(255, 235, 205);
      border-width: 0 4px 4px 0;
      display: inline-block;
      padding: 10px;
      outline: none;
    }
  }

  #right-btn {
    right: 0;

    .arrow {
      transform: rotate(-45deg);
    }
  }

  #left-btn {
    left: 0;

    .arrow {
      transform: rotate(135deg);
    }
  }
}
</style>
