import { SAVE_AD_ID, SEARCH_BY_PARAM, NEW_SEARCH } from './types';
import axios from 'axios';

const API_ENDPOINT = '/api';

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

export function getCatalog(param = false) {
  let url = `${API_ENDPOINT}/posts`;

  if (param) url += `?sort=${param}`;

  const request = axios.get(url);
  
  return {
    type: NEW_SEARCH,
    payload: request,
  };
}
