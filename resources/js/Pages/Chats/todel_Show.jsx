import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";

export default function Show({ auth, chat }) {
    const { data, setData, post, reset, processing } = useForm({
        body: "",
        requestor: "User",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("messages.store", { chat_id: chat.id }), {
            onSuccess: () => reset(),
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg dark:text-gray-200">
                        Ask OpenAI - {chat.title}
                    </h2>
                    <Link
                        href={route("chats.create")}
                        className="dark:text-gray-200 px-2 py-1 border border-gray-500/50 hover:opacity-50"
                    >
                        Start New Chat
                    </Link>
                </div>
            }
        >
            <div className="max-w-2xl mx-auto py-4">
                <form onSubmit={submit} className="flex mb-6 gap-4">
                    <textarea
                        type="text"
                        className="flex-1 bg-gray-800/50 text-gray-300 rounded-md"
                        name="message"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        disabled={processing}
                        placeholder="Enter your query here.."
                    />
                    <button
                        type="submit"
                        className="dark:text-gray-200 dark:bg-gray-500 px-2 py-1 border border-gray-500/50 hover:opacity-50 rounded-md"
                    >
                        Ask Open AI
                    </button>
                </form>

                <div className="flex flex-col space-y-4 py-4">
                    {chat.messages &&
                        chat.messages.map((message) => {
                            return message.requestor === "System" ? (
                                <p
                                    key={message.id}
                                    className="text-white/50 p-2 leading-7"
                                >
                                    {message.body}
                                </p>
                            ) : (
                                <span
                                    key={message.id}
                                    className="ml-12 flex flex-col"
                                >
                                    <span className="bg-gray-300 px-4 py-2 rounded-3xl inilne-block ml-auto">
                                        {message.body}{" "}
                                    </span>
                                </span>
                            );
                        })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
