import { useEffect, useState } from "react";
import { CATEGORY } from "../../../models/category";
import { fetchPopularCategories } from "../../../api/api";
import { Grid } from "@mui/material";

const PopularCatergories = () => {
  const [popularCategories, setPopularCategories] = useState<CATEGORY[]>([]);

  useEffect(() => {
    fetchPopularCategories().then((res) =>
      setPopularCategories(res.categories)
    );
  }, []);

  console.log(popularCategories);

  return (
    <>
      <div className="popular-categories-title">
        <b>Browse</b> Our Most Popular Categories
      </div>
      <Grid container className="popular-categories">
        {popularCategories?.map(
          (category: CATEGORY, index: number) =>
            index < 8 && (
              <Grid
                item
                key={category.id}
                xs={12}
                sm={6}
                md={3}
                className="item"
              >
                <img alt={category.title} src={category.image} />
                <div>
                  <label>{category.title}</label>
                  <p>{category.description}</p>
                </div>
              </Grid>
            )
        )}
      </Grid>
    </>
  );
};

export default PopularCatergories;
