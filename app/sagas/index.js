import { takeEvery, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { LOAD_NEWS_LIST } from '../redux/reducers/newsList';

/* ------------- Sagas ------------- */

import { loadTopNews } from './topNews';

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeEvery(LOAD_NEWS_LIST, loadTopNews)
  ])
}