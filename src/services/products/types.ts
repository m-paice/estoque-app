export interface Product {
  id: string;
  accountId: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  colors: {
    name: string;
    value: string;
  }[];
  sizes: {
    name: string;
    value: string;
  }[];
}
