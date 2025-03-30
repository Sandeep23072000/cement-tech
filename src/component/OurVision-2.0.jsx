import Button from "../Shared/Button"


export default function OurVision2() {
    return (
        <section id="vision" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-theme-background-800 to-theme via-theme-foreground-900">
            <div className="container px-4 md:px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Revolutionizing Preventive Maintenance
                    </h2>
                    <p className="text-lg md:text-xl text-theme-background-200">
                        Integrating cutting-edge technology and intelligent solutions to enable proactive maintenance, empower
                        businesses with comprehensive monitoring and analysis, and drive sustainability and efficiency in
                        manufacturing operations.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg">Learn More</Button>
                        <Button size="lg">
                            Contact Us
                        </Button>
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-left">
                        <div className="bg-theme-background-900 rounded-full p-3 inline-block mb-4">
                            <PowerIcon className="w-6 h-6 text-theme-background-100" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">Intelligent Solutions</h3>
                        <p className="text-muted-foreground">
                            Leverage cutting-edge technology and smart algorithms to enable proactive maintenance and ensure seamless
                            operations.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-left">
                        <div className="bg-theme-background-200 rounded-full p-3 inline-block mb-4">
                            <InfoIcon className="w-6 h-6 text-secondary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">Comprehensive Monitoring</h3>
                        <p className="text-muted-foreground">
                            Empower businesses with real-time monitoring, data analysis, and proactive recommendations to prevent
                            potential threats.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-left">
                        <div className="bg-theme-foreground-500 rounded-full p-3 inline-block mb-4">
                            <LeafIcon className="w-6 h-6 text-theme-foreground-50" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">Sustainable Operations</h3>
                        <p className="text-muted-foreground">
                            Optimize manufacturing processes and reduce environmental impact through data-driven insights and smart
                            solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function InfoIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    )
}


function LeafIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}


function PowerIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2v10" />
            <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
        </svg>
    )
}