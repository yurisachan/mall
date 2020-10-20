export default {
    increment(state) {
        state.couter++
    },
    decrement(state) {
        state.couter--
    },
    addCount(state, num) {
        state.couter += num
    },
    //另一种提交方式的接受
    // addCount(state,payload){
    //     state.couter+=payload.count
    // },
    arrPush(state) {
        state.arr.push(9)
    },
    //Vue.set()
    //Vue.delete()
    countSubmit(state,newNum) {
        //console.log(newNum);
        
        state.couter = newNum
    },
    addItem(state,details){
			let has=false
			let dindex=null
			state.itemDetails.forEach((i,index)=>{
				if(i.id==details.id){
					has=true
					dindex=index
				}
			})
			if(has){
				//console.log(state.itemDetails[dindex]);
				
				state.itemDetails[dindex].num++
			}else{
				details.num=1
				state.itemDetails.push(details)
			}
        
    }
}