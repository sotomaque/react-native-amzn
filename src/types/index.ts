export type ProductType = {
  id: string;
  title: string;
  image: string;
  avgRating: number;
  ratings: number;
  price: number;
  prevPrice?: number;
};

export type CartItemType = {
  id: string;
  quantity: number;
  item: ProductType;
};
