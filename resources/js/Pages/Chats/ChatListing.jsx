import { Link, router } from "@inertiajs/react";
import React from "react";
export default function ChatListing({ chats }) {
    return (
        <ul className="py-6">
            {chats &&
                chats.map((chat) => {
                    return (
                        <Link
                            key={chat.id}
                            className="px-4 py-1 text-purple-800 hover:underline cursor-pointer inline-block w-full text-sm italic hover:bg-black/10 "
                            onClick={(e) => {
                                e.preventDefault();
                                //onSelectChat(chat);
                                const url = "/chats/" + chat.id;
                                router.get(url);
                            }}
                            // (e) => {
                            //     e.preventDefault();
                            //     selectChat(chat.id);
                            // }
                        >
                            {chat.title}
                        </Link>
                    );
                })}
        </ul>
    );
}
