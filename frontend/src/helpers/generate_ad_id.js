export default function (lastAdId) {
  let newAdId = lastAdId;

  do {
    newAdId = Math.floor(Math.random() * 1000);
  } while (newAdId === lastAdId);

  return newAdId;
}
