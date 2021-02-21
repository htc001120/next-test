import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from './api';

function* searchItems(action) {
   try {
      const response = yield call(Api.searchItems, action.payload.keyword);
      yield put({ type: "SEARCH_ITEMS_SUCCESS", payload: { ...response, keyword: action.payload.keyword } });
   } catch (e) {
      console.error(e.message);
      yield put({ type: "SEARCH_ITEMS_FAILED", message: e.message });
   }
}

function* mySaga() {
  yield takeLatest("SEARCH_ITEMS_REQUESTED", searchItems);
}

export default mySaga;
