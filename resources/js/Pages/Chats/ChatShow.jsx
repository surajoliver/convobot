import ChatLayout from "@/Layouts/ChatLayout";
import ChatListing from "./ChatListing";
import CreateMessage from "./CreateMessage";
import { router } from "@inertiajs/react";

export default function ChatShow({ auth, chats, chat, messages }) {
    const deleteChat = (e) => {
        if (confirm("Are you sure to delete this chat? ")) {
            //router.delete(url, options);
            router.delete(route("chats.destroy", chat.id));
            //to_route("chats.index");
        }
    };
    return (
        <ChatLayout user={auth.user}>
            <aside className="bg-white/20 w-96">
                <ChatListing chats={chats} />
            </aside>
            <main className="grow w-full  p-4 border border-gray-300 rounded-xl ">
                <div className="mt-4 flex justify-between">
                    <h2 className="font-semibold text-lg">{chat.title}</h2>
                    <button
                        onClick={deleteChat}
                        className="text-sm px-3 py-2 font-bold text-red-500  "
                    >
                        Delete
                    </button>
                </div>

                <CreateMessage chat_id={chat.id} />
                <ul className=" mt-6">
                    {messages &&
                        messages.map((message) => {
                            return (
                                <li key={message.id} className=" ">
                                    {message.requestor === "System" ? (
                                        <div className="py-4 px-6 border-t-2 border-gray-400/60 ">
                                            <p className="text-gray-600 whitespace-pre-line font-medium max-w-xl leading-7">
                                                {message.body} --
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="py-4 px-6">
                                            <p className="border border-purple-300 bg-white/20 shadow-lg italic text-gray-500 px-4 py-2 rounded-xl   text-sm ml-auto max-w-sm leading-7">
                                                {message.body}
                                            </p>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                </ul>
            </main>
        </ChatLayout>
    );
}
