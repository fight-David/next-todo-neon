"use client"; // 改为客户端组件
// 引入 router，注意是 next/navigation 不是 next/router
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
    // 初始化 router
    const router = useRouter();

    return (
        <>
            <div>NewUserPage</div>
            {/* 直接使用router.push() */}
            <button className="btn btn-primary" onClick={() => router.push("/users")}>
                Create
            </button>
        </>
    );
};

export default NewUserPage;