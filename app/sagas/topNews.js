import { call, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import API from '../api';
import { setLoading } from '../redux/reducers/loading';
import { setNewsList } from '../redux/reducers/newsList';
import { getNormalizedData, getFetchUrl } from '../utils/adapter';

let allData = [];

function getNewsList(apiResource) {
  return fetch(getFetchUrl(apiResource))
    .then(response => response.json());
}

function* processUrl(apiResource) {
  const data = yield call(getNewsList, apiResource);
  const formattedData = getNormalizedData(apiResource, data);
  allData = allData.concat(formattedData);
}

export function* loadTopNews() {
  try {
    yield put(setLoading(true));
    allData = [];
    yield* API.resources.map(processUrl);
    yield put(setNewsList(allData));
    yield put(setLoading(false));
   } catch (e) {
    yield put(setLoading(false));
   }
}
