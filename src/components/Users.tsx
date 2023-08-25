"use client";
import React, { useEffect, useState } from "react";
import Paginator from "./Paginator";
import UsersTable from "./UsersTable";
import Heading from "./Heading";
import { Spinner } from "./Spinner";
export interface UserItem {
  id: number;
  name: string;
  role: string;
  ctime: number;
}
interface UserResponse {
  total: number;
  per_page: number;
  page: number;
  limit: number;
  offset: number;
  items: Array<UserItem>;
}

export function Users() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState<number>();
  const [loading, setLoading] = useState(false);
  const deleteUser = (id: number) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  useEffect(() => {
    const getUsers = async (page: number) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://test.relabs.ru/api/users/list?limit=5&offset=${
            (page - 1) * 5
          }`
        );
        const data: UserResponse = await response.json();
        setTotalUsers(data.total);
        setUsers(data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUsers(page);
  }, [page]);

  return (
    <div>
      <Heading heading="Список пользователей" />
      <div className="relative flex flex-col h-[600px] justify-between">
        {loading && <Spinner />}
        {users.length > 0 && (
          <UsersTable users={users} deleteUser={deleteUser} />
        )}
        {totalUsers && page && (
          <Paginator page={page} total={totalUsers} setPage={setPage} />
        )}
      </div>
    </div>
  );
}
