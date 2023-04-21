<script>
export default{
    props: ["buttons"],
}
</script>
<template>
    <div class="nav-buttons">
        <button :key="name" v-for="button in buttons" @click="buttons[button]">
            {{ button }}
        </button>
    </div>
</template>

<style scoped lang="sass">


</style>