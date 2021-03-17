import { createStore } from 'redux'
import  reducer  from './reducer'
const storeState = createStore(reducer);
export default storeState;