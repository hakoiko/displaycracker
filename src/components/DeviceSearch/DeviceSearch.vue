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
            <li class="option -point-width">
              <range-slider
                :ranged="true"
                :min="condition.displaySize.pointWidth.min"
                :max="condition.displaySize.pointWidth.max"
                :use-histogram="true"
                :histogram-data="condition.displaySize.pointWidth.children"
                :histogram-step="10"
                :histogram-height="100"
              />
              <div class="label -point-width">
                Display Size
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
