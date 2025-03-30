// const OurMission = () => {
//   return (
//     <>
//       <div className="bg-sky-200 py-7 sm:px-0 px-2 mb-2">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl font-bold text-center border-b-2 border-black pb-2">
//             Our Mission
//           </h1>
//           <h5 className="py-2 text-xl">
//             In todays technological era Cement manufacturing industry is also
//             ready to expand its business by adopting technological solutions.
//             Our mission is to provide technological solution through which they
//             can manages impairments, keep reviewing & reports of improvement in
//             day-to-day activities that results into annual plant performance &
//             thus the profits.
//           </h5>
//           <h5 className="text-xl">
//             In {"today's"} rapidly evolving technological landscape, the cement
//             manufacturing industry is poised for growth through innovative
//             solutions. Our mission is to deliver cutting-edge technological
//             solutions that empower businesses to efficiently manage impairments,
//             continuously monitor and analyze day-to-day operations, driving
//             sustained improvements in plant performance and profitability.
//           </h5>
//         </div>
//       </div>
//     </>
//   );
// };

const OurMission = () => {
  return (
    <div id="mission" className="w-full min-h-screen justify-center flex flex-col max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-theme-foreground-500">Our Mission:</span> Empowering the Cement Industry through Transformative Technology
          </h1>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl">
            In {"today's"} rapidly evolving technological landscape, the cement manufacturing industry is poised for growth
            through innovative solutions. Our mission is to deliver cutting-edge technological solutions that empower
            businesses to efficiently manage impairments, continuously monitor and analyze day-to-day operations,
            driving sustained improvements in plant performance and profitability.
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Unlocking New Levels of Efficiency</h2>
            <p className="mt-2 text-muted-foreground">
              By leveraging the latest advancements in technology, we aim to provide the cement industry with the tools
              and insights needed to optimize their operations, reduce costs, and increase their overall
              competitiveness.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Driving Sustained Improvements</h2>
            <p className="mt-2 text-muted-foreground">
              Our solutions will enable cement manufacturers to stay ahead of the curve, making data-driven decisions
              that translate into tangible business results.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Trusted Partner for Success</h2>
            <p className="mt-2 text-muted-foreground">
              Through our unwavering commitment to innovation and customer success, we strive to be the trusted partner
              of choice for cement producers seeking to unlock new levels of efficiency, productivity, and profitability
              in their operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
