import * as types from '../constant/actionType'
const initialState = null;


const DetailActor = (state = initialState,action)=>{
    switch (action.type) {
        case types.getDataDetailActor:
            const dataActor = action.data;
            return {...dataActor};
            break;
    
        default:
            return state;
    }
}
export default DetailActor;