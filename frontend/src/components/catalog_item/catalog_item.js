import React from 'react';
import Moment from 'moment';
import CatalogItemStyle from './catalog_item_style';

function dateToString(date) {
  const now = Moment();
  const aWeekOld = now.clone().subtract(7, 'days').startOf('day');
  const dateM = Moment(date, 'ddd MMM DD YYYY HH:mm:ss Z');

  return dateM.isAfter(aWeekOld) ? dateM.fromNow() : dateM.format('MMM Do YY');
}

function moneyToString(money) {
  const value = parseInt(money, 10) / 100;
  return `$${value.toFixed(2)}`;
}

export default function ({ item }) {
  return (
    <CatalogItemStyle className="catalog-item" fontSize={item.size}>
      <div>
        <p className="font">{item.face}</p>
        <p className="price">{moneyToString(item.price)}</p>
        <p className="date">{dateToString(item.date)}</p>
      </div>
    </CatalogItemStyle>
  );
}
