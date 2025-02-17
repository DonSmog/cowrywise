import { FC } from "react";
import { useFetchImages } from "../hooks/api";
import { IndividualCard } from "./card";
import { Loading } from "./loading";

interface GridDisplayProps {
  search: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const GridDisplay: FC<GridDisplayProps> = ({
  search,
  page,
  setPage,
}) => {
  const { data, isLoading } = useFetchImages(search, page);
  const totalPages = data?.total_pages ?? 0;

  return (
    <div className="md:w-3/5 w-full absolute top-40 pb-10 md:px-0 px-5">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {(data?.results ?? []).length > 0 ? (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-3 grid-rows-12 gap-x-8 md:gap-y-6 gap-y-4">
                <div className="row-span-3 md:col-span-1 col-span-3">
                  {data?.results?.[0] && (
                    <IndividualCard
                      url={data?.results?.[0]?.urls?.regular ?? ""}
                      alt={data?.results?.[0]?.description ?? ""}
                      name={data?.results?.[0]?.user.name ?? ""}
                      location={data?.results?.[0]?.user.location ?? ""}
                    />
                  )}
                </div>

                <div className="row-span-4 md:col-span-1 col-span-3">
                  {data?.results?.[1] && (
                    <IndividualCard
                      url={data?.results?.[1]?.urls?.regular ?? ""}
                      alt={data?.results?.[1]?.description ?? ""}
                      name={data?.results?.[1]?.user.name ?? ""}
                      location={data?.results?.[1]?.user.location ?? ""}
                    />
                  )}
                </div>
                <div className="row-span-3 md:col-span-1 col-span-3">
                  {data?.results?.[2] && (
                    <IndividualCard
                      url={data?.results?.[2]?.urls?.regular ?? ""}
                      alt={data?.results?.[2]?.description ?? ""}
                      name={data?.results?.[2]?.user.name ?? ""}
                      location={data?.results?.[2]?.user.location ?? ""}
                    />
                  )}
                </div>
                <div className="row-span-3 md:row-start-4 md:col-span-1 col-span-3">
                  {data?.results?.[3] && (
                    <IndividualCard
                      url={data?.results?.[3]?.urls?.regular ?? ""}
                      alt={data?.results?.[3]?.description ?? ""}
                      name={data?.results?.[3]?.user.name ?? ""}
                      location={data?.results?.[3]?.user.location ?? ""}
                    />
                  )}
                </div>
                <div className="row-span-4 md:col-start-2 md:row-start-5 md:col-span-1 col-span-3">
                  {data?.results?.[4] && (
                    <IndividualCard
                      url={data?.results?.[4]?.urls?.regular ?? ""}
                      alt={data?.results?.[4]?.description ?? ""}
                      name={data?.results?.[4]?.user.name ?? ""}
                      location={data?.results?.[4]?.user.location ?? ""}
                    />
                  )}
                </div>
                <div className="row-span-3 md:col-start-3 md:row-start-4 md:col-span-1 col-span-3">
                  {data?.results?.[5] && (
                    <IndividualCard
                      url={data?.results?.[5]?.urls?.regular ?? ""}
                      alt={data?.results?.[5]?.description ?? ""}
                      name={data?.results?.[5]?.user.name ?? ""}
                      location={data?.results?.[5]?.user.location ?? ""}
                    />
                  )}
                </div>
                <div className="row-span-3 md:row-start-7 md:col-span-1 col-span-3">
                  {data?.results?.[6] && (
                    <IndividualCard
                      url={data?.results?.[6]?.urls?.regular ?? ""}
                      alt={data?.results?.[6]?.description ?? ""}
                      name={data?.results?.[6]?.user.name ?? ""}
                      location={data?.results?.[6]?.user.location ?? ""}
                    />
                  )}
                </div>
                <div className="row-span-3 md:col-start-3 md:row-start-7 md:col-span-1 col-span-3">
                  {data?.results?.[7] && (
                    <IndividualCard
                      url={data?.results?.[7]?.urls?.regular ?? ""}
                      alt={data?.results?.[7]?.description ?? ""}
                      name={data?.results?.[7]?.user.name ?? ""}
                      location={data?.results?.[7]?.user.location ?? ""}
                    />
                  )}
                </div>
                <div className="row-span-4 md:col-start-2 md:row-start-9 md:col-span-1 col-span-3">
                  {data?.results?.[8] && (
                    <IndividualCard
                      url={data?.results?.[8]?.urls?.regular ?? ""}
                      alt={data?.results?.[8]?.description ?? ""}
                      name={data?.results?.[8]?.user.name ?? ""}
                      location={data?.results?.[8]?.user.location ?? ""}
                    />
                  )}
                </div>
                <div className="row-span-3 md:row-start-10 md:col-span-1 col-span-3">
                  {data?.results?.[9] && (
                    <IndividualCard
                      url={data?.results?.[9]?.urls?.regular ?? ""}
                      alt={data?.results?.[9]?.description ?? ""}
                      name={data?.results?.[9]?.user.name ?? ""}
                      location={data?.results?.[9]?.user.location ?? ""}
                    />
                  )}
                </div>
                <div className="row-span-3 md:col-start-3 md:row-start-10 md:col-span-1 col-span-3">
                  {data?.results?.[10] && (
                    <IndividualCard
                      url={data?.results?.[10]?.urls?.regular ?? ""}
                      alt={data?.results?.[10]?.description ?? ""}
                      name={data?.results?.[10]?.user.name ?? ""}
                      location={data?.results?.[10]?.user.location ?? ""}
                    />
                  )}
                </div>
              </div>

              {page < totalPages && (
                <div className="flex justify-end">
                  <button
                    onClick={() => setPage((prev) => prev + 1)}
                    className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-sm text-white font-semibold py-2 px-6 rounded-lg"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center">
              <p className="text-gray-800 md:text-3xl text-2xl font-semibold">
                No result found
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
