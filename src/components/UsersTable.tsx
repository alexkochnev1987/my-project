import React from "react";
import { UserItem } from "./Users";
import { parseDate } from "@/app/utils/parseDate";

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
            {tableHeadNames.map((name, index) => (
              <th
                key={name}
                scope="col"
                className={`px-6 py-3 ${index === 1 ? "w-30" : "w-fit"} `}
              >
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
                className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-10"
              >
                {user.id}
              </th>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">{parseDate(user.ctime)}</td>
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
