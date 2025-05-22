"use client";
import React from "react";

interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
    // 可以打印错误到本地日志，这里的是打印到用户端的 console
    console.log("Error", error);
    return (
        <>
            <div>An unexpected error has occurred</div>
            {/* 可以添加一个重试的 button */}
            <button className="btn" onClick={() => reset()}>
                Retry
            </button>
        </>
    );
};

export default ErrorPage;