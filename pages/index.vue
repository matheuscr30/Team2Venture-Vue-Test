<template>
  <div class="container">
    <Header />

    <main>
      <span class="subtitle">Coffer maroon killick bilge list driver</span>
      <h1 class="title">
        Man-of-war Nelsons folly quarter bowsprit rutters pressgang haul wind
        quarterdeck walk the plank knave.
      </h1>

      <MissionValues />

      <div class="motivation">
        <span class="main">
          communities green space strengthening infrastructure dynamic families
          thought leader.
        </span>
        <span class="sub">150 CC</span>
      </div>

      <Slider class="images" :images="images" />
    </main>

    <Footer />
  </div>
</template>

<script>
import MissionValues from '~/components/Views/MissionValues'
import Slider from '~/components/Helpers/Slider'
import Header from '~/components/Views/Header'
import Footer from '~/components/Views/Footer'

export default {
  components: { MissionValues, Slider, Footer, Header },
  data() {
    return {
      images: [
        { src: require('~/assets/img/pic1.jpg'), alt: 'Pic 1' },
        { src: require('~/assets/img/pic2.jpg'), alt: 'Pic 2' },
        { src: require('~/assets/img/pic3.jpg'), alt: 'Pic 3' },
        { src: require('~/assets/img/pic4.jpg'), alt: 'Pic 4' },
        { src: require('~/assets/img/pic5.jpg'), alt: 'Pic 5' },
      ],
    }
  },
}
</script>

<style>
main {
  margin: 50px 70px 0 50px;
}

.title {
  font-size: 3.2rem;
  font-weight: 500;
  margin-top: 5px;
}

.subtitle {
  font-size: 0.87rem;
  font-weight: 500;
}

.motivation {
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
}

.motivation .main {
  width: 355px;
  font-size: 24px;
  font-weight: 500;
}

.motivation .sub {
  font-size: 12px;
}

.images {
  margin: 100px -70px 75px -50px;
}
</style>
