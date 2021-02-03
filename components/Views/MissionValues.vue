<template>
  <div class="grid">
    <GridItem>
      <template slot="icon">
        <Round :from="0" :to="75" />
      </template>
      <template slot="title">Resist</template>
      <template slot="text">
        Movements collaborate but systems thinking commitment boots on the
        ground. A inclusive justice segmentation ideate impact investing. Scale
        and impact agile, social enterprise or youth B-corp.
      </template>
    </GridItem>

    <GridItem>
      <template slot="icon">
        <Round :from="0" :to="50" reverse />
      </template>
      <template slot="title">Big Data</template>
      <template slot="text">
        Strengthening infrastructure; collaborative cities efficient,
        entrepreneur natural resources expose the truth collaborative
        consumption. Humanitarian capacity building and, justice low-hanging
        fruit society bandwidth changemaker challenges and opportunities.
      </template>
    </GridItem>

    <GridItem>
      <template slot="icon">
        <Round :from="0" :to="50" full reverse />
      </template>
      <template slot="title">Game-changer</template>
      <template slot="text">
        Empower communities parse thought leadership, citizen-centered; mass
        incarceration impact black lives matter deep dive the resistance. Mass
        incarceration citizen-centered game-changer emerging; collaborate
        global. But, strategy game-changer move.
      </template>
    </GridItem>

    <GridItem>
      <template slot="icon">
        <Round :from="25" :to="75" full />
      </template>
      <template slot="title">Empower</template>
      <template slot="text">
        Social intrapreneurship parse natural resources social entrepreneur
        social capital social innovation agile. Thought provoking because;
        mobilize, design thinking catalyze.
      </template>
    </GridItem>
  </div>
</template>

<script>
import Round from '~/components/Helpers/Round'
import GridItem from '~/components/Grid/GridItem'

export default {
  name: 'MissionValues',
  components: { Round, GridItem },
}
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 90px;
}

@media only screen and (max-width: 656px) {
  .grid {
    flex-direction: column;
  }
}
</style>
