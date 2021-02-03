<template>
  <!--
    The circle is mount by 4 divs representing the 4 parts (bottomLeft, bottomRight, topLeft, topRight)
    Those parts are shown based on the percentages from and to
    Ex: from = 50 && to == 100 => bottomRight, bottomLeft and topLeft will be shown
  -->

  <div class="circle" :class="{ reverse: reverse }">
    <div class="circle-top">
      <div
        class="circle-part"
        :class="{
          'circle-top-left': topLeft,
          'full-circle': topLeft && full,
        }"
      ></div>
      <div
        class="circle-part"
        :class="{
          'circle-top-right': topRight,
          'full-circle': topRight && full,
        }"
      ></div>
    </div>

    <div class="circle-bottom">
      <div
        class="circle-part"
        :class="{
          'circle-bottom-left': bottomLeft,
          'full-circle': bottomLeft && full,
        }"
      ></div>
      <div
        class="circle-part"
        :class="{
          'circle-bottom-right': bottomRight,
          'full-circle': bottomRight && full,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Round',
  props: {
    from: {
      type: Number,
      default: 0,
    },
    to: {
      type: Number,
      default: 100,
    },
    full: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    topLeft() {
      return this.from >= 0 && this.from <= 75 && this.to === 100
    },
    topRight() {
      return this.from === 0
    },
    bottomLeft() {
      return this.from >= 0 && this.from <= 50 && this.to >= 75
    },
    bottomRight() {
      return this.from >= 0 && this.from <= 25 && this.to >= 50
    },
  },
}
</script>

<style scoped>
.reverse {
  transform: scale(-1, 1);
}

.full-circle {
  background-color: #29394a;
}

.circle {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.circle-top,
.circle-bottom {
  display: flex;
  justify-content: center;
}

.circle-part {
  width: 18px;
  height: 18px;
  border-width: 9px;
  border-color: #29394a;
}

.circle-top-left {
  border-top-left-radius: 18px;
  border-top-style: solid;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: solid;
}

.circle-top-right {
  border-top-right-radius: 18px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: none;
  border-left-style: none;
}

.circle-bottom-left {
  border-bottom-left-radius: 18px;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: solid;
  border-left-style: solid;
}

.circle-bottom-right {
  border-bottom-right-radius: 18px;
  border-top-style: none;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: none;
}
</style>
