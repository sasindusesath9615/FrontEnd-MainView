import React from "react";
import { useGlobalContext } from "../../context";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchProduct() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="d-flex d-grid gap-2 col-xl-6 col-lg-6 col-md-8 col-sm-10 mx-auto ">
          <i className="bi bi-search form-control-feedback"></i>
          <input
            className="form-control me-2  search-margin"
            style={{ margin: "10px " }}
            type="search"
            placeholder="Search by product/shop"
            name="name"
            ref={searchValue}
            onChange={searchProduct}
          />
          <button
            className="btn  btn-primary search-margin-btn"
            type="submit"
            // onSubmit={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}
