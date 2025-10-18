export const Discount = (price: number, discountPercentage: number): number => {
  return Math.round(price - (price * discountPercentage) / 100);
}
