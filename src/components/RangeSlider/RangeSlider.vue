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
        ref="from"
        :step="step"
        :min="min"
        :max="max"
        :value="from"
        @input="inserted('from')"
        @change="updated('from')"
      >
    </div>
    <div class="track -track-2">
      <input
        class="handle"
        v-if="ranged"
        type="range"
        ref="to"
        :step="step"
        :min="min"
        :max="max"
        :value="to"
        @input="inserted('to')"
        @change="updated('to')"
      >
    </div>
  </div>
</template>
<script src="./RangeSlider.script.js"></script>
<style src="./RangeSlider.scss" lang="scss"></style>
