<template>
  <div>
    <h4 class="mb-3">Resources</h4>
    <div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model.number="resources.arabica"
          :rules="resourcesCommonRules"
          type="number"
          label="Arabica Coffee"
          min="0"
          required
        ></v-text-field>

        <v-text-field
          v-model.number="resources.robusta"
          :rules="resourcesCommonRules"
          type="number"
          label="Robusta Coffee"
          min="0"
          required
        ></v-text-field>

        <v-text-field
          v-model.number="resources.milk"
          :rules="resourcesCommonRules"
          type="number"
          label="Milk"
          min="0"
          required
        ></v-text-field>

        <v-text-field
          v-model.number="resources.sugar"
          :rules="resourcesSugarRules"
          type="number"
          label="Sugar"
          min="0"
          required
        ></v-text-field>

        <v-text-field
          v-model.number="resources.plasticGlass"
          :rules="resourcesCommonRules"
          type="number"
          label="Plastic Glass"
          min="0"
          required
        ></v-text-field>

        <v-text-field
          v-model.number="resources.paperGlass"
          :rules="resourcesCommonRules"
          type="number"
          label="Paper Glass"
          min="0"
          required
        ></v-text-field>

        <v-btn
          @click="validate"
          :disabled="!valid"
        >Save</v-btn>
      </v-form>

    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {resourcesCommonRulesUtils, resourcesSugarRulesUtils} from '@/utils/validations'

  export default {
    name: "RefillResources",
    data: () => ({
      valid: true,
      resourcesCommonRules: resourcesCommonRulesUtils,
      resourcesSugarRules: resourcesSugarRulesUtils,
      resources: {
        arabica: null,
        robusta: null,
        milk: null,
        sugar: null,
        plasticGlass: null,
        paperGlass: null,
      }
    }),
    computed: {
      ...mapGetters(['getPaid']),
      isGetPaid() {
        return this.getPaid <= 0
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
    }
  }
</script>

<style scoped>

</style>
