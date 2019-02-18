<template>
  <div class="device-renderer">
    <div
      class="body"
      :style="deviceBodyStyle"
    >
      <div
        class="screen"
        :style="deviceScreenStyle"
      >
        <div class="content">
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
            class="paragraph"
            :style="paragraphStyle.paragraph"
          >
            <p class="title">
              {{ paragraphTitle }}
            </p>
            <p class="content">
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
