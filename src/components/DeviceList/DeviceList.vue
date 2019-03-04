<template>
  <section class="section-device-list">
    <device-search />
    <router-view />
    <ul class="device-list">
      <li
        class="list-item"
        v-for="device in deviceList"
        :key="device.name"
      >
        <a
          class="item-link"
          @click="routeToDeviceDetail(device)"
        >
          <device-card
            :model="device"
          />
        </a>
      </li>
    </ul>
  </section>
</template>

<script src="./DeviceList.script.js"></script>
<style src="./DeviceList.scss" lang="scss"></style>
