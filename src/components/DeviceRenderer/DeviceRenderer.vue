<template>
  <div
    class="device-renderer"
    :class="[
      '-' + model.manufacturer,
      '-align-' + deviceAlign
    ]"
  >
    <div
      class="body"
      :style="deviceBodyStyle"
    >
      <div
        class="screen"
        :style="deviceScreenStyle"
      >
        <div
          class="content"
          :style="deviceContentStyle"
        >
          <ul
            class="content-grid"
            v-if="showGrid"
          >
            <li
              class="grid-item"
              v-for="grid in contentGrid.items"
              :key="grid.id"
              :style="grid.style"
            />
          </ul>
          <div
            class="content-main"
            :style="contentStyle"
          >
            <p class="title">
              {{ paragraphTitle }}
            </p>
            <p class="body">
              {{ paragraph }}
            </p>
          </div> -->
          <!-- /.paragraph -->
        </div>
        <!-- /.content -->
        <div
          class="notch"
          :style="deviceNotchStyle"
        />
      </div>
      <!-- /.device-screen -->
    </div>
    <!-- /.device-body -->
  </div>
  <!-- /.device-renderer -->
</template>
<script src="./DeviceRender.script.js"></script>
<style src="./DeviceRenderer.scss" lang="scss"></style>
