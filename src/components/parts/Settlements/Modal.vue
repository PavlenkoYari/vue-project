<template>
    <div class="modal-wrapper" v-on:click="closeModal">
        <div class="modal">{{settlement}}</div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    settlement: String,
    closeModal: Function,
  },
};
</script>

<style scoped lang="scss">
.modal-wrapper{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0, .5);
    display: flex;
    align-content: center;
    justify-content: center;
    .modal{
        padding: 40px;
        background: white;
        border-radius: 8px;
        margin: auto;
    }
}
</style>
