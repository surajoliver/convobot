// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import ChatLayout from "@/Layouts/ChatLayout";
import CreateChat from "./CreateChat";
import ChatListing from "./ChatListing";

export default function ({ auth, chats }) {
    return (
        <ChatLayout user={auth.user}>
            <aside className="bg-white/20 w-96">
                <ChatListing chats={chats} />
            </aside>
            <main className="grow w-full  p-4">
                <CreateChat
                    onSubmit={(chat) => {
                        console.log("from parent");
                        console.log(chat);
                    }}
                />
            </main>
        </ChatLayout>
    );
}
