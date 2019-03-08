<template>
  <section class="section-device-generator">
    <div class="device-editor">
      <ul class="editor-tab">
        <li class="tab-item -gui -on">
          GUI
        </li>
        <li class="tab-item -json">
          JSON
        </li>
      </ul>
      <!-- /.editor-tab -->
      <ul class="editor-gui">
        <li class="editor-item -name">
          <input-text
            v-model="generatedModel.name"
            label="Device Name"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -manufacturer">
          <input-text
            v-model="generatedModel.manufacturer"
            label="Manufacturer"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -os">
          <input-switch
            v-model="generatedModel.os"
            label="OS"
            :options="osOptions"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -viewport">
          <input-text
            v-model="generatedModel.screen.coordinates.width"
            label="Viewport Width"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -viewport">
          <input-text
            v-model="generatedModel.screen.coordinates.height"
            label="Viewport Height"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -rendered-pixels">
          <input-text
            v-model="generatedModel.screen.renderedPixels.width"
            label="Rendered Pixel Width"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -rendered-pixels">
          <input-text
            v-model="generatedModel.screen.renderedPixels.height"
            label="Rendered Pixel Height"
            @input="updateModel"
          />
        </li>
      </ul>
      <!-- /.editor-gui -->
    </div>
    <!-- /.device-deitor -->
    <div class="device-rendered">
      <device-renderer
        :model="generatedModel"
        :scale="3"
      />
    </div>
    <!-- /device-rendered -->
  </section>
</template>
<script src="./DeviceGenerator.script.js"></script>
<style src="./DeviceGenerator.scss" lang="scss"></style>
