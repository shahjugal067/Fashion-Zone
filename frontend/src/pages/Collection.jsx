import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext)
  const [ showFilter,setShowFilter ] = useState(false)
  const [ filterProduct, setFilterProduct ] = useState([])
  const [ category, setCategory ] = useState([])
  const [subCategory,setSubCategory] = useState([])
  const [sortType,setSortType ] = useState('relavent')

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev => [...prev,e.target.value])
    }
  }
  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev,e.target.value])
    }
    }
    const applyFilter = () =>{
      let productCopy = products.slice();

      if(showSearch && search){
        productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      }
      
      if(category.length > 0){
        productCopy = productCopy.filter(item => category.includes(item.category))
      }
      if(subCategory.length > 0){
        productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
      }
      setFilterProduct(productCopy)
    }
    const sortProduct = () =>{
      let filterProductCopy = filterProduct.slice();
      switch(sortType){
        case 'low-high':
          setFilterProduct(filterProductCopy.sort((a,b)=> (a.price - b.price)));
          break;
        case 'high-low':
          setFilterProduct(filterProductCopy.sort((a,b)=> (b.price - a.price)));
          break;
          default:
            applyFilter();
            break;
      }
    }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch,products]);
  
  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-20'>
      {/* filtering the products  */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)}
         className='my-2 text-lg flex items-center cursor-pointer gap-1 '>
          Filter
          <ChevronRight className={`w-5 h-5 text-blue-600 sm:hidden ${showFilter ? 'rotate-90' : ''}`} 
          />
          </p>
        {/* filter by category  */}
            <div className={`border border-green-400 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
              <p className='mb-3 text-sm text-emerald-800 '>
                Category
                
              </p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleCategory}
                    className='w-3 h-3' type="checkbox" value={'Men'} />
                        Men's 
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleCategory} className='w-3 h-3' type="checkbox" value={'Women'} />
                        Women's
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleCategory} className='w-3 h-3' type="checkbox" value={'Kids'} />
                    Kid's

                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleCategory}
                    className='w-3 h-3' type="checkbox" value={'Accessories'} />
                        Accessories
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleCategory} className='w-3 h-3' type="checkbox" value={'Jewelry'} />
                        Jewelry
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleCategory} className='w-3 h-3' type="checkbox" value={'Seasonal Wear'} />
                    Seasonal Wear

                  </p>
              </div>
            </div>
            {/* subcategory filter  */}
            <div className={`border border-green-400 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
              <p className='mb-3 text-sm text-emerald-800 '>
                Type
              </p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'Topwear'} />
                    Topwear
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'jeans'} />
                    Jeans
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'Shirt'} />
                    Shirts

                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'Formal Wear'} />
                    Formal Wear
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={' Casual Wear'} />
                    Casual Wear
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'Ethnic Wear'} />
                    Ethnic Wear

                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'Sportswear'} />
                    Sportswear

                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'Outerwear'} />
                    Outerwear
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'Footwear'} />
                    Footwear
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'Accessories'} />
                    Accessories 

                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'Boys'} />
                    Boy's
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'Girls'} />
                    Girl's
                  </p>
                  <p className='flex gap-2 items-center text-slate-800'>
                    <input onChange={toggleSubCategory} className='w-3 h-3' type="checkbox" value={'Seasonal Wear'} />
                    Seasonal Wear 

                   </p>
                  </div>
            </div>
      </div>  
      {/* right side part  */}
      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'> 
          <Title text1={'All'} text2={'Collections'} />

          {/* sorting the product by price low to high  */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 bg-red-300 text-sm px-2'>
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>
        {/* map the products  */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filterProduct.map((item,index)=>(
              <ProductItem key={index} className='border' name={item.name} id={item._id} image={item.image} price={item.price}/>
                
            ))}
        </div>

      </div>
    </div>
  )
}

export default Collection