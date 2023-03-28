import {configureStore} from '@reduxjs/toolkit'
import rootSaga from './saga';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store;