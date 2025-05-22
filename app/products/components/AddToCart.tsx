// 在文件顶部添加"use client"使其变为客户端组件
"use client";
import React from "react";

const AddToCart = () => {
    return (
        <div >
            <button className="btn btn-primary" onClick={() => console.log("Click")}>
                Add to Cart
            </button>
            {/* <button onClick={() => console.log("Click")}> Add to Cart</button> */}
        </div>
    );
};

export default AddToCart;