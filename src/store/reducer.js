import {CHANGE_INPUT , ADD_ITEM , DELETE_ITEM} from './actionTypes'
    
const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultState,action)=>{  //就是一个方法函数
   if(action.type===CHANGE_INPUT){
       return {
           ...state,
           'inputValue':action.value,
       }
   }
   else if(action.type===ADD_ITEM){
       return {
           ...state,
           inputValue:'',
           list:[...state.list,state.inputValue],
       }
   }
   else if(action.type===DELETE_ITEM){
       return {
           ...state,
           list:[...state.list.slice(0.,action.index),
            ...state.list.slice(action.index+1)]
       }
   }
   return state;
}