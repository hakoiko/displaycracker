<template>
  <div class="range-slider">
    <ul
      class="histogram-chart"
      v-if="useHistogram"
      :style="{
        height: histogramHeight + 'px'
      }"
    >
      <li
        class="bar"
        v-for="bar in histogram"
        :key="bar.value"
        :style="{
          height: bar.count / counted.max * 100 + '%'
        }"
      />
    </ul>
    <div class="track -track-1">
      <input
        class="handle"
        type="range"
        :step="step"
        :min="min"
        :max="max"
        v-model="localFrom"
        @input="inserted('from')"
        @change="updated"
      >
    </div>
    <div class="track -track-2">
      <input
        class="handle"
        v-if="ranged"
        type="range"
        :step="step"
        :min="min"
        :max="max"
        v-model="localTo"
        @input="inserted('to')"
        @change="updated"
      >
    </div>
  </div>
</template>
<script src="./RangeSlider.script.js"></script>
<style src="./RangeSlider.scss" lang="scss"></style>
