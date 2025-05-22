// 在文件顶部添加"use client"使其变为客户端组件
// "use client";
// import React from "react";

// const ProductCard = () => {
//     return (
//         <div>
//             <button onClick={() => console.log("Click")}> Add to Cart</button>
//         </div>
//     );
// };

// export default ProductCard;


import React from "react";
import AddToCart from "./components/AddToCart"; // 封装出去
import style from './Product.module.css'

const ProductCard = () => {
    return (
        <div className={style.card}>
            <AddToCart />
        </div>
    );
};

export default ProductCard;