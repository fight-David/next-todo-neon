import React from "react";

interface Props {
    // 注意这里的的 slug 类型为 string 数组
    params: { slug: string[] };
}

const ProductPage = ({ params: { slug } }: Props) => {
    return <div>ProductPage {slug && slug.map((str) => str + " ")}</div>;
};

export default ProductPage;