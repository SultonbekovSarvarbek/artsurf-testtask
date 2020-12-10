<template>
  <div class="mr-3">
    <b-btn variant="warning" v-b-modal="modalId(beerData.id)">Edit</b-btn>
    <b-modal
      hide-footer
      ref="update-modal"
      :id="'modal' + beerData.id"
      title="Update Beer"
    >
      <b-form @submit.prevent="save">
        <b-form-group>
          <b-input
            type="text"
            v-model="beerData.name"
            placeholder="Name"
          ></b-input>
        </b-form-group>

        <b-form-group>
          <b-form-textarea
            rows="8"
            v-model="beerData.description"
            placeholder="Description"
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="success">Save</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beerData: { ...this.beerObj },
      modifiedObj: {}
    };
  },
  watch: {
    beerData: {
      deep: true,
      handler(value) {
        this.modifiedObj = value;
      }
    }
  },
  methods: {
    modalId(i) {
      return "modal" + i;
    },
    save() {
      if (
        Object.keys(this.modifiedObj).length === 0 &&
        this.modifiedObj.constructor === Object
      ) {
        this.$refs["update-modal"].toggle("#toggle-btn");
      } else {
        this.$emit("edit-item", this.modifiedObj);
        this.$refs["update-modal"].toggle("#toggle-btn");
      }
    }
  },
  props: {
    beerObj: Object
  }
};
</script>
