<template>
  <div class="container">
    <div class="sub-container">
      <div class="sub-container-left">
        <span class="yellow-color low-size">Checkout</span>
        <div class="wrapper-header">
          <div class="header-sub-container">
            <p class="header-poo-pay">
              <span>
                Poo<span class="yellow-color">Pay</span>
              </span>
            </p>
            <p class="header-poo-pay-subtitle">
              O que é
            </p>
          </div>
          <div class="footer-poo-pay-subtitle">
            <span>
              ?
            </span>
          </div>
        </div>
        <div class="presentation">
          <p>
            Somos uma plataforma que com uma única
            <br>
            integração permite o seu e-commerce ofertar vários
            <br>
            métodos de pagamentos.
          </p>
        </div>
        <div class="payments-methods">
          <div v-for="(payment, index) in payments" v-bind:key="index">
            <img :src="payment.icon" alt="" width="25px" style="margin-right: 10px">
            <span>{{payment.name}}</span>
          </div>
        </div>
      </div>
      <div class="sub-container-right">
        <img src="../assets/images/timeline_cellphone.svg" alt="Presentation"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payments: [
        {
          icon: 'https://imgur.com/5g1fTu9.png',
          name: 'Nupay',
        },
        {
          icon: 'https://imgur.com/wclbbwV.png',
          name: 'Buy Now Pay Later',
        },
        {
          icon: 'https://imgur.com/3MmAKjh.png',
          name: 'Iniciação de Pagamento',
        },
        {
          icon: 'https://imgur.com/wDxxMcw.png',
          name: 'Carnê Digital',
        },
        {
          icon: 'https://imgur.com/NU9PEhy.png',
          name: 'Pix',
        },
        {
          icon: 'https://imgur.com/M0KrLIq.png',
          name: 'Débito',
        },
        {
          icon: 'https://imgur.com/XIaErBN.png',
          name: 'Crédito',
        },
        {
          icon: 'https://imgur.com/6vWiOHb.png',
          name: 'Outros',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 38px;
  background-image: url('../assets/images/poopay_background_apresentation.png');
  background-repeat: repeat-y;
  background-size: 100%;
  border-radius: 15px 15px 0px 0px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.sub-container {
  width: 95%;
  background-color: #242722;
  color: white;
  border-radius: 8px;
  padding: 32px 70px;
  justify-content: space-between;
  display: flex;
  .sub-container-left{
    width: 49%;
    flex-direction: column;
    display: flex;
  }
  .sub-container-right{
    width: 49%;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
      width: 100%;
      margin-bottom: -70px;
    }
  }
}
.presentation{
  p {
    padding-top: 25px;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    letter-spacing: 2px;
    color: white;
  }
}
.payments-methods{
  max-height: 170px;
  margin-top: 50px;
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  div{
    padding: 8px;
    flex-wrap: wrap;
    display: flex;
    img {
      padding: 2px;
    }
    span {
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
}
.low-size {
  font-size: 16px;
  padding-bottom: 12px;
}
.yellow-color {
  color: #f9c700
}
.header-sub-container {
  line-height: 40px;
  font-size: 48px;
  font-weight: 500;
  flex-direction: column;
  display: flex;
  .header-poo-pay{
    padding: 0px;
  }
  .header-poo-pay-subtitle{
    padding-left: 40px;
  }
}
.wrapper-header{
  overflow: hidden;
  display: flex;
  .footer-poo-pay-subtitle {
    font-size: 70px;
    padding: 0px 10px;
    padding-bottom: 0px;
    font-weight: 500;
    justify-content: center;
    align-items: end;
    display: flex;
    span{
      margin-bottom: -8px;
      justify-content: end;
      align-items: end;
      display: flex;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .sub-container-right{
    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 767px){
  .container {
    padding: 30px;
  }
  .sub-container {
    padding: 20px;
    padding-bottom: 40px;
    justify-content: center;
    flex-direction: column;
    .sub-container-left {
      width: 100%;
    }
    .sub-container-right {
      margin-top: 20px;
      width: 100%;
      img{
        margin-bottom: -60px
      }
    }
  }
  .payments-methods{
    max-height: unset;
  }
  .presentation{
    p {
      padding-top: 25px;
      font-size: 16px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      letter-spacing: 2px;
      color: white;
    }
  }
}
</style>
