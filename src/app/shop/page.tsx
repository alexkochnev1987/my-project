import Card from "@/components/Card";
import React from "react";

function ShopPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200">
      <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {new Array(5).fill(1).map((elem, index) => {
          return <Card key={index} />;
        })}
      </div>
    </div>
  );
}

export default ShopPage;
