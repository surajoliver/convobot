import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post } = useForm({
        title: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("chats.store"));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-lg dark:text-gray-200">
                    Start A New Chat
                </h2>
            }
        >
            <div className="max-w-2xl mx-auto">
                <form onSubmit={submit} className="flex mt-4 gap-2">
                    <textarea
                        type="text"
                        className="flex-1 bg-gray-800/50 text-gray-300 rounded-md"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        placeholder="Enter topic to chat on.."
                    />
                    <button
                        type="submit"
                        className="dark:text-gray-200 dark:bg-gray-500 px-2 py-1 border border-gray-500/50 hover:opacity-50 rounded-md"
                    >
                        Start A New Chat
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
