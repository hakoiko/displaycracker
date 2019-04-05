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
        <hr class="break-line">
        <li class="editor-item -os">
          <input-switch
            v-model="generatedModel.os"
            label="OS"
            :options="osOptions"
            @input="updateModel"
          />
        </li>
        <hr class="break-line">
        <li class="editor-item -device">
          <input-text
            v-model="generatedModel.device.width"
            label="Device Width"
            unit="mm"
            @input="updateModel"
            @focus="focused = 'device-width'"
            @blur="focused = ''"
          />
        </li>
        <li class="editor-item -device">
          <input-text
            v-model="generatedModel.device.height"
            label="Device Height"
            unit="mm"
            @input="updateModel"
            @focus="focused = 'device-height'"
            @blur="focused = ''"
          />
        </li>
        <li class="editor-item -device-radius">
          <input-text
            v-model="generatedModel.device.radius"
            label="Device Corner Radius"
            unit="mm"
            @focus="focused = 'device-radius'"
            @blur="focused = ''"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -diagonal">
          <input-text
            v-model="generatedModel.screen.diagonal"
            label="Screen Size"
            unit="Inch"
            @input="updateModel"
            @focus="focused = 'screen-diagonal'"
            @blur="focused = ''"
          />
        </li>
        <li class="editor-item -screen-radius">
          <input-text
            v-model="generatedModel.screen.radius"
            label="Screen Cornor Radius"
            unit="mm"
            @input="updateModel"
            @focus="focused = 'screen-radius'"
            @blur="focused = ''"
          />
        </li>
        <hr class="break-line">
        <li class="editor-item -viewport">
          <input-text
            v-model="generatedModel.screen.coordinates.width"
            label="Viewport Width"
            unit="pt"
            @focus="focused = 'screen-width'"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -viewport">
          <input-text
            v-model="generatedModel.screen.coordinates.height"
            label="Viewport Height"
            unit="pt"
            @focus="focused = 'screen-height'"
            @input="updateModel"
          />
        </li>
        <hr class="break-line">
        <li class="editor-item -density">
          <input-text
            v-model="generatedModel.screen.density"
            label="Density"
            @focus="focused = 'screen'"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -rendered-pixels">
          <input-text
            v-model="generatedModel.screen.renderedPixels.width"
            label="Rendered Pixel Width"
            unit="px"
            disabled="disabled"
            @focus="focused = 'screen-width'"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -rendered-pixels">
          <input-text
            v-model="generatedModel.screen.renderedPixels.height"
            label="Rendered Pixel Height"
            unit="px"
            disabled="disabled"
            @focus="focused = 'screen-height'"
            @input="updateModel"
          />
        </li>
        <hr class="break-line">
        <li class="editor-item -resampling-scale">
          <input-text
            v-model="generatedModel.screen.resamplingScale"
            label="Resampling Scale"
            @focus="focused = 'screen'"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -physical-pixels">
          <input-text
            v-model="generatedModel.screen.physicalPixels.width"
            label="Physical Pixel Width"
            unit="px"
            disabled="disabled"
            @focus="focused = 'screen-width'"
            @input="updateModel"
          />
        </li>
        <li class="editor-item -physical-pixels">
          <input-text
            v-model="generatedModel.screen.physicalPixels.height"
            label="Physical Pixel Height"
            unit="px"
            disabled="disabled"
            @focus="focused = 'screen-height'"
            @input="updateModel"
          />
        </li>
      </ul>
      <!-- /.editor-gui -->
    </div>
    <!-- /.device-deitor -->
    <div class="device-rendered">
      <device-renderer
        ref="renderer"
        :model="generatedModel"
        :show-measure="true"
        :scale="3"
        :focused="focused"
      />
    </div>
    <!-- /device-rendered -->
  </section>
</template>
<script src="./DeviceGenerator.script.js"></script>
<style src="./DeviceGenerator.scss" lang="scss"></style>
