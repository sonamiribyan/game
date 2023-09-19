import { createStore } from 'redux';
import rootReducer from './rootreducer'; // You need to create this file

const store = createStore(rootReducer);

export default store;
