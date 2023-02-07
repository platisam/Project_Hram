<template>
  <div class="container_info">
    <h4>Основне информације:</h4>
    <ul>
      <li>Локација: Београд, Србија</li>
      <li>Религија: Хришћанство</li>
      <li>Општина: Нови Београд</li>
      <li>Држава: Србија</li>
      <li>Патрон: Свети Василије Острошки</li>
      <li>Архитекта: Михајло Митровић</li>
      <li>Оснивање: 2001.година</li>
    </ul>
    <h3>Занимљив детаљ Храма</h3>
    <p>
      Занимљив детаљ на Храму је свакако слог опека са датумом „24.03.1999.“ –
      којим је на симболичан начин обележен дан великог страдања нашег народа,
      односно почетак НАТО агресије на тадашњу Савезну Републику Југославију
      (СРЈ) која је трајала 78 дана 1999. године. Архитекта Михајло Митровић,
      иако је почело бомбардовање, дошао је на градилиште и рекао мајсторима да
      на том месту, до ког су стигли са радовима, обележе датум слогом опека –
      датум почетка немилосрдног бомбардовања наше земље.
    </p>
    <img src="../assets/opeka.jpg" alt="датум" />
    <p>
      Интересантна је чињеница да је Храм једина грађевина у Београду која је на
      овакав начин обележила бомбардовање и оставила својеврсни записани траг на
      зиду Божијег храма о овим немилим временима.
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container_info {
  max-width: 700px;
  margin: 0 auto;

  h4 {
    font-size: 18px;
    letter-spacing: 1.4px;
    color: rgb(94, 94, 12);
    text-shadow: 1px 5px 2px rgba(175, 160, 160, 0.5);
    margin-top: 75px;
    margin-bottom: 25px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 5px;
      font-size: 14px;
      letter-spacing: 1.4px;
      color: rgb(94, 94, 12);
      text-shadow: 1px 5px 2px rgba(175, 160, 160, 0.5);
      margin-top: 7px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
    }
  }

  h3 {
    letter-spacing: 1.4px;
    color: rgb(94, 94, 12);
    text-shadow: 1px 5px 2px rgba(175, 160, 160, 0.5);
    margin-top: 55px;
    margin-bottom: 15px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
  }

  p {
    font-size: 17px;
    line-height: 30px;
    font-weight: 400;
    text-align: justify;
    color: rgb(94, 94, 12);
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
    font-style: italic;
    max-width: 850px;
    margin: 10px auto;
    min-width: 500px;
  }

  img {
    width: 100%;
    height: 450px;
  }
}
</style>
