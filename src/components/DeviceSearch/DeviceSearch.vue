<template>
  <section class="section-device-search">
    <div class="search-string">
      <span class="icon -search" />
      <input
        type="search"
        class="input"
        v-model="condition.string"
        @keyup="updateCondition(['string'])"
        placeholder="Search Device"
      >
    </div>
    <ul
      class="search-options"
      v-if="condition.displaySize"
    >
      <li
        class="list-item -display-size"
        :class="{ '-on': condition.displaySize.on}"
      >
        <pop-over position="bottom-right">
          <span
            slot="trigger"
            class="label"
          >
            Display Size
          </span>
          <ul
            slot="body"
            class="display-size-options"
          >
            <li
              class="list-item"
              :class="option.class"
              v-for="option in displaySizeOptions"
              :key="option.id"
            >
              <range-slider
                :ranged="option.ranged"
                :min="option.min"
                :max="option.max"
                :for="option.for"
                :step="option.step"
                :use-histogram="option.useHistogram"
                :histogram-data="option.histogramData"
                :histogram-step="option.histogramStep"
                :histogram-height="option.histogramHeight"
                @updated="updateCondition"
                @inserted="setCondition"
              />
              <div
                class="item-name"
                :class="option.class"
              >
                <span class="name">
                  {{ option.label }}
                </span>
                <span class="condition">
                  {{ condition.displaySize[option.id].from }}{{ option.unit }}<span> - </span>{{ condition.displaySize[option.id].to }}{{ option.unit }}
                </span>
              </div>
            </li>
          </ul>
        </pop-over>
        <!-- /option for display size -->
      </li>
    </ul>
  </section>
</template>

<script src="./DeviceSearch.script.js"></script>
<style src="./DeviceSearch.scss" lang="scss"></style>
