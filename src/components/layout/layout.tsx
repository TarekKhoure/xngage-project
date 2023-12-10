import Card from "../card/card";
import Header from "../header/header";
import Footer from "../footer/footer";
import debounce from "lodash/debounce";
import { Grid, TextField } from "@mui/material";
import { fetchCategories } from "../../api/api";
import { CATEGORY } from "../../models/category";
import { useState, useEffect, PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  const [query, setQuery] = useState<string>("");
  const [categories, setCategories] = useState<CATEGORY[]>([]);
  const [searchShown, setSearchShown] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<CATEGORY[]>([]);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data.categories));
  }, []);

  const debouncedQueryChange = debounce((value: string) => {
    if (value.length > 0) {
      const items = categories.filter((category) =>
        category.title.includes(value)
      );
      setSearchResult(items);
    } else {
      setSearchResult([]);
    }
  }, 300);

  useEffect(() => {
    debouncedQueryChange(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (!searchShown) handleClear();
  }, [searchShown]);

  const handleClear = () => {
    setQuery("");
    setSearchResult([]);
  };

  return (
    <>
      <Header searchShown={searchShown} setSearchShown={setSearchShown} />
      <div className={`layout ${searchShown ? "layout-xl" : ""}`}>
        <div className="category-search-wrapper">
          {searchShown && (
            <div className="search-wrapper">
              <TextField
                autoFocus
                value={query}
                id="search-field"
                label="Search Categories"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setQuery(event.target.value)
                }
              />
              {query.length > 0 && (
                <i className="pi pi-times" onClick={handleClear} />
              )}
            </div>
          )}
          <Grid container spacing={6}>
            {searchResult?.map(
              (category: CATEGORY, index: number) =>
                index < 8 && (
                  <Grid item key={category.id}>
                    <Card data={category} showTitle />
                  </Grid>
                )
            )}
          </Grid>
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
