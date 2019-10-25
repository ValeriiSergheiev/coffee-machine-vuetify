<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <RefillResources />
        </v-col>

        <v-col>
          <RefillMoney />
        </v-col>

        <v-col>
          <CoffeeMaker />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import RefillResources from '@/components/RefillResources.vue'
import RefillMoney from '@/components/RefillMoney.vue'
import CoffeeMaker from '@/components/CoffeeMaker.vue'

export default {
  name: 'home',
  components: {
    RefillResources,
    RefillMoney,
    CoffeeMaker
  }
}
</script>
