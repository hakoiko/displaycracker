<template>
  <span
    class="pop-over"
    :class="{'-on': on}"
  >
    <span
      class="trigger"
      @click="on = true"
    >
      <slot name="trigger" />
    </span>
    <div
      class="dimm"
      v-if="on"
      @click="on = false"
    />
    <div
      class="body"
      v-if="on"
      :style="style"
    >
      <slot name="body" />
    </div>
  </span>
</template>
<script src="./PopOver.script.js">
</script>
<style src="./PopOver.scss" lang="scss"></style>
