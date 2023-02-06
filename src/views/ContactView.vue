<template>
  <div id="contact_page">
    <form>
      <h1>Контактирајте нас</h1>
      <div>
        <label for="ime_prezime">Име и презиме:</label>
        <input id="ime_prezime" type="text" name="ime_prezime" />
      </div>
      <div>
        <label for="email">Контакт е-пошта:</label>
        <input id="email" type="email" name="email" />
      </div>
      <div>
        <label for="tel">Контакт телефон:</label>
        <input id="tel" type="tel" name="tel" />
      </div>
      <div>
        <label for="poruka">Назив поруке:</label>
        <input id="poruka" type="text" name="poruka" />
      </div>
      <div>
        <label for="message">Ваша порука:</label>
        <textarea
          name="your-message"
          id="message"
          cols="50"
          rows="14"
        ></textarea>
      </div>
      <div class="btn">
        <button type="submit">Пошаљите</button>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#contact_page {
  form {
    max-width: 600px;
    margin: 0 auto;

    h1 {
      text-align: center;
      margin-bottom: 15px;
      font-weight: 400;
      color: rgb(94, 94, 12);
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
      letter-spacing: 2px;
    }

    div {
      padding: 15px 0;

      label {
        display: block;
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 3px;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
        color: rgb(94, 94, 12);
      }

      input {
        height: 50px;
        width: 100%;
        font-size: 18px;
        padding: 0 10px;
        border: 1px solid rgb(215, 165, 0);
      }

      textarea {
        border: 1px solid rgb(215, 165, 0);
        width: 100%;
      }
    }

    .btn {
      text-align: center;
      margin-top: 15px;
      margin-bottom: 50px;

      button {
        padding: 10px 30px;
        font-size: 18px;
        font-weight: 700;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
        color: rgb(94, 94, 12);
        border: 2px solid rgb(215, 165, 0);
        background-color: rgba(215, 165, 0, 0.1);
        border-radius: 5px;

        &:hover {
          background-color: #fff;
          color: rgb(94, 94, 12);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
