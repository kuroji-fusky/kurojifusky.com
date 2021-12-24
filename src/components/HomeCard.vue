<template>
  <div class="home-card-container">
    <div class="home-card-container__bg" style="background-image: url('./src/assets/img/skep-vars/SkepFormalBrand.png')"></div>
    <article class="home-card-container__info">
      <h2>Fakeu Love</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum in delectus, architecto, nemo at magni exercitationem consequuntur, est maxime similique!</p>
    </article>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.home-card-container {
  border-radius: 6px;
  padding: 1rem;
  background: linear-gradient(165deg, var(--sf-borahae-dark-500), var(--sf-blue-dark-400));
  box-shadow: 0 0 16px rgba(gray, 45%);
  width: 100%;

  &__bg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 16rem;
    border-radius: 6px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    margin: 12px 0;
  }
}
</style>