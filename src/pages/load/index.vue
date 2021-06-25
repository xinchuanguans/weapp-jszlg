<template>
    <view class="load">
        <AtButton class="entry-btn" @click="goHome">点击进入</AtButton>
    </view>
    
</template>
<script>
import { AtButton } from 'taro-ui-vue'
import * as CITIES from '../../JSON/china_region_2020.json'
import { useStore } from 'vuex'
import Taro from '@tarojs/taro'

export default ({
    name:'loadPage',
    components: {
        AtButton
    
    },
    created () {
        const store = useStore()
        let cities=CITIES.default
        store.dispatch('setCities', cities)
    },

    methods: {
        goHome () {
            Taro.switchTab({
                url: '../home/index'
            })
        }
        
    }

})
</script>

<style>
.load{
    /* background-image: url(); */
    width: 100%;
    height: 100%;
}

.entry-btn{
    /* bottom: 200px; */
}
</style>