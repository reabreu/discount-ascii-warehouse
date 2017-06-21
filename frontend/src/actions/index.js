import axios from 'axios';
import { SAVE_AD_ID, SEARCH_BY_PARAM, NEW_SEARCH, SET_FETCH_CATALOG, ADD_TO_SEARCH, CLEAR_CATALOG, SET_SORT_TERM, SET_RENDER_FULL } from './types';
import { API_ENDPOINT, CATALOG_PER_PAGE } from '../config';

export function saveAdId(adId) {
  return {
    type: SAVE_AD_ID,
    payload: adId,
  };
}

export function searchByParam(param) {
  return {
    type: SEARCH_BY_PARAM,
    payload: param,
  };
}

export function clearCatalog() {
  return {
    type: CLEAR_CATALOG,
  };
}

export function getCatalog(sort = false, skip = false) {
  let url = `${API_ENDPOINT}/posts?limit=${CATALOG_PER_PAGE}`;

  if (sort) url += `&sort=${sort}`;

  if (skip) url += `&skip=${skip}`;

  const request = axios.get(url);

  const action = { payload: request };

  action.type = skip ? ADD_TO_SEARCH : NEW_SEARCH;

  return action;
}

export function setFetchCatalog() {
  return {
    type: SET_FETCH_CATALOG,
    payload: true,
  };
}

export function setSortTerm(term) {
  return {
    type: SET_SORT_TERM,
    payload: term,
  };
}

export function setRenderFull(status) {
  return {
    type: SET_RENDER_FULL,
    payload: status,
  };
}
