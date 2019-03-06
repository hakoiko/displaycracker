<template>
  <div
    class="device-renderer"
    :class="[
      '-' + model.manufacturer,
      '-align-' + deviceAlign,
      '-measure-' + showMeasure
    ]"
  >
    <pixel-measure
      v-if="showMeasure"
      class="-device-horizontal"
      legend-align="left"
      legend-vertical-align="top"
      :style="{
        width: deviceBodyStyle.width,
      }"
    >
      {{ model.screen.coordinates.width }} pt<br>
      {{ model.screen.resolution.width }} px<br>
      {{ model.screen.physicalWidth | toFixed(1) }} mm
    </pixel-measure>
    <pixel-measure
      v-if="showMeasure"
      class="-device-vertical"
      :is-horizontal="false"
      legend-align="left"
      legend-vertical-align="top"
      :style="{
        height: deviceBodyStyle.height,
        'margin-left': (this.model.device.width * this.scale / -2) - 75 + 'px'
      }"
    >
      {{ model.screen.coordinates.height }} pt<br>
      {{ model.screen.resolution.height }} px<br>
      {{ model.screen.physicalHeight | toFixed(1) }} mm
    </pixel-measure>
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
<script src="./DeviceRenderer.script.js"></script>
<style src="./DeviceRenderer.scss" lang="scss"></style>
