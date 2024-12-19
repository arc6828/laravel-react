import BootstrapLayout from "@/Layouts/BootstrapLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const ProductForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submit = async () => {
        try {
            // const response = await fetch(
            //     "https://raw.githubusercontent.com/arc6828/laravel-react/refs/heads/main/public/json/products.json"
            // );
            // const data = await response.json();
            // setProducts(data);
        } catch (error) {
            console.error("There was an error fetching the products!", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // set options
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        };
        // send data
        const response = await fetch("/api/products", options);
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
                    />
                    <label className="form-label mt-4"> Description </label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Product Description"
                    />
                    <label className="form-label mt-4"> Price </label>
                    <input
                        className="form-control"
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Product Price"
                    />
                    <label className="form-label mt-4"> Image </label>
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Image URL"
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
