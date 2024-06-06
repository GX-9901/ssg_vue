export default {
    namespaced : true,
    state:{
        count :0,
    },
    getters : {
        oddOrEven(state){
            return state.count % 2 === 1 ? "奇数" : "偶数"
        }
    },
    actions :{
        increment({commit} , val){
            commit("INCREMENT",val)
        },
        decrement({commit} , val){
            commit("DECREMENT",val)
        },
        incrementIfOdd({commit,state} , val){
            if (state.count % 2 === 1){
                commit("INCREMENT",val)
            }
        },
        delayIncrement({commit} , val){
            setTimeout(() => {
                commit("INCREMENT",val)
            },1000)
        },
    },
    mutations:{
        INCREMENT(state,val){
            state.count += val;
        },
        DECREMENT(state,val){
            state.count -= val;
        },
    }
}