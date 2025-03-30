// const AboutProduct = () => {
//   return (
//     <>
//       <div>
//         <div className="py-16 max-w-5xl mx-auto">
//           <h1 className="text-4xl font-bold text-center border-b-2 pb-2">About Products</h1>
//           <h4 className="font-medium text-2xl text-center py-2">MIRROR has 3 parts</h4>
//           <ol className="list-disc text-xl sm:px-0 px-2">
//             <li>
//               <b>MI</b>- In this we manages any loss due to missing in inspection,
//               planning or execution.
//             </li>
//             <li>
//               <b>RR</b>- In this instantly we can review plant reports like
//               inspection, planning or execution compliances and plant equipments
//               abnormalities.
//             </li>
//             <li>
//               <b>OR</b>- In this we can get equipment history, maintenance cost, and
//               can compare plant stoppages with equipment health score.
//             </li>
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };

const AboutProduct = () => {
    return (
        <>
            <section id="about" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-theme-foreground-500 text-white px-3 py-1 text-sm">About Our Product</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Unlock the Power of MI, RR, and OR
                        </h2>
                        <p className="max-w-[700px] text-theme-background-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our innovative product combines three powerful modules to revolutionize your plant operations:
                        </p>
                    </div>
                    <div className="grid gap-6">
                        <div className="grid gap-2 rounded-lg bg-background p-4 shadow-sm">
                            <h3 className="text-lg font-bold">MI: Machine Impairments</h3>
                            <p className="text-theme-background-900">
                                It prevents any possible loss due to missing in inspection, planning or execution
                            </p>
                        </div>
                        <div className="grid gap-2 rounded-lg bg-background p-4 shadow-sm">
                            <h3 className="text-lg font-bold">RR: Review Reporting</h3>
                            <p className="text-theme-background-900">
                                Instantly reviews plant reports like inspection, planning or execution compliances and plant equipment
                                abnormalities.
                            </p>
                        </div>
                        <div className="grid gap-2 rounded-lg bg-background p-4 shadow-sm">
                            <h3 className="text-lg font-bold">OR: Organize Records</h3>
                            <p className="text-theme-background-900">
                                Provides equipment history, maintenance cost, and compares plant stoppages with equipment health score.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutProduct;
