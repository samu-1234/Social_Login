import {  GET_DETAILS, GET_SOCIAL_DETAILS,ADD_SOCIAL_DETAILS, ADD_DETAILS} from "./constant"
import {   put, takeEvery,all, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
// import { addSocialLogin } from "./action";


function* getDetails() {
    let data = yield fetch('http://localhost:4000/SocialLogin');
    data = yield data.json();
    console.warn("social login saga action is called", data)
    yield put({ type: GET_DETAILS, data })
}

function* createDetails(action){
    const product = action.payload
    const data = yield  axios.post('http://localhost:4000/SocialLogin', product)
    yield console.warn("ADD details saga is called...",data)
    yield put({type:ADD_DETAILS ,data})
}
function* addProductSaga() {
    yield takeLatest(ADD_SOCIAL_DETAILS, createDetails)
  }

function* detailsaga() {
    yield takeLatest(GET_SOCIAL_DETAILS, getDetails)
}

  export default function* rootSaga() {
    yield all([
      detailsaga(),
      addProductSaga(),
    ])
  }



