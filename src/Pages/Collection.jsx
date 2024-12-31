import React, { useContext, useState, useEffect, useMemo } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from '../Components/ProductItem';
import "../Styles/Collection.css";

function Collection() {
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); 
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedProductTypes.length > 0) {
      filtered = filtered.filter(product =>
        selectedProductTypes.includes(product.subCategory)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [products, selectedCategories, selectedProductTypes, searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedProductTypes, searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handleProductTypeChange = (e) => {
    const { value, checked } = e.target;
    setSelectedProductTypes((prev) => {
      const updated = checked
        ? [...prev, value]
        : prev.filter((subCategory) => subCategory !== value);
      return updated;
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="collection-container">
      <div className="filters-section">
        <div className="filters">
          <div className="filter-category">
            <p>Category</p>
            <div>
              <p>
                <input
                  type="checkbox"
                  value="Men"
                  onChange={handleCategoryChange}
                /> Men
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Women"
                  onChange={handleCategoryChange}
                /> Women
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Kids"
                  onChange={handleCategoryChange}
                /> Kids
              </p>
            </div>
          </div>

          <div className="filter-type">
            <p>Product Type</p>
            <div>
              <p>
                <input
                  type="checkbox"
                  value="Topwear"
                  onChange={handleProductTypeChange}
                /> Topwear
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Bottomwear"
                  onChange={handleProductTypeChange}
                /> Bottomwear
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Winterwear"
                  onChange={handleProductTypeChange}
                /> Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="product-list">
        {currentProducts.length > 0 ? (
          currentProducts.map((item) => (
            <ProductItem
              key={item._id}
              image={item.image}
              name={item.name}
              id={item._id}
              price={item.price}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={currentPage === pageNumber + 1 ? 'active' : ''}
          >
            {pageNumber + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Collection;
