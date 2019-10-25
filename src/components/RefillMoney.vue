<template>
  <div>
    <h4 class="mb-3">Client</h4>
    <div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model.number="paid"
          :rules="resourcesCommonRules"
          @input="pay"
          type="number"
          min="0"
          label="Set Money"
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
  import { mapGetters, mapActions } from 'vuex'
  import {resourcesCommonRulesUtils} from '@/utils/validations'

  export default {
    name: "RefillMoney",
    data: () => ({
      valid: true,
      paid: null,
      resourcesCommonRules: resourcesCommonRulesUtils
    }),
    methods: {
      ...mapActions(['PAY']),
      pay() {
        this.PAY(+this.paid)
      },
      validate () {
        this.$refs.form.validate()
      },
    },
    computed: {
      ...mapGetters(['getPaid']),
      isGetPaid() {
        return this.getPaid <= 0
      }
    }
  }
</script>

<style scoped>

</style>
