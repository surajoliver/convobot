import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function ({ auth, chats }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg dark:text-gray-200">All Chats</h2>
                    <Link href={route('chats.create')} className="dark:text-gray-200 px-2 py-1 border border-gray-500/50 hover:opacity-50">New Chat</Link>
                </div>
                
            }
            //header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >   <div className="max-w-4xl mx-auto">
            <table className="w-full">
                <tbody className="dark:text-gray-200">
                {chats && chats.map((chat) => {
                    return (
                        <tr key={chat.id} className="border-b border-gray-500/10">
                            <td className="px-3 py-2">{chat.id}</td>
                            <td className="px-3 py-2"><Link href={route('chats.show', chat) }>{chat.title}</Link></td>
                            <td className="px-3 py-2 text-xs text-red-500/50"><Link method="delete" as="button" href={route('chats.destroy', chat.id)}>Delete</Link></td>
                        </tr>
                    )
                })}
                </tbody>
                </table>
            </div>

        </AuthenticatedLayout>
    );
}