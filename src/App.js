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
  const [error, setError] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const res = await fetch(
        "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals"
      );
      const res_json = await res.json();
      setData(res_json);
      setIsLoading(false);
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  };
  const handleAddToCart = (item) => {
    console.log(item);
    const found = cart.some((el) => el.id === item.id);
    if (!found) {
      setCart([...cart, item]);
    } else {
      const tmp_item = cart.filter((el) => el.id === item.id);
      const tmp_cart = cart.filter((el) => el.id !== item.id);
      tmp_item[0].amount = Number(tmp_item[0].amount) + Number(item.amount);
      setCart([...tmp_cart, ...tmp_item]);
    }
    setAmount(Number(amount) + Number(item.amount));
  };
  console.log(cart);

  const handleIncreaseAmount = (id) => {
    cart.forEach((el) => {
      if (el.id === id) {
        el.amount = Number(el.amount) + 1;
        setAmount(Number(amount) + 1);
        setCart([...cart]);
        return;
      }
    });
  };

  const handleDecreaseAmount = (id) => {
    cart.forEach((el) => {
      if (el.id === id) {
        el.amount = Number(el.amount) - 1;
        setAmount(Number(amount) - 1);
        if (Number(el.amount) === 0) {
          setCart(cart.filter((el) => el.id !== id));
          return;
        }
        setCart([...cart]);
        return;
      }
    });
  };

  useEffect(() => {
    let tmp = 0;
    cart.forEach((el) => {
      tmp += el.amount * el.price;
    });
    setTotal(Math.round(tmp * 100) / 100);
  }, [cart]);
  console.log(total);

  return (
    <>
      <Header amount={amount} setShowModal={setShowModal} />
      <div className="App">
        {isLoading && <RotatingLines width="100" strokeColor="gray" />}
        {error && <div>Something went wrong with the data :( </div>}
        {!error &&
          !isLoading &&
          data &&
          data.map((d) => (
            <>
              <FoodCart key={d.id} item={d} handleAddToCart={handleAddToCart} />
              <hr />
            </>
          ))}
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          cart={cart}
          handleIncreaseAmount={handleIncreaseAmount}
          handleDecreaseAmount={handleDecreaseAmount}
          total={total}
          setCart={setCart}
          setAmount={setAmount}
        />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
