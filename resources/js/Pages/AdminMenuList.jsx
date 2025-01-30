import BootstrapLayout from "@/Layouts/BootstrapLayout";
import { useState, useEffect } from "react";
import "../../css/menu.css";

const AdminMenuList = () => {
    const [menus, setMenus] = useState([]);

    const loadMenus = async () => {
        try {
            let response = await fetch("api/menu"); // เรียก API เมนูจาก Laravel
            let data = await response.json();
            setMenus(data);
        } catch (error) {
            console.error("Error fetching menu:", err);
        }
    };

    useEffect(() => {
        loadMenus();
    }, []);

    return (
        <BootstrapLayout>
            <div className="container my-5">
                <h1 className="text-center mb-4">เมนูอาหาร</h1>
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
                                        onClick={() => {}}
                                    >
                                        เพิ่มลงตะกร้า 🛒
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BootstrapLayout>
    );
};

export default AdminMenuList;
