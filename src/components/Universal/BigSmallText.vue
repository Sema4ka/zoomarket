<!-- not in use -->
<script setup></script>

<template>
    <div class="text">
        <div class="header medium"><slot name="header"></slot></div>
        <div class="main-text"><slot name="text"></slot></div>
    </div>
</template>
<style scoped lang="sass">
@import '../../consts.sass'

.text
    display: flex
    flex-direction: column
.header
    font-size: 30px
    text-align: center

</style>