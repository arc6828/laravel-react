import BootstrapLayout from "@/Layouts/BootstrapLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const ProductForm = ({product}) => {
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
        // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        const options = {
            method: product?"PUT":"POST",
            headers: { 
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(formData),
        };
        // send data
        let url = product ? "/api/product/"+product.id : "/api/product";
        console.log(url);
        const response = await fetch(url, options);
        // response and show status
        const data = await response.json();
        if (response.ok) {
            alert("Product added successfully!");
        } else {
            console.error("Error:", data.errors);
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
                        required 
                    />
                    <label className="form-label mt-4"> Description </label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Product Description"
                        required 
                    />
                    <label className="form-label mt-4"> Price </label>
                    <input
                        className="form-control"
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Product Price"
                        required 
                    />
                    <label className="form-label mt-4"> Image </label>
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        required
                    />
                    <button className="btn btn-primary mt-4" type="submit" >
                        Submit
                    </button>
                </form>
            </div>
        </BootstrapLayout>
    );
};

export default ProductForm;
