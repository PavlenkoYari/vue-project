<template>
    <div class="search-wrapper">
        <div class="search-ico pointer">
            <img src="@/assets/image/search.svg" alt="search">
        </div>
        <input type="text" placeholder="Search" ref="search" v-on:keyup="searchSettlements">
        <div class="close-ico pointer" v-on:click="() => clearSearchValue(this.$refs.search)">
            <img src="@/assets/image/close.svg" alt="close">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    searchSettlements: Function,
    clearSearchValue: Function,
  },
};
</script>

<style scoped lang="scss">
    .search-wrapper{
        border: 1px solid #dadada;
        position: relative;
        padding: 5px 30px;
        width: 40%;
        border-radius: 5px;
        margin: auto;
        margin-bottom: 20px;
        input{
            background: 0;
            border: 0;
            width: 100%;
        }
        .search-ico, .close-ico{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            img{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
        .search-ico{
            width: 16px;
            height: 16px;
            left: 5px;
        }
        .close-ico{
            right: 5px;
            width: 12px;
            height: 12px;
        }
    }

    @media (max-width: 800px) {
        .search-wrapper{
            width: 70%;
        }
    }
    @media (max-width: 440px) {
        .search-wrapper{
            width: 100%;
        }
    }
</style>
