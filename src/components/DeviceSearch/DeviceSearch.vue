<template>
  <section class="section-device-search">
    <div class="search-string">
      <span class="icon -search" />
      <input
        type="search"
        class="input"
        v-model="condition.string"
        @keyup="updateCondition(condition.string, 'string')"
        placeholder="Search Device"
      >
    </div>
    <ul
      class="search-options"
      v-if="condition.displaySize"
    >
      <li
        class="list-item -display-size"
        :class="{ '-on': !condition.displaySize.pure}"
      >
        <pop-over position="bottom-right">
          <span
            slot="trigger"
            class="label"
          >
            Display Size
          </span>
          <ul
            slot="body"
            class="option-body -display-size"
          >
            <li
              class="list-item"
              :class="option.class"
              v-for="option in displaySizeOptions"
              :key="option.id"
            >
              <range-slider
                :ranged="option.ranged"
                :min="option.min"
                :max="option.max"
                :for="option.for"
                :step="option.step"
                :from="option.from"
                :to="option.to"
                :use-histogram="option.useHistogram"
                :histogram-data="option.histogramData"
                :histogram-step="option.histogramStep"
                :histogram-height="option.histogramHeight"
                @updated="updateCondition"
                @inserted="setCondition"
              />
              <div
                class="item-name"
                :class="option.class"
              >
                <span class="name">
                  {{ option.label }}
                </span>
                <span class="condition">
                  {{ condition.displaySize[option.id].from }}{{ option.unit }}<span> - </span>{{ condition.displaySize[option.id].to }}{{ option.unit }}
                </span>
              </div>
            </li>
          </ul>
        </pop-over>
        <!-- /option for display size -->
      </li>
      <!-- /.list-item .-display-size -->
      <li
        class="list-item -ppi"
        :class="{ '-on': !condition.ppi.pure}"
      >
        <pop-over position="bottom-right">
          <span
            slot="trigger"
            class="label"
          >
            PPI
          </span>
          <ul
            slot="body"
            class="option-body -ppi"
          >
            <li class="list-item -ppi">
              <range-slider
                :ranged="true"
                :min="condition.ppi.min"
                :max="condition.ppi.max"
                :for="'ppi'"
                :step="0.1"
                :from="condition.ppi.from"
                :to="condition.ppi.to"
                :use-histogram="true"
                :histogram-data="condition.ppi.children"
                :histogram-step="50"
                :histogram-height="100"
                @updated="updateCondition"
                @inserted="setCondition"
              />
              <div
                class="item-name -ppi"
              >
                <span class="name">
                  PPI
                </span>
                <span class="condition">
                  {{ condition.ppi.from }}<span> - </span>{{ condition.ppi.to }}
                </span>
              </div>
            </li>
          </ul>
        </pop-over>
      </li>
      <!-- /.list-item.-ppi -->
      <li
        class="list-item -density"
        :class="{ '-on': !condition.density.pure}"
      >
        <pop-over position="bottom-right">
          <span
            slot="trigger"
            class="label"
          >
            Density
          </span>
          <ul
            slot="body"
            class="option-body -density"
          >
            <li class="list-item -density">
              <range-slider
                :ranged="true"
                :min="condition.density.min"
                :max="condition.density.max"
                :for="'density'"
                :step="0.1"
                :from="condition.density.from"
                :to="condition.density.to"
                :use-histogram="true"
                :histogram-data="condition.density.children"
                :histogram-step="1"
                :histogram-height="100"
                @updated="updateCondition"
                @inserted="setCondition"
              />
              <div
                class="item-name -density"
              >
                <span class="name">
                  Density
                </span>
                <span class="condition">
                  {{ condition.density.from }}<span> - </span>{{ condition.density.to }}
                </span>
              </div>
            </li>
          </ul>
        </pop-over>
      </li>
      <!-- /.list-item.-ppi -->
    </ul>
  </section>
</template>

<script src="./DeviceSearch.script.js"></script>
<style src="./DeviceSearch.scss" lang="scss"></style>
