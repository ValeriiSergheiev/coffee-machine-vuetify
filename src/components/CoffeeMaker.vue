<template>
  <div>
    <div class="coffee-maker">
      <v-radio-group v-model="selectedCoffeeType" :column="false">
        <v-radio
          v-for="item in coffeeTypes"
          :key="item"
          :label="`${item} Coffee`"
          :value="item"
        ></v-radio>
      </v-radio-group>

      <v-checkbox
        v-model="milk"
        label="Milk"
      ></v-checkbox>

      <v-radio-group v-model="selectedGlassType" :column="false">
        <v-radio
          v-for="item in glassTypes"
          :key="item"
          :label="`${item} Glass`"
          :value="item"
        ></v-radio>
      </v-radio-group>

      <div class="d-flex justify-space-between">
        <v-btn
          color="primary"
          small
        >insert coin</v-btn>

        <v-btn
          color="success"
          small
        >make coffee</v-btn>
      </div>
      <div class="glass">
        <span>Coffee</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CoffeeMaker",
    data: () => ({
      coffeeTypes: ['Arabica', 'Robusta'],
      selectedCoffeeType: '',
      glassTypes: ['Plastic', 'Paper'],
      selectedGlassType: 'Plastic',
      milk: false
    })
  }
</script>

<style scoped lang="scss">
  .coffee-maker {
    position: relative;
    /*height: 300px;*/
    padding: 5px 10px 40px;
    background-color: #FFCCBC;
  }

  .glass {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -100px;
    left: calc(50% - 80px / 2);
    width: 80px;
    height: 120px;
    background-color: #A1887F;
    span {
      color: #fff;
    }
  }
</style>
