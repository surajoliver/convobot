import { useForm } from "@inertiajs/react";

export default function CreateMessage({ chat_id }) {
    const { data, setData, post, errors, reset, processing } = useForm({
        body: "",
        requestor: "User",
        chat_id: chat_id,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("messages.store"), { onSuccess: () => reset() });
    };

    return (
        <form onSubmit={submit} className="mt-4 py-4">
            <div className="flex  items-between group group-hover:border-purple-900">
                <textarea
                    type="text"
                    value={data.body}
                    onChange={(e) => setData("body", e.target.value)}
                    placeholder="Do you have any questions?"
                    className="w-full   rounded-l-md shadow-sm bg-purple-200 border-purple-300 focus:ring-purple-500"
                />
                <button
                    type="submit"
                    disabled={processing}
                    className={`bg-purple-700  px-4 py-2 text-white font-semibold rounded-r-md shadow-sm hover:bg-purple-900 border-purple-700 transition-colors duration-300 ease tracking-wide uppercase ${
                        processing && "opacity-25 cursor-progress"
                    }`}
                >
                    Post
                </button>
            </div>
            <p className="text-red-500 text-xs">{errors.body}</p>
        </form>
    );
}
