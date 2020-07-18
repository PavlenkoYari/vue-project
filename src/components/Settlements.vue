<template>
    <div class="settlements-wrapper">
        <Search :searchSettlements='searchSettlements' :clearSearchValue='clearSearchValue'/>
        <div class="title df">
            Населенные пункты
            <div class="ico">
                <img src="@/assets/image/arrow.svg" alt="arrow">
            </div>
        </div>
        <List :searchResult="filteredList" :setSettlement="setSettlement"/>
        <Modal :settlement="settlement" :closeModal="closeModal" v-if="settlement.length" />
    </div>
</template>

<script>
import Search from './parts/Settlements/Search.vue';
import List from './parts/Settlements/List.vue';
import Modal from './parts/Settlements/Modal.vue';

export default {
  name: 'Settlements',
  components: {
    Search,
    List,
    Modal,
  },
  data() {
    return {
      settlement: '',
      settlementsList: [],
      filteredList: [],
    };
  },
  created() {
    fetch('/data.json')
      .then((res) => res.json())
      .then((result) => {
        const sortData = result.data.sort();
        this.settlementsList = sortData;
        this.filteredList = sortData;
      });
  },
  methods: {
    searchSettlements(e) {
      const valueInSearch = e.currentTarget.value.trim();
      if (valueInSearch.length > 1) {
        this.filteredList = this.settlementsList.filter(
          (s) => s.toLowerCase()
            .startsWith(valueInSearch.toLowerCase()),
        );
      } else {
        this.filteredList = this.settlementsList;
      }
    },
    clearSearchValue(NODE) {
      NODE.value = '';
      this.filteredList = this.settlementsList;
    },
    setSettlement(settlement) {
      this.settlement = settlement;
    },
    closeModal(e) {
      if (e.target.classList.contains('modal-wrapper')) {
        this.settlement = '';
      }
    },
  },
};
</script>

<style scoped lang="scss">
    .settlements-wrapper {
        margin: 50px;
        padding: 30px;
        border: 1px solid #dadada;

        .title {
            align-content: center;
            padding: 15px 0;
            border-top: 1px solid #dadada;
            border-bottom: 1px solid #dadaad;
            font-weight: 600;

            .ico {
                margin-left: 10px;
                width: 15px;

                img {
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: 545px) {
        .settlements-wrapper{
            margin: 15px;
        }
    }
</style>
