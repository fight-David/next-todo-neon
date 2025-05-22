import Link from "next/link";
import React from "react";
// 引入 fast-sort
import { sort } from "fast-sort";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    //     // 设置不加缓存
    //     cache: "no-store",
    //     // 或者设置每10秒重新获取一次(刷新一次)
    //     next: { revalidate: 10 },
    // });
    const users: User[] = await res.json();

    // 排序
    const sortedUsers = sort(users).asc(
        sortOrder === "email" ? (user) => user.email : (user) => user.name
    );
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            <Link href="/users?sortOrder=name">Name</Link>
                        </th>
                        <th>
                            <Link href="/users?sortOrder=email">Email</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UserTable;