//src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        currentindex: '',
        addgoods: [],
        totalprice: 0,
        checkedall: false,
        toastmess: ''
    },
    mutations: {
        Currentindex(state, payload) {
            state.currentindex = payload
        },
        add(state, payload) {
            // if (!state.addgoods.every(item => { return item.iid != payload.iid })) { //不是根据整个payload来判断。因为之后会修改，所以当离开详情页，再重新进去的时候，要判断商品的唯一iid属性

            // }
            if (state.addgoods.every(item => { return item.iid != payload.iid })) {
                Vue.set(payload, 'count', 1)
                Vue.set(payload, 'ischecked', false)
                state.addgoods.push(payload)
                state.toastmess = '成功添加商品'
            } else {
                //   console.log(payload);
                // console.log(state.addgoods[state.addgoods.findIndex((item => item.iid == payload.iid))]);
                state.addgoods[state.addgoods.findIndex((item => item.iid == payload.iid))].count += 1
                state.toastmess = '商品数量加1'
            }
        },
        //设置单个商品选中与否事件
        reactchecked(state, payload) {
            //商品选中状态修改
            state.addgoods[state.addgoods.indexOf(payload)].ischecked = !state.addgoods[state.addgoods.indexOf(payload)].ischecked
                //全选计算
            let isall = state.addgoods.every(item => {
                return item.ischecked == true
            })
            if (isall == true) {
                state.checkedall = true
            }
            if (isall == false) {
                state.checkedall = false
            }
            //总价格计算
            state.totalprice = state.addgoods.reduce((pre, cur) => {
                //    console.log(cur);
                return cur.ischecked == true ? pre + (Number(cur.price.slice(1))).toFixed(2) * cur.count : pre + Number(0)
            }, 0)
        },
        //全选
        checkedallclick(state) {
            state.checkedall = !state.checkedall
            if (state.checkedall == true) {
                state.addgoods.forEach(item => {
                    item.ischecked = true
                })
            }
            if (state.checkedall == false) {
                state.addgoods.forEach(item => {
                    item.ischecked = false
                })
            }
            //总价格计算
            state.totalprice = state.addgoods.reduce((pre, cur) => {
                //   console.log(cur);
                return cur.ischecked == true ? pre + (Number(cur.price.slice(1))).toFixed(2) * cur.count : pre + Number(0)
            }, 0)
        }
    }
})
export default store