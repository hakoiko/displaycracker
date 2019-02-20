<template>
  <section class="section-device-list">
    <device-search />
    <ul class="device-list">
      <li
        class="list-item"
        v-for="device in deviceList"
        :key="device.name"
      >
        <device-card
          :model="device"
        />
      </li>
    </ul>
  </section>
</template>

<script src="./DeviceList.script.js"></script>
<style src="./DeviceList.scss" lang="scss"></style>
