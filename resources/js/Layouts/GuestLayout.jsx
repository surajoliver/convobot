import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-purple-300">
            <div>
                <h1 className="text-uppercase-800 font-bold text-lg tracking-widest uppercase">
                    Convobot
                </h1>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white/10  shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
