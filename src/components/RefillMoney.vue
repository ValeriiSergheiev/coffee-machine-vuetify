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
          v-model.number="setPaid"
          :rules="resourcesCommonRules"
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
  import { mapState, mapGetters, mapActions } from 'vuex'
  import {resourcesCommonRulesUtils} from '@/utils/validations'

  export default {
    name: "RefillMoney",
    data: () => ({
      valid: true,
      // setPaid: null,
      resourcesCommonRules: resourcesCommonRulesUtils
    }),
    mounted() {
      let retrievedObj = JSON.parse(localStorage.getItem('client'))
      this.setPaid = retrievedObj.money
      this.PAY(+this.setPaid)
    },
    methods: {
      ...mapActions('money', ['PAY']),
      validate () {
        this.$refs.form.validate()
        this.save()
      },
      save() {
        this.PAY(+this.setPaid)
      }
    },
    computed: {
      ...mapGetters('money', ['getPaid']),
      ...mapState('money', ['paid']),
      setPaid: {
        get() {
          return this.paid
        },
        set(val) {
          this.PAY(+val)
          // console.log(val)
        }
      },
      isGetPaid() {
        return this.getPaid <= 0
      }
    }
  }
</script>

<style scoped>

</style>
