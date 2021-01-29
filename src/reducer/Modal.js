import * as types from '../constant/actionType'
const initialState = {img:'',isOpenModal:false};

const Modal = (state = initialState, action)=>{
    switch (action.type) {
        case types.isOpenModal:
            var img = action.img;
            return {
                img,
                isOpenModal : true,
            }
            break;
        case types.onCloseModal:
            return {
                isOpenModal:false,
            }
            break;
    
        default:
            return state;
    }
}
export default Modal;