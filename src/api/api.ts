export const fetchCategories = () =>
  fetch("/data/categories.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });

export const fetchCategory = (name: string) =>
  fetch(`/data/categories/${name}.json`)
    .then((response) => response.json())
    .then((data) => ({ status: 200, books: data.books }))
    .catch((error) => {
      console.error("Error fetching categories:", error);
      return { status: 400, books: [] };
    });

export const fetchPopularCategories = () =>
  fetch("/data/categories/popular-categories.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });
