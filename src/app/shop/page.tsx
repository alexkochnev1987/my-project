import Card from "@/components/Card";
import React from "react";

function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr py-3 from-red-300 to-yellow-200 flex justify-center items-start">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        <Card />
      </div>
    </div>
  );
}

export default ShopPage;
