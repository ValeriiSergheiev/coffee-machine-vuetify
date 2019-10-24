<template>
    <div>
        <h4>Resources</h4>
        <div>
            <v-text-field type="number" label="Arabica" dense></v-text-field>
            <v-text-field type="number" label="Robusta" dense></v-text-field>
            <v-text-field type="number" label="Milk" dense></v-text-field>
            <v-text-field type="number" label="Sugar" dense></v-text-field>
            <v-radio-group v-model="selectedglassTypes" :column="false">
                <v-radio
                    v-for="item in glassTypes"
                    :key="item"
                    :label="`${item} Glass`"
                    :value="item"
                ></v-radio>
            </v-radio-group>
            <v-text-field v-if="selectedglassTypes == 'Plastic'" type="number" label="Plastic Glass" dense></v-text-field>
            <v-text-field v-else type="number" label="Paper Glass" dense></v-text-field>
            <v-btn>Save</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RefillResources",
        data: () => ({
            glassTypes: ['Plastic', 'Paper'],
            selectedglassTypes: 'Plastic'
        })
    }
</script>

<style scoped>

</style>
