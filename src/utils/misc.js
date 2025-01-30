export const noop = () => {};

export function formatMoney(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function getImageUrl(url) {
  return `./images/${ url }`;
}

export function getRenderSize(px) {
  return `calc(${px} * 0.09259259259259259vh)`;
}