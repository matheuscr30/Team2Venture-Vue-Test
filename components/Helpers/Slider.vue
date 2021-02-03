<template>
  <!-- The slider changes the picture each 5 seconds -->

  <div class="slider">
    <div class="prev">
      <img :src="images[prev].src" :alt="images[prev].alt" />
      <div class="prev-action">
        <button type="button" class="prev-btn" @click="prevImage">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>
      </div>
    </div>

    <div class="actual">
      <transition name="fade" mode="out-in">
        <img
          :key="current"
          :src="images[current].src"
          :alt="images[current].alt"
        />
      </transition>
    </div>

    <div class="next">
      <img :src="images[next].src" :alt="images[next].alt" />
      <div class="next-action">
        <button type="button" class="next-btn" @click="nextImage">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: ['images'],
  data() {
    return {
      current: 0,
      interval: null,
    }
  },
  computed: {
    prev() {
      return this.current - 1 >= 0 ? this.current - 1 : this.images.length - 1
    },
    next() {
      return (this.current + 1) % this.images.length
    },
  },
  mounted() {
    this.updateInterval()
  },
  methods: {
    prevImage() {
      clearInterval(this.interval)
      this.current = this.prev
      this.updateInterval()
    },
    nextImage() {
      clearInterval(this.interval)
      this.current = this.next
      this.updateInterval()
    },
    updateInterval() {
      this.interval = setInterval(() => this.nextImage(), 5000)
    },
  },
}
</script>

<style scoped>
.slider {
  display: flex;
  justify-content: space-between;
}

.slider img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.prev,
.next {
  position: relative;
  width: 29%;
}

.prev img,
.next img {
  transition: 0.5s ease;
}

.prev:hover img,
.next:hover img {
  opacity: 0.7;
}

.prev:hover .prev-btn,
.next:hover .next-btn {
  background: rgba(0, 0, 0, 0.65);
}

.prev-action,
.next-action {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.prev-btn,
.next-btn {
  width: 45px;
  height: 45px;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  text-align: center;
  border: none;
  outline: none;
}

.prev-btn svg,
.next-btn svg {
  font-size: 20px;
}

.prev-btn:hover,
.next-btn:hover {
  cursor: pointer;
}

.actual {
  width: 40%;
}

@media only screen and (max-width: 764px) {
  .prev,
  .next {
    width: calc(100% - 84%);
  }

  .actual {
    width: calc(100% - 35%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.5;
}
</style>
