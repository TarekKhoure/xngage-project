import { CATEGORY } from "./category";

export type BOOK = {
  id: number;
  image: string;
  title: string;
  author: string;
  reviewedBy: string;
  description: string;
};

export type BOOK_OBJ = {
  name: string;
  books: CATEGORY[];
};
