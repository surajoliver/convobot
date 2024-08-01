import { Link, router } from "@inertiajs/react";

export default function ChatLayout({ user, children }) {
    return (
        <div className="flex flex-col bg-stone-900/20 min-h-screen">
            <header className="bg-purple-200 px-4 py-4  flex justify-between shadow-md ">
                <div className="flex gap-2 items-center">
                    <h1 className="font-black tracking-widest uppercase  ">
                        ConvoBot
                    </h1>
                    <p className="text-xs">You have logged in as {user.name}</p>
                </div>
                <nav className="text-sm flex gap-4">
                    <Link
                        className="inline-block px-2 py-2 text-purple-700 hover:text-purple-900 hover:font-bold font-medium hover:underline underline-offset-4"
                        onClick={(e) => {
                            e.preventDefault();
                            router.get("/chats");
                        }}
                    >
                        New Chat
                    </Link>
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="inline-block px-2 py-2 text-purple-700 hover:text-purple-900 hover:font-bold font-medium hover:underline underline-offset-4"
                    >
                        Logout
                    </Link>
                </nav>
            </header>
            <main className=" w-full mx-auto bg-purple-900/10 flex  flex-1">
                {children}
            </main>
        </div>
    );
}
