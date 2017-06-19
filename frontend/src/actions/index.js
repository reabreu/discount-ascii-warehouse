import { SAVE_AD_ID, SEARCH_BY_PARAM } from './types';

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
