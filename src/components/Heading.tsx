import React from "react";

export interface LinkProps {
  href: string;
  linkName: string;
}

export const Heading = ({ heading }: { heading: string }) => {
  return (
    <div className="mb-5">
      <h2 className=" text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
    </div>
  );
};

export default Heading;
