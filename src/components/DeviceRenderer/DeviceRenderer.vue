<template>
  <div
    class="device-renderer"
    :class="[
      '-manufacturer-' + model.manufacturer,
      '-align-' + deviceAlign,
      '-measure-' + showMeasure
    ]"
  >
    <div
      class="body"
      :style="deviceBodyStyle"
    >
      <div
        v-if="showMeasure"
        class="radius-measure -device-top-left"
        :class="{ '-on': focused === 'device-radius' }"
        :style="deviceBodyRadiusStyle"
      />
      <div
        v-if="showMeasure"
        class="radius-measure -device-top-right"
        :class="{ '-on': focused === 'device-radius' }"
        :style="deviceBodyRadiusStyle"
      />
      <div
        v-if="showMeasure"
        class="radius-measure -device-bottom-left"
        :class="{ '-on': focused === 'device-radius' }"
        :style="deviceBodyRadiusStyle"
      />
      <div
        v-if="showMeasure"
        class="radius-measure -device-bottom-right"
        :class="{ '-on': focused === 'device-radius' }"
        :style="deviceBodyRadiusStyle"
      />
      <pixel-measure
        v-if="showMeasure"
        class="-screen-horizontal"
        legend-align="left"
        legend-vertical-align="top"
        :style="{
          width: deviceScreenStyle.width,
        }"
      >
        {{ model.screen.coordinates.width }} pt<br>
        {{ model.screen.physicalPixels.width }} px<br>
        {{ model.screen.physicalWidth | toFixed(1) }} mm
      </pixel-measure>
      <pixel-measure
        v-if="showMeasure"
        class="-screen-vertical"
        :is-horizontal="false"
        legend-align="left"
        legend-vertical-align="top"
        :style="{
          height: deviceScreenStyle.height,
          'transform': 'translateY(' + model.screen.offsetY * scale + 'px)',
          'margin-left': (this.model.device.width * this.scale / -2) - 75 + 'px'
        }"
      >
        {{ model.screen.coordinates.height }} pt<br>
        {{ model.screen.physicalPixels.height }} px<br>
        {{ model.screen.physicalHeight | toFixed(1) }} mm
      </pixel-measure>
      <pixel-measure
        v-if="showMeasure"
        class="-device-horizontal"
        :class="{ '-on': focused === 'device-width'}"
        legend-align="right"
        legend-vertical-align="bottom"
        :style="{ width: deviceBodyStyle.width }"
      >
        {{ model.device.width | toFixed(1) }} mm
      </pixel-measure>
      <pixel-measure
        v-if="showMeasure"
        class="-device-vertical"
        :class="{ '-on': focused === 'device-height'}"
        :is-horizontal="false"
        legend-align="right"
        legend-vertical-align="bottom"
        :style="{
          height: deviceBodyStyle.height,
          'margin-left': (this.model.device.width * this.scale / 2) + 20 + 'px'
        }"
      >
        {{ model.device.height | toFixed(1) }} mm
      </pixel-measure>
      <pixel-measure
        v-if="showMeasure"
        class="diagonal-length"
        :class="{ '-on': focused === 'screen-diagonal'}"
        legend-align="center"
        legend-vertical-align="bottom"
        :style="deviceScreenDiagonalStyle"
      >
        {{ model.screen.diagonalInch | toFixed(1) }} Inch
      </pixel-measure>
      <div
        class="screen"
        :style="deviceScreenStyle"
      >
        <div
          v-if="showMeasure"
          class="radius-measure -screen-top-left"
          :class="{ '-on': focused === 'screen-radius' }"
          :style="deviceScreenRadiusStyle"
        />
        <div
          v-if="showMeasure"
          class="radius-measure -screen-top-right"
          :class="{ '-on': focused === 'screen-radius' }"
          :style="deviceScreenRadiusStyle"
        />
        <div
          v-if="showMeasure"
          class="radius-measure -screen-bottom-left"
          :class="{ '-on': focused === 'screen-radius' }"
          :style="deviceScreenRadiusStyle"
        />
        <div
          v-if="showMeasure"
          class="radius-measure -screen-bottom-right"
          :class="{ '-on': focused === 'screen-radius' }"
          :style="deviceScreenRadiusStyle"
        />
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
          </div>
          <!-- /.content-main -->
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
