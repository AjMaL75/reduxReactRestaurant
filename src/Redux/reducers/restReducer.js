import { FAILURE, SUCCESS } from "../constants/restConstants";

//reducer function
                //    state to store the payload,working action
export const restReducer=(state={restList:[]},action)=>{
      switch(action.type){
            case SUCCESS:
                    return {
                        restList:action.payload
                    }
            case FAILURE:
                    return {
                        restList:action.payload
                    }
            default:
                return state
      }
}