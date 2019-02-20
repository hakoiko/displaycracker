<template>
  <section class="section-device-search">
    <div class="search-string">
      <span class="icon -search" />
      <input
        type="text"
        class="input"
        v-model="condition.string"
        @keyup="updateCondition('string')"
        placeholder="Search Device"
      >
    </div>
    <ul class="search-options">
      <li
        v-for="option in options"
        class="list-item"
        :class="option.class"
        :key="option.class"
      >
        <span class="label">
          {{ option.label }}
        </span>
        <div class="option-detail">
          OPTION DETAIL
        </div>
      </li>
    </ul>
  </section>
</template>

<script src="./DeviceSearch.script.js"></script>
<style src="./DeviceSearch.scss" lang="scss"></style>
