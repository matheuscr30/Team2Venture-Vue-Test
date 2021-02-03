<template>
  <div class="grid-item">
    <div>
      <slot name="icon"></slot>
    </div>
    <div class="content">
      <div class="grid-item-title">
        <slot name="title"></slot>
      </div>
      <div class="grid-item-text">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridItem',
}
</script>

<style scoped>
.grid-item {
  display: flex;
  flex: 0 50%;
  padding: 40px 45px 80px 45px;
  border-color: #29394a;
  border-width: 3.5px 3.5px 4px 3.5px;
  border-style: solid;
}

@media only screen and (min-width: 657px) {
  .grid-item:nth-child(2n + 1) {
    border-right-width: 4px;
  }

  .grid-item:nth-child(2n + 2) {
    border-left: none;
  }

  .grid-item:nth-child(n + 3) {
    border-top: none;
    border-bottom-width: 4px;
  }

  .grid-item:last-child,
  .grid-item:nth-last-child(2) {
    border-bottom-width: 3.5px;
  }
}

@media only screen and (max-width: 656px) {
  .grid-item {
    flex: 1 1 0px;
    padding: 40px 20px 80px 20px;
    border-width: 3.5px;
    border-bottom-style: none;
  }

  .grid-item:last-child {
    border-bottom-style: solid;
  }
}

.content {
  margin-left: 15px;
}

.grid-item-title {
  margin-top: 6px;
  font-weight: 500;
  font-size: 1.5rem;
}

.grid-item-text {
  margin-top: 27px;
}
</style>
