<template>
    <div class="list-wrapper df" v-if="searchResult.length">
        <div class="column" v-for="i in 4" v-bind:key="i">
            <div class="item"
                 v-for="j in countItemInColumn(i)"
                 v-on:click="setSettlement(searchResult[(j - 1)+(i - 1)*countItemInColumn(i)])"
                 v-bind:key="j">
                {{searchResult[(j - 1) + (i - 1) * countItemInColumn(i)]}}
            </div>
        </div>
    </div>
    <div class="list-wrapper" v-else>
        <div style="text-align: center">Nothing to show</div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        props: {
            searchResult: Array,
            setSettlement: Function,
        },
        methods: {
            countItemInColumn() {
                const countItemInColumn = Math.round(this.searchResult.length / 4);
                return countItemInColumn || 1;
            },
        },
    };
</script>

<style scoped lang="scss">
    .list-wrapper {
        margin-top: 10px;

        .column {
            flex: 25% 0 1;
            padding: 7px;
            border-left: 1px solid #dadada;

            &:nth-child(4n) {
                border-right: 1px solid #dadada;
            }

            .item {
                text-align: left;
                padding: 4px;
                cursor: pointer;

                &:hover {
                    background: #eeeeee;
                    color: #3ec4ee;
                }
            }
        }
    }

    @media (max-width: 910px) {
        .list-wrapper .column {
            flex: 50% 0 1;
            border-bottom: 1px solid #dadada;

            &:nth-child(2n) {
                border-right: 1px solid #dadada;
            }
        }
    }

    @media (max-width: 475px) {
        .list-wrapper .column {
            flex: 100% 0 1;
            border: 0 !important;
            padding: 0 7px;
        }
    }
</style>
