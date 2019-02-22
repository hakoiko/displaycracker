<template>
  <section class="device-card">
    <div class="device-rendered">
      <device-renderer
        :model="model"
      />
    </div>
    <div class="device-detail">
      <div class="detail-base">
        <span class="name">
          {{ model.name }}
        </span>
        <span class="manufacturer">
          {{ model.manufacturer }}
        </span>
        <span class="os">
          <span
            class="icon"
            :class="'-' + model.os"
          />
        </span>
      </div>
      <!-- /.detail-base -->
      <div class="detail-spec">
        <ul class="spec-list">
          <li class="item -coordinates">
            {{ model.screen.coordinates.width }} x {{ model.screen.coordinates.height }}
            <span class="unit">
              Pt
            </span>
          </li>
          <li class="item -resolution">
            {{ model.screen.resolution.width }} x {{ model.screen.resolution.height }}
            <span class="unit">
              Px
            </span>
          </li>
          <li class="item -density">
            {{ model.screen.density }}
            <span class="unit">
              x
            </span>
          </li>
        </ul>
      </div>
      <!-- /.detail-spec -->
    </div>
    <!-- /desc -->
  </section>
</template>
<script src="./DeviceCard.script.js"></script>
<style src="./DeviceCard.scss" lang="scss"></style>
