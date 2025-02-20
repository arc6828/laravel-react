import BootstrapLayout from "@/Layouts/BootstrapLayout";
import { useEffect, useState } from "react";

const CartItemList = () => {
    const [cart, setCart] = useState([]);

    const onLoad = async () => {
        try {
            const response = await fetch("api/cart-item"); // เรียก API เมนูจาก Laravel
            const data = await response.json();
            setCart(data);
        } catch (error) {
            console.error("Error fetching menu:", err);
        }
    };

    const onRemove = async (id) => {
        // confirmed
        let confirmed = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (!confirmed) return false;

        // remove
        try {
            // update backend
            const response = await fetch(`api/cart-item/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Failed to delete");

            // update frontend
            setCart(cart.filter((item) => item.id !== id));

            alert("deleted successfully");
        } catch (error) {
            console.error(error.message);
        }
    };

    const placeOrder = async() => {

        try {
            let data = {
                "cart" : cart,
            };
            // console.log(data);
            const response = await fetch("api/order-item", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to add item to cart");
            }
            let data2 = await response.json()
            console.log(data2)
            setCart([]);
            alert("เพิ่มสินค้าเรียบร้อย!");
        } catch (error) {
            console.error("Error adding to cart:", error);
        }

    };

    useEffect(() => {
        onLoad();
    }, []);

    return (
        <BootstrapLayout>
            <div className="container">
                <h1>ตะกร้าสินค้า</h1>
                {cart.map((item) => (
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={item.item.image}
                                    className="img-fluid rounded-start"
                                    alt={item.item.name}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">
                                        {item.item.description}
                                    </p>
                                    <p className="card-text">
                                        <strong>Price:</strong> $
                                        {item.item.price}
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <button
                                            className="btn btn-outline-primary"
                                            onClick={() => onDecrease(item.id)}
                                        >
                                            -
                                        </button>
                                        <span className="mx-3">
                                            {item.quantity}
                                        </span>
                                        <button
                                            className="btn btn-outline-primary"
                                            onClick={() => onIncrease(item.id)}
                                        >
                                            +
                                        </button>
                                        <button
                                            className="ms-3 btn btn-outline-danger"
                                            onClick={() => onRemove(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    className="btn btn-lg btn-warning w-100 mb-4"
                    onClick={() => placeOrder() }
                >
                    <div>สั่ง {cart.length} รายการ</div>
                </button>
                <a
                    className="btn btn-lg btn-outline-primary w-100 mb-4"
                    href="/menus"                    
                >
                    กลับไปหน้าเมนู
                </a>
                <a
                    className="btn btn-lg btn-outline-success w-100"
                    href="/orders"                    
                >
                    ดู Order ทั้งหมด
                </a>
            </div>
        </BootstrapLayout>
    );
};

export default CartItemList;
