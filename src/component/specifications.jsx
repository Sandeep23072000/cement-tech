const Specifications = () => {
  return (
    <div
      id="first-in-india"
      className="max-w-7xl mx-auto sm:py-20 py-6 px-2 sm:px-0"
    >
      <p className="lg:text-4xl sm:text-3xl text-2xl text-theme-foreground-500 font-bold">
        {"India's"} first make in india technical multi-functional and
        customised app for O&M support.
      </p>
      <p className="sm:text-2xl text-xl">
        This app not only help to implement {'"Preventive maintenance"'} but
        also support to calculate maintenance costing.
      </p>
      <div className="pt-4 space-y-4">
        <div className="gap-3">
          <img
            src="/3 demensional.png"
            className="w-full"
            width={600}
            height={50}
          />
        </div>
        <div className="w-full border-2 border-black">
          <img
            src="/smart software.png"
            className="w-full"
            width={600}
            height={400}
          />
          <p className="text-base p-2 sm:p-4 sm:text-3xl text-white bg-orange-500 font-medium text-center w-full block">
            Smart software based support system to implement & establish the
            preventive culture for O&M in your plant
          </p>
        </div>
        <div className="w-full">
          <img
            src="/futuristics.png"
            className="w-full"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Specifications;
