<template>
  <section class="device-">
    <ul class="device-list">
      <li
        class="list-item"
        v-for="device in filteredDeviceList"
        :key="device.name"
      >
        {{ device.name }}
      </li>
    </ul>
  </section>
</template>

<script src="./DeviceList.script.js"></script>
<style lang="scss"></style>
