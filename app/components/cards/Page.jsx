"use client";

import Image from "next/image";

const Page = ({ img, title }) => {
  return (
    <div className="w-full bg-goldDark p-2 hover:scale-105 transition-transform duration-200 hover:shadow-xl">
      <div className="relative aspect-square w-full overflow-hidden rounded ">
        <Image
          alt="ecommerce"
          src={img}
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>
      <div className="bg-goldDark border-t-4 border-yellow-500 p-4">
        <h2 className="text-textColor text-sm text-center tracking-widest font-monomakh">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Page;
