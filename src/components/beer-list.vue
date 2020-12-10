<template>
  <b-card-group deck class="custom-card-group">
    <div
      v-for="beer in beers.results"
      :key="beer.id"
      class="p-0 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4  card-group__item"
    >
      <b-card
        :title="beer.name"
        :img-src="beer.image_url"
        img-alt="Image"
        img-top
        tag="article"
        class="custom-card"
      >
        <h3>
          <b-badge variant="success">{{ beer.id }}</b-badge>
        </h3>
        <b-card-text class="pb-3 border-bottom">
          {{ beer.description }}
        </b-card-text>

        <small class=" text-muted">{{ beer.brewers_tips }}</small>
        <div class="d-flex mt-3 text-left action-btn">
          <update :beerObj="beer" @edit-item="parentEditItem" />
          <b-button variant="danger" @click="removeItem(beer.id)"
            >Delete</b-button
          >
        </div>
      </b-card>
    </div>
  </b-card-group>
</template>

<script>
import update from "@/components/update-item";
export default {
  name: "beer-list",
  components: {
    update
  },
  props: {
    beers: Object
  },
  methods: {
    modalId(i) {
      return "modal" + i;
    },
    removeItem(id) {
      this.$emit("remove-item", id);
    },
    parentEditItem(modifiedObj) {
      this.$store.dispatch("editBeer", modifiedObj);
    }
  }
};
</script>

<style lang="scss">
.custom-card {
  display: block;
  height: 100%;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(51, 51, 51, 0.084);
    transition: all 0.2s;
  }
  img {
    width: 20%;
    padding: 15px 0;
    height: auto;
    display: block;
    margin: 0 auto;
  }
}
.custom-desk .card-deck .card {
  flex: unset;
}
.card-group__item {
  margin-bottom: 30px;
}
</style>
