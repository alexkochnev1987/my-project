import { splitPrice } from "@/app/utils/splitPrice";
import Image from "next/image";
import React from "react";
const phoneData = `Apple / Смартфон iPhone 12 Pro 128GB / 4.7" 750x1334 / OLED / 32 ГБ`;
const src = "/iphone.jpg";
("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FApple-iPhone-14-128GB-Blue%2Fdp%2FB0BDK62PDX&psig=AOvVaw0fhaH7cJsbTUf0rt26sQ8L&ust=1693065381628000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPj4rJeW-IADFQAAAAAdAAAAABAE");
// "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const mainPriice = 86956;
const prevPrice = 99990;
const thirdPrice = 85251;
function Card() {
  return (
    <div className="max-w-xs px-3 py-6 bg-white rounded-xl shadow-lg transform ">
      <div className="relative flex justify-center">
        <Image
          width={300}
          height={350}
          src={src}
          priority={true}
          alt="Colors"
          className="rounded-3xl"
        />
        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full opacity-0 hover:opacity-90">
          <button className="bg-white p-3 rounded-3xl text-xs">
            Быстрый просмотр
          </button>
        </div>
        <p className="absolute left-0 bottom-0 bg-gray-300  text-pink-400 font-semibold py-1 px-3 rounded-3xl ">
          -14%
        </p>
      </div>
      <div className="flex gap-3 items-end">
        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer ">
          {splitPrice(mainPriice)}
          {` Ⳁ`}
        </h1>
        <h3 className=" text-gray-500 text-lg font-bold cursor-pointer line-through">
          {splitPrice(prevPrice)}
          {` Ⳁ`}
        </h3>
      </div>
      <h3 className="text-pink-400 text-lg font-bold cursor-pointer line-through">
        {splitPrice(thirdPrice)}
        {` Ⳁ`}
      </h3>
      <p className="text-gray-500">{phoneData}</p>
      <div className="flex items-center space-x-1">
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-gray-300 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <span className="text-gray-500">87</span>
      </div>
      <div className="pt-2">
        <button className="bg-gradient-to-r from-green-200 to-yellow-300 p-2 rounded-3xl uppercase font-semibold">
          Рассрочка-0-6-0
        </button>
      </div>

      <div className="flex gap-3 items-center pt-2">
        <button className="bg-purple-500 p-2 rounded-xl font-bold text-white hover:scale-105 transition duration-500">
          В корзину
        </button>
        <svg
          className="w-6 h-6 text-purple-500 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 21 19"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Card;
