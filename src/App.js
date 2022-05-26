import "./App.css";
import FoodCart from "./components/FoodCart";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";
import { RotatingLines } from "react-loader-spinner";

function App() {
    const [data, setData] = useState(null);
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        setIsLoading(true);
        const res = await fetch(
            "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals"
        );
        const res_json = await res.json();
        setData(res_json);
        setIsLoading(false);
    };
    const handleAddToCart = (item) => {
        console.log(item);
        const found = cart.some((el) => el.id === item.id);
        if (!found) {
            setCart([...cart, item]);
        } else {
            const tmp_item = cart.filter((el) => el.id === item.id);
            console.log("tmp_item", tmp_item);
            const tmp_cart = cart.filter((el) => el.id !== item.id);
            console.log("tmp_cart", tmp_cart);
            console.log("item", item.amount);
            tmp_item[0].amount =
                Number(tmp_item[0].amount) + Number(item.amount);
            console.log("after change", tmp_item);
            setCart([...tmp_cart, ...tmp_item]);
        }
        setAmount(Number(amount) + Number(item.amount));
    };
    console.log(showModal);
    return (
        <>
            <Header amount={amount} setShowModal={setShowModal} />
            <div className="App">
                {isLoading && (
                    <RotatingLines width="100" strokeColor="#FF5733" />
                )}
                {!isLoading &&
                    data &&
                    data.map((d) => (
                        <>
                            <FoodCart
                                key={d.id}
                                item={d}
                                handleAddToCart={handleAddToCart}
                            />
                            <hr />
                        </>
                    ))}
            </div>
            {showModal && <Modal setShowModal={setShowModal} cart={cart} />}
            <ToastContainer />
        </>
    );
}

export default App;
