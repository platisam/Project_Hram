<template>
  <div>
    <h2 class="subtitle">ПОСТ</h2>

    <div id="services">
      <div class="service-box">
        <a
          href="https://sr.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8_%D0%BF%D0%BE%D1%81%D1%82"
          target="_blank"
          ><img
            src="../assets/Vaskrs_logo.jpg"
            alt="Васкршњи пост"
            title="Васкршњи пост"
        /></a>
        <h3>ВАСКРШЊИ ПОСТ</h3>
        <p>
          Назива се још и Велики пост (због посебне важности, али и дужине
          трајања), Часни пост (зато што обухвата време страдања Христовог и
          Његовог разапињања на Часни крст), Велика четрдесетница (зато што је
          укупно трајање поста четрдесет дана). Траје од Чистог понедељка до
          Лазареве суботе.
        </p>
      </div>
      <div class="service-box">
        <a
          href="https://svetigora.com/apostolski-petrovski-post/"
          target="_blank"
          ><img
            src="../assets/petrovski_post.jpg"
            alt="Петровски пост"
            title="Петровски пост"
        /></a>
        <h3>ПЕТРОВСКИ ПОСТ</h3>
        <p>
          Назива се још и Петровдански пост, Апостолски пост, Пост Светих
          Апостола. Други по реду вишедневни пост посвећен Св. Апостолима Петру
          и Павлу, односно, свим Апостолима. Почиње у понедељак после Недеље
          свих светих и траје до 28. јуна.
        </p>
      </div>
      <div class="service-box">
        <a
          href="https://svetigora.com/sjutra-pocinje-gospojinski-post/"
          target="_blank"
          ><img
            src="../assets/gospojina3.jpg"
            alt="Госпојински пост"
            title="Госпојински пост"
        /></a>
        <h3>ГОСПОЈИНСКИ ПОСТ</h3>
        <p>
          Назива се још и Великогоспојински пост. Траје од 1. до 14. августа, а
          по строгости долази одмах после Васкршњег поста. Увек почиње на Свете
          Макивије и траје 14 дана, завршавајући се закључно са Великом
          Госпојином. Црква је установила овај пост по примеру пресвете
          Богородице, која је време пре упокојења проводила у сталном посту и
          молитви.
        </p>
      </div>
      <div class="service-box">
        <img
          src="../assets/bogojavljenje.jpg"
          alt="Божићни пост"
          title="Божићни пост"
        />
        <h3>БОЖИЋНИ ПОСТ</h3>
        <p>
          Назива се још и Мала четрдесетница, јер Црквени устав Божић сматра за
          другу Пасху. Траје од 15. новембра до 24. децембра *(датуми су по
          "старом", Јулианском календару).Овај пост има сврху да вернике спреми
          за достојно слављење рођења Господа Исуса Христа - Божић.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.subtitle {
  color: rgb(94, 94, 12);
  font-size: 28px;
  font-weight: 700px;
  line-height: 36px;
  letter-spacing: 6.4px;
  text-transform: uppercase;
  font-family: "Viaoda Libre", cursive;
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
  margin-top: 70px;
  text-shadow: 1px 5px 2px rgba(175, 160, 160, 0.5);

  &::before {
    content: "";
    width: 55px;
    height: 1px;
    display: block;
    background-color: rgb(94, 94, 12);
    margin: 0 auto;
    margin-top: 45px;
    margin-bottom: 45px;
  }
}

#services {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;

  .service-box {
    padding: 10px;
    text-align: center;

    img {
      width: 180px;
      margin-bottom: 10px;
      transition: 0.3s all;
      border-radius: 5px;
      outline: 1px solid rgb(215, 165, 0);

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }

    h3 {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 1.4px;
      color: rgb(94, 94, 12);
      text-shadow: 1px 5px 2px rgba(175, 160, 160, 0.5);
      margin-top: 15px;
      margin-bottom: 25px;
      font-family: "Viaoda Libre", cursive;
    }

    p {
      line-height: 30px;
      font-style: italic;
      color: rgb(94, 94, 12);
      text-align: justify;
      padding: 10px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
    }

    &:first-child {
      border-right: 1px solid rgb(215, 165, 0);
      border-bottom: 1px solid rgb(215, 165, 0);
    }

    &:nth-child(3) {
      border-right: 1px solid rgb(215, 165, 0);

      img {
        margin-top: 15px;
      }
    }

    &:nth-child(2) {
      border-bottom: 1px solid rgb(215, 165, 0);

      img {
        width: 165px;
      }
    }

    &:nth-child(4) img {
      margin-top: 15px;
    }
  }
}
</style>
