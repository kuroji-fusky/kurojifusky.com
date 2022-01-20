<template>
  <div id="avatar">
    <div id="avatar-inner">
      <div id="avatar-front">
        <img src="../assets/img/drawings-self/Nov4.png" alt="Avatar" draggable="false"/>
      </div>
      <div id="avatar-back">
        <img src="../assets/img/drawings-self/Aug2020.jpg" alt="Avatar" draggable="false"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$avatarSize: 280px;

#avatar {
  width: $avatarSize;
  height: $avatarSize;
  perspective: 700px;

  &:hover #avatar-inner {
    transform: rotateY(180deg);
  }

  &-front,
  &-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    img {
      width: $avatarSize;
      height: $avatarSize;
      border-radius: 50%;
    }
  }

  &-back {
    transform: rotateY(180deg);
  }

  animation: avatarFall 2s;
}

@keyframes avatarFall {
  0% {
    opacity: 0;
    transform: translateY(-300px) scale(0.75);
    filter:blur(10px)
  }
  44% {
    opacity: 1;
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}

#avatar-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 700ms cubic-bezier(.67,-0.43,0,1.07);
  transform-style: preserve-3d;
  animation: avatarTwist 2.1s;
}

@keyframes avatarTwist {
  0% {
    transform: rotateY(0deg);
  }
  16% {
    transform: rotateY(0deg);
  }
  54% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
</style>