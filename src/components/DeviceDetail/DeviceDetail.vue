<template>
  <div class="section-device-detail">
    <div
      class="dimm"
      @click="quit"
    />
    <div class="device-detail-body">
      <div class="device-render">
        <device-renderer
          :model="model"
          :scale="3"
          device-align="top"
          :show-measure="true"
        />
        <screen-zoomed
          :model="model"
        />
      </div>
      <!-- /device-render -->
      <div class="device-detail">
        <div class="detail-base">
          <div class="manufacturer">
            {{ model.manufacturer }}
          </div>
          <div class="name">
            {{ model.name }}
          </div>
          <div class="os">
            <span
              class="icon"
              :class="'-' + model.os"
            />
          </div>
        </div>
        <!-- /.detail-base -->
        <div class="detail-spec">
          <ul class="spec-list">
            <li class="item -coordinates">
              <spec-item label="Points">
                {{ model.screen.coordinates.width }} x {{ model.screen.coordinates.height }}
              </spec-item>
            </li>
            <li class="item -pt-per-mm">
              <spec-item label="Points / mm">
                {{ model.screen.pointsPer1Mm | toFixed(2) }}
              </spec-item>
            </li>
            <li class="item -density">
              <spec-item label="Density">
                {{ model.screen.density }}x
              </spec-item>
            </li>
            <li class="item -physical-pixels">
              <spec-item label="Physical Pixels">
                {{ model.screen.physicalPixels.width }} x {{ model.screen.physicalPixels.height }}
              </spec-item>
            </li>
            <li class="item -px-per-mm">
              <spec-item label="Pixels / mm">
                {{ model.screen.pixelsPer1Mm | toFixed(2) }}
              </spec-item>
            </li>
            <li class="item -ppi">
              <spec-item label="PPI">
                {{ model.screen.pixelsPer1Inch | toFixed(2) }}
              </spec-item>
            </li>
            <li class="item -rendered-pixels">
              <spec-item label="Rendered Pixels">
                {{ model.screen.renderedPixels.width }} x {{ model.screen.renderedPixels.height }}
              </spec-item>
            </li>
            <li class="item -resampling-scale">
              <spec-item label="Resampling Scale">
                {{ model.screen.resamplingScale | toFixed(2) }}
              </spec-item>
            </li>
            <li class="item" />
            <li class="item -physical">
              <spec-item label="Milimeters">
                {{ model.screen.physicalWidth | toFixed(2) }} x {{ model.screen.physicalHeight | toFixed(2) }}
              </spec-item>
            </li>
          </ul>
          <ul class="spec-list">
            <li class="item -display-type">
              <spec-item label="Display Type">
                {{ model.screen.type }}
              </spec-item>
            </li>
            <li class="item -pentile">
              <spec-item label="Pentiled">
                {{ model.screen.pentiled | yesNo }}
              </spec-item>
            </li>
            <li class="item -subpixel">
              <spec-item label="Subpixel Pattern">
                {{ model.screen.pattern }}
              </spec-item>
            </li>
          </ul>
        </div>
        <!-- /.detail-spec -->
      </div>
      <!-- /.device-desc -->
    </div>
    <!-- /.device-detail-body -->
  </div>
  <!-- /.section-device-detail -->
</template>
<script src="./DeviceDetail.script.js"></script>
<style src="./DeviceDetail.scss" lang="scss"></style>
