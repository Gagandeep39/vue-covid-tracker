<template>
  <select
    @change="onChange"
    v-model="selected"
    class="form-select my-10 block w-full border p-3 rounded"
  >
    <option value="0">Select Country</option>
    <option v-for="country in countries" :key="country.ID" :value="country.ID">
      {{ country.Country }}
    </option>
  </select>
</template>

<script>
export default {
  props: ['countries'],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    onChange() {
      const country = this.countries.find(
        (country) => country.ID === this.selected
      );
      this.$emit('get-country', country);
      console.log(country);
    },
  },
};
</script>

<style></style>
