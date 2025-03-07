
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "./ReactRedux/CardSlice/Cardslice";
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const searchTerm = useSelector((state) => state.Search.searchTerm);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw Error('Failed to fetch data');
                }
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const filtered = products.filter(product => 
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm, products]);

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
        const alert = document.querySelector('.alert');
        alert.classList.add('show');
        setTimeout(() => {
            alert.classList.remove('show');
        }, 1000);
    };

    const filterProductsByCategory = (category) => {
        if (category === 'all') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category.toLowerCase().includes(category));
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="w-full h-auto bg-slate-700">
            <section className="text-gray-600 body-font max-w-[1280px] h-auto mx-auto">
                <h1 className='text-center text-4xl text-white pt-4 font-serif font-bold'>Trending Now</h1>
                <p className='text-center pt-4 text-white'>
                    Discover the Latest Trends in Fashion with us.
                </p>

                {/* Categories Buttons */}
                <div className="flex justify-center space-x-4 mb-8 mt-4 md:mt-10">
                    <button className="text-white bg-blue-500 px-4 py-2 rounded-lg" onClick={() => filterProductsByCategory('men')}>Men</button>
                    <button className="text-white bg-pink-500 px-4 py-2 rounded-lg" onClick={() => filterProductsByCategory('women')}>Women</button>
                    <button className="text-white bg-gray-500 px-4 py-2 rounded-lg" onClick={() => filterProductsByCategory('all')}>All</button>
                </div>

                {/* Products Section */}
                <div className="container px-5 py-8 mx-auto mt-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {filteredProducts.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-4 bg-slate-300 border border-black"
                            >
                                <Link to={`/product/${item.id}`} className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce"
                                        className="object-contain w-full h-full mix-blend-multiply"
                                        src={item.image} />
                                </Link>
                                <div className="mt-4 text-center">
                                    <h3 className="text-black font-bold mb-1">{item.category}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">₹ {item.price}</h2>
                                </div>
                                <div className="text-center pt-2">
                                    <button className="bg-slate-800 text-white px-2 py-1 rounded" onClick={() => addToCartHandler(item)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="alert">
                    Item added to cart!
                </div>
            </section>
        </div>
    );
};

export default Product;
