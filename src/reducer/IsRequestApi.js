import * as types from '../constant/actionType';


const initialState = false;


const IsRequestApi = (state=initialState,action)=>{
    switch(action.type){
        case types.isLoadingRequest:
            {
               return true;
            }
        case types.isFinishRequest:
            {
                return false;
            }
         default:
             return state;   
    }
}
export default IsRequestApi;