<template>
  <div>
    <div>B-part</div>
    <slot name="header" />
    <div>我来组成手臂 <slot /></div>
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: "BComp",
};
</script>

<style></style>
