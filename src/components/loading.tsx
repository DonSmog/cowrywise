export const Loading = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 grid-rows-12 gap-x-8 md:gap-y-6 gap-y-4">
        <div className="row-span-3 md:col-span-1 col-span-3">
          <Loader />
        </div>
        <div className="row-span-4 md:col-span-1 col-span-3">
          <Loader />
        </div>
        <div className="row-span-3 md:col-span-1 col-span-3">
          <Loader />
        </div>
        <div className="row-span-3 md:row-start-4 md:col-span-1 col-span-3">
          <Loader />
        </div>
        <div className="row-span-4 md:col-start-2 md:row-start-5 md:col-span-1 col-span-3">
          <Loader />
        </div>
        <div className="row-span-3 md:col-start-3 md:row-start-4 md:col-span-1 col-span-3">
          <Loader />
        </div>
        <div className="row-span-3 md:row-start-7 md:col-span-1 col-span-3">
          <Loader />
        </div>
        <div className="row-span-4 md:col-start-2 md:row-start-9 md:col-span-1 col-span-3">
          <Loader />
        </div>
        <div className="row-span-3 md:col-start-3 md:row-start-7 md:col-span-1 col-span-3">
          <Loader />
        </div>
        <div className="row-span-3 md:row-start-10 md:col-span-1 col-span-3">
          <Loader />
        </div>
        <div className="row-span-3 md:col-start-3 md:row-start-10 md:col-span-1 col-span-3">
          <Loader />
        </div>
      </div>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="w-full rounded-md bg-gray-100 flex flex-col justify-end p-4 h-full min-h-60">
      <div className="flex flex-col gap-2 animate-pulse">
        <div className="h-3.5 bg-gray-300 w-3/5"></div>
        <div className="h-3.5 bg-gray-300 w-2/5"></div>
      </div>
    </div>
  );
};
