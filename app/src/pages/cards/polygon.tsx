import type { NextPage } from "next";
import { useRouter } from "next/router";

const frameColors = [
  "bg-gradient-to-br from-green-500 to-blue-400",
  "bg-gradient-to-br from-cyan-400 to-pink-500",
  "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
  "bg-gradient-to-br from-yellow-500 via-orange-500 to-pink-500",
];

const ShidenCard: NextPage = () => {
  const { query } = useRouter();
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-base-300 text-base-content"
      data-theme="cyberpunk"
    >
      <div className="artboard card phone-1 bg-base-100 shadow-xl">
        <figure>
          {query.icon && (
            <img
              className="mask mask-hexagon mt-4 aspect-square h-48 bg-primary object-cover"
              src={String(query.icon)}
              alt=""
            />
          )}
        </figure>

        <p
          className={`my-4 break-all bg-clip-text text-center text-4xl font-bold text-transparent ${frameColors[2]}`}
        >
          {query.title || "Unknown supporter"}
        </p>

        <div className="flex-grow"></div>
        <p className="text-center text-5xl font-bold">
          {query.value || "0.0"}MATIC
        </p>
        <p className="mb-4 text-center text-lg">Matic Student Faucet</p>
      </div>
    </div>
  );
};

export default ShidenCard;
