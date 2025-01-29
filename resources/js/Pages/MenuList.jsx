import BootstrapLayout from "@/Layouts/BootstrapLayout";
import { useState, useEffect } from "react";

const MenuList = () => {
    const [menus, setMenus] = useState([]);
    const [cart, setCart] = useState([]);

    const loadMenus = () => {
        fetch("api/menu") // เรียก API เมนูจาก Laravel
            .then((res) => res.json())
            .then((data) => setMenus(data))
            .catch((err) => console.error("Error fetching menu:", err));
    };

    useEffect(() => {
        loadMenus();
    }, []);

    const addToCart = async(item) => {
        setCart([...cart, item]);

        try {
            let data = {
                table_id: 1,
                menu_id: item.id,
                item: item,
                quantity: 1, // เพิ่มทีละ 1
                options: {},
            };
            console.log(data);
            const response = await fetch("api/cart-item", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to add item to cart");
            }
            alert("เพิ่มสินค้าเรียบร้อย!");
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };
    const totalCart = () => {
        return cart.reduce((partialSum, a)=>(partialSum + a.price), 0);
    };

    return (
        <BootstrapLayout>
            <div className="container mt-5">
                <h2 className="text-center mb-4">เมนูอาหาร</h2>
                <div className="row">
                    {menus.map((menu) => (
                        <div key={menu.id} className="col-md-4 mb-4">
                            <div className="card shadow h-100">
                                <img
                                    src={`${menu.image}`}
                                    className="card-img-top"
                                    alt={menu.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{menu.name}</h5>
                                    <p className="card-text">
                                        {menu.description}
                                    </p>
                                    <h6 className="text-danger">
                                        {menu.price} บาท
                                    </h6>
                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={() => addToCart(menu)}
                                    >
                                        เพิ่มลงตะกร้า 🛒
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <a href="/cart">
                <div class="floating-btn bg-warning px-5" style={{ flexDirection: "row", justifyContent:"space-between" }}>
                    <div>🛒 {cart.length} รายการในตะกร้า</div>
                    <div>฿{totalCart()} บาท</div>
                </div>
            </a>
        </BootstrapLayout>
    );
};

export default MenuList;
