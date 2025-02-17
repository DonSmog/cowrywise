import { FC } from "react";
import { useFetchImages } from "../hooks/api";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  page: number;
}

export const SearchArea: FC<SearchProps> = ({
  search,
  setSearch,
  value,
  page,
}) => {
  const { isLoading } = useFetchImages(value, page);

  return (
    <form className="flex items-start justify-center pt-20 w-full bg-gray-300 h-50 md:px-0 px-5">
      {value ? (
        <div className="text-start md:w-2/3 w-full  flex justify-between items-center">
          <p className="text-gray-800 md:text-3xl text-2xl font-semibold">
            {isLoading ? "Searching" : "Search results"} for{" "}
            <span className="text-gray-600 capitalize">"{value}"</span>
          </p>

          <span
            className="cursor-pointer md:text-lg text-md text-gray-800 hover:underline"
            onClick={() => setSearch("")}
          >
            Reset
          </span>
        </div>
      ) : (
        <div className="relative md:w-2/3 w-full ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-none focus:border-none sm:text-sm"
            placeholder="Search for photo"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
    </form>
  );
};
