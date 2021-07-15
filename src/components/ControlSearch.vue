<template>
    <div class="col-12">
        <div class="input-group">
            <input 
                v-bind:value="strSearch"
                v-on:input="handleSearch"
                type="text" class="form-control" placeholder="Search for..." />
            <span class="input-group-append">
                <button 
                    v-on:click="handleClear"
                    class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
    </div>
</template>

<script>
// v-model => v-bind -> v-on:input
import {mapState} from 'vuex'
export default {
    name: 'control-search',
    data() {
        return { }
    },
    methods: {
        
        handleClear() {
            // Thay đổi giá trị strSearch về ''
            this.$store.dispatch('handleSearch','');
        },
        handleSearch(e) {
            this.$store.dispatch('handleSearch',e.target.value);
            // console.log(e.target.value);
            // console.log('handleSearch Search.vue');
            // this.$emit('handleSearch', e.target.value);
        }
    },
    computed:{
        ...mapState([
            'strSearch'
        ])
    }
}
</script>

<style>

</style>
