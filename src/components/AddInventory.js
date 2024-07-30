// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Select from 'react-select';

// const AddInventory = () => {
//     const [itemName, setItemName] = useState('');
//     const [category, setCategory] = useState('');
//     const [description, setDescription] = useState('');
//     const [rentalPrice, setRentalPrice] = useState('');
//     const [duration, setDuration] = useState('');
//     const [available, setAvailable] = useState('');
//     const [maintenance, setMaintenance] = useState('');
//     const [quantity, setQuantity] = useState(0);
//     const [image, setImage] = useState(null);

//     const navigate = useNavigate();

//     const categories = [
//         { value: 'Cup Lock', label: 'Cup Lock' },
//         { value: 'H-Frame', label: 'H-Frame' },
//         { value: 'Tube & Clamp', label: 'Tube & Clamp' },
//         { value: 'Heavy Equipment', label: 'Heavy Equipment' },
//         { value: 'Transportation', label: 'Transportation' },
//         { value: 'Tools', label: 'Tools' },
//         { value: 'Accro Props', label: 'Accro Props' },
//     ];

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Create formData object
//         const formData = new FormData();
//         formData.append('name', itemName);
//         formData.append('category', category);
//         formData.append('description', description);
//         formData.append('rentalPrice', rentalPrice);
//         formData.append('duration', '1 day');
//         formData.append('quantity', quantity);
//         formData.append('available', available);
//         formData.append('maintenance', maintenance);
//         formData.append('image', image);

//         try {
//             // Make POST request using axios
//             const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/inventory/', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log(response.data);
//             navigate('/inventory');
//         } catch (error) {
//             console.error('Error adding inventory:', error);
//         }
//     };

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]); // Set the selected image file
//     };

//     const handleCategoryChange = (selectedOption) => {
//         setCategory(selectedOption ? selectedOption.value : '');
//     };

//     return (
//         <div className='w-[100%] flex'>
//         <div className='lg:w-[20%] md:w-[15%] w-[10%]'></div>
//         <div className="add-inventory lg:w-[80%] md:w-[85%] w-[90%]">
//             <h1 className='font-bold text-2xl'>Add Product</h1>
//             <form onSubmit={handleSubmit}>
//                 <label className='font-bold'>
//                     Item Name:
//                     <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
//                 </label>
//                 <label className='font-bold'>
//                     Category:
//                     <Select
//                         options={categories}
//                         onChange={handleCategoryChange}
//                         onInputChange={(inputValue, actionMeta) => {
//                             if (actionMeta.action === 'input-change' && !categories.find(cat => cat.value === inputValue)) {
//                                 setCategory(inputValue);
//                             }
//                         }}
//                         isClearable
//                         isSearchable
//                         placeholder="Select or type a category"
//                     />
//                 </label>
//                 <label className='font-bold'>
//                     Description:
//                     <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 </label>
//                 <label className='font-bold'>
//                     Rental Price: <span className='text-gray-500'>(Upload the price for one day)</span>
//                     <input type="text" value={rentalPrice} onChange={(e) => setRentalPrice(e.target.value)} />
//                 </label>
//                 <label className='font-bold'>
//                     Quantity:
//                     <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
//                 </label>
//                 <label className='font-bold'>
//                     Available:
//                     <select value={available} onChange={(e) => setAvailable(e.target.value === 'true')}>
//                         <option value={true}>Yes</option>
//                         <option value={false}>No</option>
//                     </select>
//                 </label>
//                 <label className='font-bold'>
//                     Maintenance:
//                     <select value={maintenance} onChange={(e) => setMaintenance(e.target.value === 'true')}>
//                         <option value={true}>Yes</option>
//                         <option value={false}>No</option>
//                     </select>
//                 </label>
//                 <label className='font-bold'>
//                     Image:
//                     <input type="file" onChange={handleImageChange} />
//                 </label>
//                 <div className='flex items-center justify-center'>
//                     <button type="submit" className='bg-blue-400 px-6 py-2'>Add</button>
//                 </div>
//             </form>
//         </div>
//         </div>
//     );
// };

// export default AddInventory;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Select from 'react-select';

// const AddInventory = () => {
//     const [itemName, setItemName] = useState('');
//     const [category, setCategory] = useState('');
//     const [product, setProduct] = useState('');
//     const [size, setSize] = useState('');
//     const [description, setDescription] = useState('');
//     const [rentalPrice, setRentalPrice] = useState('');
//     const [duration, setDuration] = useState('');
//     const [available, setAvailable] = useState('');
//     const [maintenance, setMaintenance] = useState('');
//     const [quantity, setQuantity] = useState(0);
//     const [image, setImage] = useState(null);
//     const [products, setProducts] = useState([]);
//     const [sizes, setSizes] = useState([]);

//     const navigate = useNavigate();

//     const categories = [
//         { value: 'Cup Lock', label: 'Cup Lock', products: ['Standards', 'Ledgers', 'Base Plates'] },
//         { value: 'H-Frame', label: 'H-Frame', products: ['H Frames', 'Braces', 'Planks'] },
//         { value: 'Tube & Clamp', label: 'Tube & Clamp', products: ['Tubes', 'Clamps'] },
//         { value: 'Heavy Equipment', label: 'Heavy Equipment', products: ['Powerwasher', 'Chain Saw'] },
//         { value: 'Transportation', label: 'Transportation', products: ['Casters'] },
//         { value: 'Tools', label: 'Tools', products: ['Powerwasher', 'Small Hilti'] },
//         { value: 'Accro Props', label: 'Accro Props', products: ['Accor Props'] },
//     ];

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Create formData object
//         const formData = new FormData();
//         // formData.append('name', itemName);
//         formData.append('category', category);
//         formData.append('product', product);
//         formData.append('size', size);
//         formData.append('description', description);
//         formData.append('rentalPrice', rentalPrice);
//         formData.append('duration', '1 day');
//         formData.append('quantity', quantity);
//         formData.append('available', available);
//         formData.append('maintenance', maintenance);
//         formData.append('image', image);

//         try {
//             // Make POST request using axios
//             const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/inventory/', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log(response.data);
//             navigate('/inventory');
//         } catch (error) {
//             console.error('Error adding inventory:', error);
//         }
//     };

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]); // Set the selected image file
//     };

//     const handleCategoryChange = (selectedOption) => {
//         setCategory(selectedOption ? selectedOption.value : '');
//         setProducts(selectedOption ? selectedOption.products : []);
//         setSizes([]);
//         setProduct('');
//         setSize('');
//     };

//     const handleProductChange = (e) => {
//         const selectedProduct = e.target.value;
//         setProduct(selectedProduct);
//         const productSizes = getSizesForProduct(selectedProduct); // Function to get sizes for the selected product
//         setSizes(productSizes);
//         setSize(''); // Reset size when a new product is selected
//     };

//     const handleSizeChange = (e) => {
//         setSize(e.target.value);
//     };

//     const getSizesForProduct = (product) => {
//         const sizeMap = {
//             'Standards': ['2ft', '3ft', '6ft', '10ft'],
//             'Ledgers': ['2ft', '3ft', '4ft', '8ft'],
//             'Base Plates': ['Regular', 'Heavy Duty'],
//             'H Frames': ['3x5', '5x5'],
//             'Braces': ['3ft', '4ft', '8ft'],
//             'Planks': ['10ft Heavy'],
//             'Tubes': ['2ft', '3ft', '6ft', '10ft'],
//             'Clamps': ['Right Angle', 'Swivel', 'Beam'],
//             'Powerwasher': [],
//             'Chain Saw': [],
//             'Casters': ['With Toggle Pins'],
//             'Small Hilti': [],
//             'Accor Props': []
//         };
//         return sizeMap[product] || [];
//     };

//     return (
//         <div className='w-[100%] flex'>
//             <div className='lg:w-[20%] md:w-[15%] w-[10%]'></div>
//             <div className="add-inventory lg:w-[80%] md:w-[85%] w-[90%]">
//                 <h1 className='font-bold text-2xl'>Add Product</h1>
//                 <form onSubmit={handleSubmit}>
//                     {/* <label className='font-bold'>
//                         Item Name:
//                         <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
//                     </label> */}
//                     <label className='font-bold'>
//                         Category:
//                         <Select
//                             options={categories}
//                             onChange={handleCategoryChange}
//                             isClearable
//                             isSearchable
//                             placeholder="Select a category"
//                         />
//                     </label>
//                     <label className='font-bold'>
//                         Product Name:
//                         <select value={product} onChange={handleProductChange}>
//                             <option value="">Select a product</option>
//                             {products.map((product, index) => (
//                                 <option key={index} value={product}>{product}</option>
//                             ))}
//                         </select>
//                     </label>
//                     {sizes.length > 0 && (
//                         <label className='font-bold'>
//                             Size:
//                             <select value={size} onChange={handleSizeChange}>
//                                 <option value="">Select a size</option>
//                                 {sizes.map((size, index) => (
//                                     <option key={index} value={size}>{size}</option>
//                                 ))}
//                             </select>
//                         </label>
//                     )}
//                     <label className='font-bold'>
//                         Description:
//                         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//                     </label>
//                     <label className='font-bold'>
//                         Rental Price: <span className='text-gray-500'>(Upload the price for one day)</span>
//                         <input type="text" value={rentalPrice} onChange={(e) => setRentalPrice(e.target.value)} />
//                     </label>
//                     <label className='font-bold'>
//                         Quantity:
//                         <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
//                     </label>
//                     <label className='font-bold'>
//                         Available:
//                         <select value={available} onChange={(e) => setAvailable(e.target.value === 'true')}>
//                             <option value={true}>Yes</option>
//                             <option value={false}>No</option>
//                         </select>
//                     </label>
//                     {/* <label className='font-bold'>
//                         Maintenance:
//                         <select value={maintenance} onChange={(e) => setMaintenance(e.target.value === 'true')}>
//                             <option value={true}>Yes</option>
//                             <option value={false}>No</option>
//                         </select>
//                     </label> */}
//                     <label className='font-bold'>
//                         Image:
//                         <input type="file" onChange={handleImageChange} />
//                     </label>
//                     <div className='flex items-center justify-center'>
//                         <button type="submit" className='bg-blue-400 px-6 py-2'>Add</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddInventory;

//23/july/24
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Select from 'react-select';

// const AddInventory = () => {
//     const [itemName, setItemName] = useState('');
//     const [category, setCategory] = useState('');
//     const [product, setProduct] = useState('');
//     const [description, setDescription] = useState('');
//     const [rentalPrice, setRentalPrice] = useState('');
//     const [duration, setDuration] = useState('');
//     const [available, setAvailable] = useState('');
//     const [maintenance, setMaintenance] = useState('');
//     const [quantity, setQuantity] = useState(0);
//     const [image, setImage] = useState(null);
//     const [products, setProducts] = useState([]);
//     const [sizes, setSizes] = useState([]);

//     const navigate = useNavigate();

//     const categories = [
//         { value: 'Cup Lock', label: 'Cup Lock', products: ['Standards', 'Ledgers', 'Base Plates'] },
//         { value: 'H-Frame', label: 'H-Frame', products: ['H Frames', 'Braces', 'Planks'] },
//         { value: 'Tube & Clamp', label: 'Tube & Clamp', products: ['Tubes', 'Clamps'] },
//         { value: 'Heavy Equipment', label: 'Heavy Equipment', products: ['Powerwasher', 'Chain Saw'] },
//         { value: 'Transportation', label: 'Transportation', products: ['Casters'] },
//         { value: 'Tools', label: 'Tools', products: ['Powerwasher', 'Small Hilti'] },
//         { value: 'Accro Props', label: 'Accro Props', products: ['Accor Props'] },
//     ];

//     const toCamelCase = (str) => {
//         return str
//             .toLowerCase()
//             .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase())
//             .replace(/\s+/g, '');
//     };
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         // Automatically get sizes based on selected product
//         const selectedSizes = getSizesForProduct(product);
    
//         // Create formData object
//         const formData = new FormData();
//         formData.append('category', toCamelCase(category)); // Convert category to camel case
//         formData.append('name', product);
//         selectedSizes.forEach(size => formData.append('size[]', size));
//         formData.append('description', description);
//         formData.append('rentalPrice', rentalPrice);
//         formData.append('duration', '1 day');
//         formData.append('quantity', quantity);
//         formData.append('available', available);
//         formData.append('maintenance', maintenance);
//         formData.append('image', image);
    
//         try {
//             // Make POST request using axios
//             const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/inventory/', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log(response.data);
//             navigate('/inventory');
//         } catch (error) {
//             console.error('Error adding inventory:', error);
//         }
//     };
    

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]); // Set the selected image file
//     };

//     const handleCategoryChange = (selectedOption) => {
//         setCategory(selectedOption ? selectedOption.value : '');
//         setProducts(selectedOption ? selectedOption.products : []);
//         setSizes([]);
//         setProduct('');
//     };

//     const handleProductChange = (e) => {
//         const selectedProduct = e.target.value;
//         setProduct(selectedProduct);
//         const productSizes = getSizesForProduct(selectedProduct); // Function to get sizes for the selected product
//         setSizes(productSizes);
//     };

//     const getSizesForProduct = (product) => {
//         const sizeMap = {
//             'Standards': ['2ft', '3ft', '6ft', '10ft'],
//             'Ledgers': ['2ft', '3ft', '4ft', '8ft'],
//             'Base Plates': ['Regular', 'Heavy Duty'],
//             'H Frames': ['3x5', '5x5'],
//             'Braces': ['3ft', '4ft', '8ft'],
//             'Planks': ['10ft Heavy'],
//             'Tubes': ['2ft', '3ft', '6ft', '10ft'],
//             'Clamps': ['Right Angle', 'Swivel', 'Beam'],
//             'Powerwasher': [],
//             'Chain Saw': [],
//             'Casters': ['With Toggle Pins'],
//             'Small Hilti': [],
//             'Accor Props': []
//         };
//         return sizeMap[product] || [];
//     };

//     return (
//         <div className='w-[100%] flex'>
//             <div className='lg:w-[20%] md:w-[15%] w-[10%]'></div>
//             <div className="add-inventory lg:w-[80%] md:w-[85%] w-[90%]">
//                 <h1 className='font-bold text-2xl'>Add Product</h1>
//                 <form onSubmit={handleSubmit}>
//                     <label className='font-bold'>
//                         Category:
//                         <Select
//                             options={categories}
//                             onChange={handleCategoryChange}
//                             isClearable
//                             isSearchable
//                             placeholder="Select a category"
//                         />
//                     </label>
//                     <label className='font-bold'>
//                         Product Name:
//                         <select value={product} onChange={handleProductChange}>
//                             <option value="">Select a product</option>
//                             {products.map((product, index) => (
//                                 <option key={index} value={product}>{product}</option>
//                             ))}
//                         </select>
//                     </label>
//                     <label className='font-bold'>
//                         Description:
//                         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//                     </label>
//                     <label className='font-bold'>
//                         Rental Price: <span className='text-gray-500'>(Upload the price for one day)</span>
//                         <input type="text" value={rentalPrice} onChange={(e) => setRentalPrice(e.target.value)} />
//                     </label>
//                     <label className='font-bold'>
//                         Quantity:
//                         <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
//                     </label>
//                     <label className='font-bold'>
//                         Available:
//                         <select value={available} onChange={(e) => setAvailable(e.target.value === 'true')}>
//                             <option value={true}>Yes</option>
//                             <option value={false}>No</option>
//                         </select>
//                     </label>
//                     <label className='font-bold'>
//                         Image:
//                         <input type="file" onChange={handleImageChange} />
//                     </label>
//                     <div className='flex items-center justify-center'>
//                         <button type="submit" className='bg-blue-400 px-6 py-2'>Add</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddInventory;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';

const AddInventory = () => {
    const [category, setCategory] = useState('');
    const [customCategory, setCustomCategory] = useState('');
    const [product, setProduct] = useState('');
    const [customProduct, setCustomProduct] = useState('');
    const [description, setDescription] = useState('');
    const [rentalPrice, setRentalPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [available, setAvailable] = useState('');
    const [maintenance, setMaintenance] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState(null);
    const [products, setProducts] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [customSize, setCustomSize] = useState('');

    const navigate = useNavigate();

    const categories = [
        { value: 'Cup Lock', label: 'Cup Lock', products: ['Standards', 'Ledgers', 'Base Plates'] },
        { value: 'H-Frame', label: 'H-Frame', products: ['H Frames', 'Braces', 'Planks'] },
        { value: 'Tube & Clamp', label: 'Tube & Clamp', products: ['Tubes', 'Clamps'] },
        { value: 'Heavy Equipment', label: 'Heavy Equipment', products: ['Powerwasher', 'Chain Saw'] },
        { value: 'Transportation', label: 'Transportation', products: ['Casters'] },
        { value: 'Tools', label: 'Tools', products: ['Powerwasher', 'Small Hilti'] },
        { value: 'Accro Props', label: 'Accro Props', products: ['Accor Props'] },
    ];

    const toCamelCase = (str) => {
        return str
            .toLowerCase()
            .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase())
            .replace(/\s+/g, '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Automatically get sizes based on selected product
        const selectedSizes = getSizesForProduct(product);

        // Create formData object
        const formData = new FormData();
        formData.append('category', customCategory || toCamelCase(category)); // Use custom category if provided
        formData.append('name', customProduct || product); // Use custom product if provided
        selectedSizes.forEach(size => formData.append('size[]', size));
        if (customSize) {
            formData.append('size[]', customSize);
        }
        formData.append('description', description);
        formData.append('rentalPrice', rentalPrice);
        formData.append('duration', '1 day');
        formData.append('quantity', quantity);
        formData.append('available', available);
        formData.append('maintenance', maintenance);
        formData.append('image', image);

        try {
            // Make POST request using axios
            const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/inventory/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            navigate('/inventory');
        } catch (error) {
            console.error('Error adding inventory:', error);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Set the selected image file
    };

    const handleCategoryChange = (selectedOption) => {
        setCategory(selectedOption ? selectedOption.value : '');
        setProducts(selectedOption ? selectedOption.products : []);
        setSizes([]);
        setProduct('');
        setCustomProduct('');
        setCustomSize('');
        setCustomCategory('');
    };

    const handleProductChange = (e) => {
        const selectedProduct = e.target.value;
        setProduct(selectedProduct);
        const productSizes = getSizesForProduct(selectedProduct); // Function to get sizes for the selected product
        setSizes(productSizes);
        setCustomProduct('');
        setCustomSize('');
    };

    const getSizesForProduct = (product) => {
        const sizeMap = {
            'Standards': ['2ft', '3ft', '6ft', '10ft'],
            'Ledgers': ['2ft', '3ft', '4ft', '8ft'],
            'Base Plates': ['Regular', 'Heavy Duty'],
            'H Frames': ['3x5', '5x5'],
            'Braces': ['3ft', '4ft', '8ft'],
            'Planks': ['10ft Heavy'],
            'Tubes': ['2ft', '3ft', '6ft', '10ft'],
            'Clamps': ['Right Angle', 'Swivel', 'Beam'],
            'Powerwasher': [],
            'Chain Saw': [],
            'Casters': ['With Toggle Pins'],
            'Small Hilti': [],
            'Accor Props': []
        };
        return sizeMap[product] || [];
    };

    return (
        <div className='w-[100%] flex'>
            <div className='lg:w-[20%] md:w-[15%] w-[10%]'></div>
            <div className="add-inventory lg:w-[80%] md:w-[85%] w-[90%]">
                <h1 className='font-bold text-2xl'>Add Product</h1>
                <form onSubmit={handleSubmit}>
                    <label className='font-bold'>
                        Category:
                        <Select
                            options={categories}
                            onChange={handleCategoryChange}
                            isClearable
                            isSearchable
                            placeholder="Select a category"
                        />
                        <input
                            type="text"
                            value={customCategory}
                            onChange={(e) => setCustomCategory(e.target.value)}
                            placeholder="Or enter custom category"
                            className={category ? 'hidden' : ''}
                        />
                    </label>
                    <label className='font-bold'>
                        Product Name:
                        <select value={product} onChange={handleProductChange} className={customCategory ? 'hidden' : ''}>
                            <option value="">Select a product</option>
                            {products.map((product, index) => (
                                <option key={index} value={product}>{product}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            value={customProduct}
                            onChange={(e) => setCustomProduct(e.target.value)}
                            placeholder="Or enter product name"
                            className={product ? 'hidden' : ''}
                        />
                    </label>
                    {(product === '' || customProduct) && (
                        <label className='font-bold'>
                            Custom Size:
                            <input
                                type="text"
                                value={customSize}
                                onChange={(e) => setCustomSize(e.target.value)}
                                placeholder="Enter size"
                            />
                        </label>
                    )}
                    <label className='font-bold'>
                        Description:
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <label className='font-bold'>
                        Rental Price: <span className='text-gray-500'>(Upload the price for one day)</span>
                        <input type="text" value={rentalPrice} onChange={(e) => setRentalPrice(e.target.value)} />
                    </label>
                    <label className='font-bold'>
                        Quantity:
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                    </label>
                    <label className='font-bold'>
                        Available:
                        <select value={available} onChange={(e) => setAvailable(e.target.value === 'true')}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label className='font-bold'>
                        Image:
                        <input type="file" onChange={handleImageChange} />
                    </label>
                    <div className='flex items-center justify-center'>
                        <button type="submit" className='bg-blue-400 px-6 py-2'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddInventory;

