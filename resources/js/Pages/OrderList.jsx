import BootstrapLayout from "@/Layouts/BootstrapLayout";
import { useEffect, useState } from "react";

const OrderList = () => {
    const [cart, setCart] = useState([]);

    const onLoad = async () => {
        try {
            const response = await fetch("api/orders"); // เรียก API เมนูจาก Laravel
            const data = await response.json();
            setCart(data);
        } catch (error) {
            console.error("Error fetching menu:", err);
        }
    };

    const totalCart = () => {
        return cart.reduce((partialSum, a)=>(partialSum + a.item.price), 0);
    };

    useEffect(() => {
        onLoad();
    }, []);

    return (
        <BootstrapLayout>
            <div className="container">
                <h1>คำสั่งซื้อทั้งหมด</h1>
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

                <div
                    class="floating-btn bg-warning p-4 btn my-5"
                    style={{
                        flexDirection: "row",
                        display:"flex",
                        justifyContent: "space-between",
                        fontSize:25,
                    }}
                >
                    <div>🛒 {cart.length} รายการในคำสั่งซื้อ</div>
                    <div>รวมที่ต้องชำระ ฿{totalCart()} บาท</div>
                </div>

                <a
                    className="btn btn-lg btn-outline-primary w-100 mb-4"
                    href="/menus"
                >
                    กลับไปหน้าเมนู
                </a>
            </div>
        </BootstrapLayout>
    );
};

export default OrderList;
