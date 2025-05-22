import React, { Suspense } from "react";
import UserTable from "./components/UserTable";
import Loading from "./loading";

// 首先在这里添加可选的参数，比如这里添加一个sortOrder
interface Props {
    searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
    return (
        <>
            <h1>User</h1>
            <Suspense fallback={<Loading></Loading>}>
                <UserTable sortOrder={sortOrder} />
            </Suspense>
        </>
    );
};

export default UserPage;