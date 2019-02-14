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
        <div
          class="notch"
          :style="deviceNotchStyle"
        />
        <div class="content" />
      </div>
      <!-- /.device-screen -->
    </div>
    <!-- /.device-body -->
  </div>
  <!-- /.device-renderer -->
</template>
<script src="./DeviceRender.script.js">
</script>
<style lang="scss">
.device-renderer {
  background: #C2D2F2;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  > .body {
    position: relative;
    > .screen {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      > .notch {
        position: absolute;
        margin: auto;
      }
    }
  }
 }
</style>
