import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="">
                <div className="relative min-h-screen bg-purple-300 w-full">
                    <header className="bg-purple-800 text-white flex justify-between px-8 py-4">
                        <h1 className="font-bold text-sm uppercase tracking-wider">
                            Convobot
                        </h1>
                        <nav className="-mx-3 flex flex-1 justify-end text-sm ">
                            {auth.user ? (
                                <Link href={route("chats.index")} className="">
                                    Dashboard
                                </Link>
                            ) : (
                                <div className="space-x-2">
                                    <Link
                                        href={route("login")}
                                        className="inline-block"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="inline-block"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </nav>
                    </header>

                    <main>
                        <section className="flex justify-center items-center h-96 w-full flex-col">
                            <h1 className="text-4xl font-bold text-gray-800 ">
                                Welcome to Convo Bot
                            </h1>
                            <p className="text-gray-600 text-sm mt-3">
                                This is a tool for interacting with open ai
                            </p>
                        </section>
                    </main>

                    <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                        Laravel v{laravelVersion} (PHP v{phpVersion})
                    </footer>
                </div>
            </div>
        </>
    );
}
