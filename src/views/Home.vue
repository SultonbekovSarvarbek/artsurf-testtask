<template>
  <div>
    <div class="my-3"><h1>Welcome</h1></div>
    <beer-list :beers="getBeers" @remove-item="removeItem" />
    <div class="text-left mb-4" v-if="getBeers.arrLength !== 0">
      <b-button variant="success" @click="showNext(count++)">
        <span v-if="loadingStatus">Loading...</span>
        <span v-else>Show next</span>
      </b-button>
    </div>
  </div>
</template>

<script>
import beerList from "@/components/beer-list";

export default {
  name: "Home",
  components: {
    beerList
  },
  data() {
    return {
      count: 2
    };
  },
  async created() {
    await this.$store.dispatch("getBeers", 1);
  },
  computed: {
    getBeers() {
      return this.$store.getters.getBeers;
    },
    loadingStatus() {
      return this.$store.getters.getLoadingStatus;
    }
  },
  methods: {
    showNext(count) {
      this.$store.dispatch("getBeers", count);
    },
    removeItem(val) {
      this.$store.dispatch("removeBeer", val);
    }
  }
};
</script>
