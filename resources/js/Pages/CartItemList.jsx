import BootstrapLayout from "@/Layouts/BootstrapLayout";

const CartItemList = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
        <BootstrapLayout>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={item.image}
                            className="img-fluid rounded-start"
                            alt={item.name}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">
                                <strong>Price:</strong> ${item.price.toFixed(2)}
                            </p>
                            <div className="d-flex align-items-center">
                                <button
                                    variant="outline-primary"
                                    onClick={() => onDecrease(item.id)}
                                >
                                    -
                                </button>
                                <span className="mx-3">{item.quantity}</span>
                                <button
                                    variant="outline-primary"
                                    onClick={() => onIncrease(item.id)}
                                >
                                    +
                                </button>
                                <button
                                    variant="outline-danger"
                                    className="ms-3"
                                    onClick={() => onRemove(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BootstrapLayout>
    );
};

export default CartItemList;
