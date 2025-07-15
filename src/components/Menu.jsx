import { useState } from "react";
import Item from "./Item";
import OrderModal from "./OrderModal";
import { useMenu } from "../context/menuContext"; 
import { useCart } from "../context/cartContext";

function Menu() {
  const { menu: fullData } = useMenu(); 

  const actualMenuData = fullData.menu;

  const { cart, setCart } = useCart();

  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);

  if (!actualMenuData)
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        메뉴 정보가 없어요!
      </div>
    );

  const categorys = Object.keys(actualMenuData);

  return (
    <>
      {categorys.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="menu">
            {actualMenuData[category].map((item) => (
              <Item
                key={item.name}
                item={item}
                clickHandler={() => {
                  setModalMenu(item);
                  setModalOn(true);
                }}
              />
            ))}
          </ul>
        </section>
      ))}
      {modalOn && (
        <OrderModal
          modalMenu={modalMenu}
          setModalOn={setModalOn}
        />
      )}
    </>
  );
}

export default Menu;