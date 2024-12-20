import BootstrapLayout from "@/Layouts/BootstrapLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const ProductForm = ({product}) => {
    
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
    });    

    useEffect(()=>{        
        if(product){
            setFormData(product);
        }
    },[]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // set options
        const options = {
            method: product?"PUT":"POST",
            headers: { 
                "Content-Type": "application/json",
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        };

        // send data
        try {
            let url = product ? "/api/product/"+product.id : "/api/product";
            console.log(url, formData);
            const response = await fetch(url, options);
            // response and show status
            const data = await response.json();
            if (response.ok) {
                let msg = product ? "Product updated successfully!"  : "Product added successfully!"
                alert(msg);
                window.location.href = "/product-others";
            } else {
                // validated data errors 
                console.error("Error:", data.errors);
                setErrors(data.errors);
            }
        } catch (error) {
            // fetch errors
            console.error("Error:", error);
        }        
    };

    
    

    return (
        <BootstrapLayout>
            <Head title="Product Form" />
            <div className="container my-4">
                <h1>Product Form for Create/Edit</h1>
                <form onSubmit={handleSubmit}>
                    <label className="form-label mt-4"> Name </label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                         
                    />
                    {errors.name && <div><small className="text-danger">{errors.name}</small></div>}
                    <label className="form-label mt-4"> Description </label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Product Description"
                         
                    />
                    {errors.description && <div><small className="text-danger">{errors.description}</small></div>}
                    <label className="form-label mt-4"> Price </label>
                    <input
                        className="form-control"
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Product Price"
                         
                    />
                    {errors.price && <div><small className="text-danger">{errors.price}</small></div>}
                    <label className="form-label mt-4"> Image </label>
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        
                    />
                    {errors.image && <div><small className="text-danger">{errors.image}</small></div>}
                    <button className="btn btn-primary mt-4" type="submit" >
                        Submit
                    </button>
                </form>
            </div>
        </BootstrapLayout>
    );
};

export default ProductForm;
