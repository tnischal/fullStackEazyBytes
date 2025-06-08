import React,{useState, useMemo} from 'react';
import ProductCard from './ProductCard';
import SearchBox from './SearchBox';
import Dropdown from './Dropdown';

const options =["Popularity","Price Low To High", "Price High to Low"]

export default function ProductListing({products}) {

    const [searchText,setSearchText]=useState("");
    const [selectedSort,setSelectedSort] = useState("Popularity");

    const filterBasedOnSearchAndSort = useMemo(() => {
        if (!Array.isArray(products) || products.length === 0) {
          return [];
        }
      
        let filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase()) ||
          product.description.toLowerCase().includes(searchText.toLowerCase())
        );
      
        return filtered.slice().sort((a, b) => {
          switch (selectedSort) {
            case "Price Low To High":
              return parseFloat(a.price) - parseFloat(b.price);
            case "Price High to Low":
              return parseFloat(b.price) - parseFloat(a.price);
            case "Popularity":
            default:
              return parseInt(b.popularity) - parseInt(a.popularity);
          }
        });
      }, [searchText, selectedSort, products]);


    function handleSearchText(inputSearch){
        setSearchText(inputSearch);
    }

    function handleSetSelectedSort(sortType){
        setSelectedSort(sortType);
    }


  return (
    <div className="product-listings-container">
        <div className='div-search-drop' >
            <SearchBox 
            label="Search" 
            placeholder="Search items..." 
            value={searchText} 
            handleSearch={(value)=>handleSearchText(value)}/>

            <Dropdown 
            label="Sort Items" 
            options={options} 
            selectedValue={selectedSort} 
            sortValue={(type)=> handleSetSelectedSort(type)}
            />
        </div>
      
        <div className='product-listings-grid'>
      
            {filterBasedOnSearchAndSort.length>0 ? 
            ( 
                
                filterBasedOnSearchAndSort.map((item)=>(<ProductCard key={item.productId} product = {item}/>))
            ) 
            :
            (
                <p className='product-listing-empty'>Products not Found!</p>
            ) }
        </div>
    </div>
  );
};
