import { useForm } from "@inertiajs/react";
export default function CreateChat({ chat, onSubmit }) {
    const { data, setData, post } = useForm({
        title: "",
    });
    function submit(e) {
        e.preventDefault();
        chat = post(route("chats.store"));
        console.log(chat);
        onSubmit(chat);
    }
    return (
        <div className="mt-6">
            <p className="text-gray-600 text-sm italic mb-4">
                This page is used for starting a new chat on a new topic
            </p>
            <form className="w-full flex items-between" onSubmit={submit}>
                <input
                    type="text"
                    className="flex-1 border border-gray-300 focus:border   -purple-700 rounded-l-md shadow-sm"
                    placeholder="Start a new chat"
                    onChange={(e) => {
                        e.preventDefault();
                        setData("title", e.target.value);
                    }}
                />
                <button
                    className="px-2 py-1 bg-purple-700 hover:bg-purple-900 text-white rounded-r-md shadow-sm text-sm"
                    type="submit"
                >
                    Start New Chat
                </button>
            </form>
        </div>
    );
}
