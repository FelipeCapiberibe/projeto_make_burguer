<template>
    <Banner />
    <div class="main-container">
      <div class="caixa">
        <img src="../assets/logobk.png" alt="logo burger">
      </div>
    <h1>Monte o seu burger:</h1>
    <BurgerForm />
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import BurgerForm from '../components/BurgerForm.vue'
export default {
  name: "Home",
  components: {
    Banner, 
    BurgerForm
  }
}

</script>
<style scoped>
  img {
    height: 50px;
    width: 50px;
    
  }
  .caixa {
    display: flex;
    justify-content: center; 
    padding: 15px;
    margin: 15px;
  }
</style>