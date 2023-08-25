import React from "react";
import { UserItem } from "./Users";

const tableHeadNames = ["ID", "Имя", "Роль", "Дата создания", "Действия"];

function UsersTable({
  users,
  deleteUser,
}: {
  users: UserItem[];
  deleteUser: (id: number) => void;
}) {
  return (
    <div className="relative overflow-x-auto min-h-90">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 bg-gray-50">
          <tr>
            {tableHeadNames.map((name) => (
              <th key={name} scope="col" className="px-6 py-3">
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="bg-white border-b" key={user.id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-10"
              >
                {user.id}
              </th>
              <td className="px-6 py-4 w-25">{user.name}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">{user.ctime}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => deleteUser(user.id)}
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
