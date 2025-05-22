import React from "react";

interface Props {
    // 这里的 id 和 photoId 都要和前面文件夹名对应上，才能正确获取到
    params: { id: number, photoId: number };
}

// 同样可以直接解构使用
const PhotoPage = ({ params: { id, photoId } }: Props) => {
    return (
        <div>
            User {id}'s Photo {photoId}
        </div>
    );
};

export default PhotoPage;