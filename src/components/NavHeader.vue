<template>
  <cover-view class="header">
    <picker class="header-picker" mode="selector" :range="selector" range-key="name" :value="selector[index].name" @change="onChangeCity">
      <view> &nbsp;{{selector[index].name}}</view>
    </picker>
	<view class="header-tag">
		<AtTag class="header-tag-item" :active=" selectedTag == 0 ? true : false " @click="selecteTag(0)">全部</AtTag>
		<AtTag class="header-tag-item" :active=" selectedTag == 1 ? true : false " @click="selecteTag(1)">党史</AtTag>
		<AtTag class="header-tag-item" :active=" selectedTag == 2 ? true : false " @click="selecteTag(2)">军史</AtTag>
		<AtTag class="header-tag-item" :active=" selectedTag == 3 ? true : false " @click="selecteTag(3)">社会主义发展史</AtTag>
		<AtTag class="header-tag-item" :active=" selectedTag == 4 ? true : false " @click="selecteTag(4)">改革开放史</AtTag>
		<AtTag class="header-tag-item" :active=" selectedTag == 5 ? true : false " @click="selecteTag(5)">新中国史</AtTag>
	</view>
  </cover-view>
</template>
<script>
import { useStore } from "vuex"
import { AtTag } from 'taro-ui-vue'
export default {
  	data() {
    	return {
      	selector: [],
      	index: 0,
      	selectedTag: 0,
      	dateSel: "2018-04-22",
    	}
  	},
	components: {
        AtTag
    
    },
  	created() {
		const store = useStore()
    	let cities =  store.getters.getCities
		for(let i in cities){
			this.selector.push(cities[i])
		}
  	},
  	methods: {
    	onChangeCity(e) {
      		this.index = e.detail.value
    	},

		selecteTag(id){
			this.selectedTag=id
		}
  	},
};
</script>
<style>
.header{
	width: 100%;
	height: 250px;
}
.header-picker{
	width: 200px;
	height: 50px;
	border: 1px solid #aaaaaa;
	margin: 10px 5px;
	text-align: left;
	line-height: 45px;
}
.header-tag{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.header-tag-item{
	margin: 10px;
}
</style>