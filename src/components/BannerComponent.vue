<template>
  <div class="container">
    <div class="nav">
      <div class="nav-left">
        <h1 class="white-color">Poo</h1>
        <h1>Pay</h1>
      </div>
      <div class="nav-right">
        <button>Desenvolvedores</button>
        <button>Demo</button>
      </div>
    </div>
    <div class="title-banner">
     <p>
      Aceite multiplos métodos
      <br>
      de pagamento com uma
      <br>
      <span class="white-color">
        Única integração
      </span>
     </p>
    </div>
    <div class="presentation-banner">
      <img src="../assets/images/poopay_presentation.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.container {
  max-height: 100vh;
  background-image: url('../assets/images/poopay_background.png');
  /* background-color: rgb(236, 203, 13); */
  background-size: cover;
  flex-direction: column;
  display: flex;
}
.white-color{
  color: white
}
.nav{
  justify-content: center;
  align-items: center;
  display: flex;
}
.nav-left{
  display: flex;
}
.nav-right {
  width: 50%;
  justify-content: end;
  display: flex;
  button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    min-width: 200px;
    font-weight: bold;
    margin: 1%;
    padding: 5px 20px;
    background-color: white;
    border-radius: 50px;
    border: 0px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3)
  }
}
.title-banner{
  font-family: 'Keep Calm', sans-serif;
  font-weight: 500;
  font-size: 4vw;
  width: 60vw;
  margin: 40px auto;
  margin-bottom: 0px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  p {
    margin: 0px;
    padding: 0px;
  }
}
.presentation-banner{
  margin: 0 auto;
  z-index: 1;
  img {
    max-width: 1500px;
    width: 70vw;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .container {
    background-color: cyan;
  }
  .title-banner{
    width: 90vw;
  }
}

@media screen and (max-width: 767px){
  .title-banner {
    width: 95vw;
    font-size: 24px;
  }
  .presentation-banner{
    img{
      width: 90vw;
    }
  }
  .nav {
    overflow: hidden;
    .nav-left {
      padding: 8px;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    .nav-right {
      width: auto;
      display: flex;
      button {
        justify-content: center;
        display: flex;
        text-align: center;
        min-width: 0px;
        width: auto;
        margin: 2%;
      }
    }
  }
}

</style>
