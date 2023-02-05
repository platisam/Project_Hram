<template>
  <div id="intro">
    <h1 class="title">Храм Светог Василија Острошког</h1>

    <p class="text">
      Црква Светог Василија Острошког налази се на Бежанијској коси, на
      територији општине Нови Београд. То је прва црква подигнута на територији
      Новог Београда после Другог светског рата. Градња је започела 1996.
      године, а црква је освећена 2001. године. Ослањањем на хришћанску
      традицију и на сјајна остварења старих српских неимара, архитекта Михајло
      Митровић се определио за облик прастаре хришћанске ротонде, коју прате
      нижи анекси и високи звоник на западу и тролисна олтарска апсида на
      истоку. Храм Светог Василија Острошког представља композиционо чврсту и
      ликовно хомогену целину, остварену модерним конструкционим поступком.
      Подигнута је прилозима поштовалаца Светог Василија Острошког Чудотворца.
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#intro {
  padding-top: 50px;
  padding-bottom: 50px;
  border-top: 2px solid rgb(215, 165, 0);
  border-bottom: 2px solid rgb(215, 165, 0);
  margin-bottom: 50px;

  .title {
    color: rgb(94, 94, 12);
    font-size: 28px;
    font-weight: 700px;
    line-height: 36px;
    letter-spacing: 6.4px;
    text-transform: uppercase;
    font-family: "Viaoda Libre", serif;
    max-width: 850px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;
    text-shadow: 1px 5px 2px rgba(175, 160, 160, 0.5);

    &::after {
      content: "";
      width: 55px;
      height: 1px;
      display: block;
      background-color: rgb(94, 94, 12);
      margin: 0 auto;
      margin-top: 35px;
      margin-bottom: 35px;
    }
  }

  .text {
    font-size: 17px;
    line-height: 30px;
    font-weight: 400;
    text-align: justify;
    color: rgb(94, 94, 12);
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
    font-style: italic;
    max-width: 850px;
    margin: 0 auto;
    min-width: 500px;
    margin-bottom: 30px;
  }
}
</style>
