<template>
  <div>
    <div class="coffee-maker">
      <v-radio-group v-model="selectedCoffeeType" :column="false" :disabled="!coinInserted">
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
        :disabled="!coinInserted"
      ></v-checkbox>

      <v-text-field
        v-model.number="sugar"
        type="number"
        label="Sugar"
        min="0"
        max="4"
        :disabled="!coinInserted"
      ></v-text-field>

      <v-radio-group v-model="selectedGlassType" :column="false" :disabled="!coinInserted">
        <v-radio
          v-for="item in glassTypes"
          :key="item"
          :label="`${item} Glass`"
          :value="item"
        ></v-radio>
      </v-radio-group>

      <div class="d-flex justify-space-between">
        <v-btn
          @click="insertCoin"
          color="primary"
          small
        >insert coin</v-btn>

        <v-btn
          color="success"
          small
          :disabled="!coinInserted"
        >make coffee</v-btn>
      </div>

      <div class="glass">
        <span>Coffee</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: "CoffeeMaker",
    data: () => ({
      coffeeTypes: ['Arabica', 'Robusta'],
      selectedCoffeeType: '',
      glassTypes: ['Plastic', 'Paper'],
      selectedGlassType: 'Plastic',
      milk: false,
      sugar: 0,
      coinInserted: false
    }),
    computed: {
      ...mapState('money', ['paid'])
    },
    methods: {
      ...mapActions('money', ['COIN_COUNT']),
      insertCoin() {
        if (this.paid > 0) {
          this.coinInserted = true
          this.COIN_COUNT(this.paid)
        }
      }
    }
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
