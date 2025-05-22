import React from "react";

const Loading = () => {
    return (
        <div className="place-content-center">
            {/* 也有现成的 daisyUI 类可以使用 */}
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    );
};

export default Loading;