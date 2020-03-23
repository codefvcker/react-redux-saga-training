import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_POSTS, FETCH_POST } from "./constants";
import { showLoader, hideLoader, showAlert } from "./actionsCreator";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POST, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
}
