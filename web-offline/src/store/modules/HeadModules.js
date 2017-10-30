export default{
    state:{
        headIndex:2
    },
    mutations:{
        change(state,index){
            //alert(index);
            state.headIndex=index;
            //alert(state.headIndex);
        }
    },
    getters: {
        headIndex: state => state.headIndex
    }
}