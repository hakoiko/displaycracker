<template>
  <section class="section-device-search">
    <div class="search-string">
      <span class="icon -search" />
      <input
        type="search"
        class="input"
        v-model="condition.string.value"
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
                v-model="option.value"
                :ranged="option.ranged"
                :min="option.min"
                :max="option.max"
                :for="option.for"
                :step="option.step"
                :use-histogram="option.useHistogram"
                :histogram-data="option.histogramData"
                :histogram-step="option.histogramStep"
                :histogram-height="option.histogramHeight"
                @updated="updateCondition"
              />
              <div
                class="item-name"
                :class="option.class"
              >
                <span class="name">
                  {{ option.label }}
                </span>
                <span class="condition">
                  {{ condition.displaySize[option.id].value.from }}{{ option.unit }}<span> - </span>{{ condition.displaySize[option.id].value.to }}{{ option.unit }}
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
                v-model="condition.ppi.value"
                :ranged="true"
                :min="condition.ppi.min"
                :max="condition.ppi.max"
                :for="'ppi'"
                :step="0.1"
                :use-histogram="true"
                :histogram-data="condition.ppi.children"
                :histogram-step="50"
                :histogram-height="100"
                @updated="updateCondition"
              />
              <div
                class="item-name -ppi"
              >
                <span class="name">
                  PPI
                </span>
                <span class="condition">
                  {{ condition.ppi.value.from }}<span> - </span>{{ condition.ppi.value.to }}
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
                v-model="condition.density.value"
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
              />
              <div
                class="item-name -density"
              >
                <span class="name">
                  Density
                </span>
                <span class="condition">
                  {{ condition.density.value.from }}<span> - </span>{{ condition.density.value.to }}
                </span>
              </div>
            </li>
          </ul>
        </pop-over>
      </li>
      <!-- /.list-item.-density -->
      <li
        class="list-item -platform"
        :class="{ '-on': !condition.platform.pure}"
      >
        <pop-over position="bottom-right">
          <span
            slot="trigger"
            class="label"
          >
            Platform
          </span>
          <ul
            slot="body"
            class="option-body -platform"
          >
            <li
              class="list-item"
              v-for="(value, key) in condition.platform"
              v-show="key !== 'pure'"
              :class="'-' + key"
              :key="key"
            >
              <checkbox
                v-model="condition.platform[key]"
                @input="updateCondition($event, 'platform')"
              >
                {{ key }}
              </checkbox>
            </li>
          </ul>
        </pop-over>
      </li>
      <!-- /.list-item.-platform -->
      <li
        class="list-item -manufacturer"
        :class="{ '-on': !condition.manufacturer.pure}"
      >
        <pop-over position="bottom-right">
          <span
            slot="trigger"
            class="label"
          >
            Manufacturer
          </span>
          <ul
            slot="body"
            class="option-body -manufacturer"
          >
            <li
              class="list-item"
              v-for="(value, key) in condition.manufacturer"
              v-show="key !== 'pure'"
              :class="'-' + key"
              :key="key"
            >
              <checkbox
                v-model="condition.manufacturer[key]"
                @input="updateCondition($event, 'manufacturer')"
              >
                {{ key }}
              </checkbox>
            </li>
          </ul>
        </pop-over>
      </li>
      <!-- /.list-item.-platform -->
    </ul>
  </section>
</template>

<script src="./DeviceSearch.script.js"></script>
<style src="./DeviceSearch.scss" lang="scss"></style>
