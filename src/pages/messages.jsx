import React, {useState} from 'react';
import {
    Search,
    Plus,
    Paperclip,
    Send,
    ChevronLeft,
    Headphones,
} from 'lucide-react';
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import MessageBubble from "@/components/message/message-bubble.jsx";
import SharedContractsSheet from "@/components/message/shared-contracts-sheet.jsx";

const CONTACTS = [
    {
        id: 1,
        name: "Super Admin",
        role: "Support Team",
        avatar: "/api/placeholder/40/40",
        lastMessage: "",
        time: "6.48 pm",
        online: true,
        category: "support" // Used for filtering
    },
    {
        id: 2,
        name: "headhunter 1",
        role: "headhunter 1",
        avatar: "https://avatar.iran.liara.run/public/49",
        lastMessage: "Hi there.....",
        time: "6.48 pm",
        online: true,
        category: "contacts"
    },
    {
        id: 3,
        name: "Dr. Sarah Smith",
        role: "Cardiologist",
        avatar: "https://avatar.iran.liara.run/public/49",
        lastMessage: "Contract signed.",
        time: "Yesterday",
        online: false,
        category: "contacts"
    },
    {
        id: 4,
        name: "Billing Support",
        role: "Finance Team",
        avatar: "https://avatar.iran.liara.run/public/49",
        lastMessage: "Invoice #009 updated",
        time: "Mon",
        online: true,
        category: "support"
    }
];

const MESSAGES = [
    {
        id: 1,
        sender: "me",
        name: "Peter, Williams",
        time: "Thursday 11:44am",
        type: "text",
        content: "Thanks! Can I use this on sale items too?"
    },
    {
        id: 2,
        sender: "other",
        name: "Peter, Williams",
        time: "Thursday 11:44am",
        type: "text",
        content: "Thanks! Can I use this on sale items too?"
    },
    {id: 3, type: "separator", content: "Today"},
    {
        id: 4,
        sender: "me",
        name: "Peter, Williams",
        time: "Friday 2:20pm",
        type: "file",
        fileName: "Tech design requirements.pdf",
        fileSize: "200 KB",
        fileType: "pdf"
    },
    {
        id: 5,
        sender: "other",
        name: "Peter, Williams",
        time: "Friday 2:20pm",
        type: "file",
        fileName: "Latest design screenshot.jpg",
        fileSize: "1.2 MB",
        fileType: "jpg"
    },
    {id: 6, sender: "other", name: "Peter, Williams", time: "", type: "typing"}
];


export default function MessagesPage() {
    const [selectedChat, setSelectedChat] = useState(2);
    const [activeTab, setActiveTab] = useState("all");
    const [open, setOpen] = useState(false);

    // Filter Logic
    const filteredContacts = CONTACTS.filter(contact => {
        if (activeTab === "all") return true;
        return contact.category === activeTab;
    });

    return (
        <>
            <div className="flex h-[calc(100vh-49px)] w-full bg-[FBFBFB] overflow-hidden font-sans text-slate-900">
                <div
                    className={`w-full lg:w-72 bg-[#FBFBFB] pl-4 pt-2 pr-2 border-r border-[#E5E7EB] flex flex-col ${selectedChat ? 'hidden lg:flex' : 'flex'}`}>

                    {/* Sidebar Header */}
                    <div className=" border-b border-slate-100 space-y-2">

                        {/* 1. SHADCN TABS IMPLEMENTATION */}
                        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                            <TabsList className="grid w-full grid-cols-3 bg-white h-10 p-1 border">
                                <TabsTrigger value="all"
                                             className="!shadow-none cursor-pointer border-1 data-[state=active]:bg-[#EAF5FE] data-[state=active]:border-[#EAF5FE]">All</TabsTrigger>
                                <TabsTrigger value="support"
                                             className="!shadow-none cursor-pointer border-1 data-[state=active]:bg-[#EAF5FE] data-[state=active]:border-[#EAF5FE]">Support</TabsTrigger>
                                <TabsTrigger value="contacts"
                                             className="!shadow-none cursor-pointer border-1 data-[state=active]:bg-[#EAF5FE] data-[state=active]:border-[#EAF5FE]">Contacts</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <div className="flex gap-2 items-center justify-between border-y py-2 border-[#E5E7EB]">
                            <Button variant="outline"
                                    className="w-52 flex justify-start text-slate-600 gap-2 h-10 border-slate-200">
                                <div className="border border-slate-300 rounded-full p-0.5"><Plus size={12}/></div>
                                New Conversation
                            </Button>
                            <Button variant="outline" size="icon"
                                    className="w-11 h-10 rounded-xl shrink-0 border-[#E5E7EB] bg-[#FBFBFB]">
                                <Search size={18} className="text-[#2A394B]"/>
                            </Button>
                        </div>

                    </div>

                    {/* Contact List */}
                    <div className="flex-1 overflow-y-auto">
                        {filteredContacts.length === 0 ? (
                            <div className="p-8 text-center text-sm">No results found</div>
                        ) : (
                            filteredContacts.map((contact) => (
                                <div
                                    key={contact.id}
                                    onClick={() => setSelectedChat(contact.id)}
                                    className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-50 transition-colors mt-1 border-l-4 ${selectedChat === contact.id ? 'border-blue-500 bg-blue-50/50' : 'border-transparent'}`}
                                >
                                    <div className="relative">
                                        <Avatar className="w-10 h-10 rounded-sm">
                                            {contact.category === 'support' ? (
                                                <div
                                                    className="bg-blue-50 text-blue-500 w-full h-full flex items-center justify-center">
                                                    <Headphones size={20}/>
                                                </div>
                                            ) : (
                                                <AvatarImage src={contact.avatar}/>
                                            )}
                                            {/*<AvatarFallback>{contact.name.substring(0,2)}</AvatarFallback>*/}
                                        </Avatar>
                                        {contact.online && (
                                            <span
                                                className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <h4 className="font-semibold text-sm text-slate-900 truncate">{contact.name}</h4>
                                            <span className="text-xs text-slate-400">{contact.time}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-xs text-slate-500 truncate">{contact.role}</p>
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        </div>
                                        {contact.lastMessage &&
                                            <p className="text-xs text-slate-400 truncate mt-1">{contact.lastMessage}</p>}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className={`flex-1 flex flex-col h-full relative ${!selectedChat ? 'hidden lg:flex' : 'flex'}`}>

                    <div
                        className="h-16 p-4 border-b border-[#E4E7EC] bg-[#F9FAFB] flex items-center justify-between shrink-0 z-10">
                        <div className="flex items-center gap-3">
                            <button className="lg:hidden text-slate-500 mr-2" onClick={() => setSelectedChat(null)}>
                                <ChevronLeft size={24}/>
                            </button>
                            <div className="relative">
                                <Avatar className="rounded-md border-[1.6px] border-[#BDD7ED]">
                                    <AvatarImage src="https://avatar.iran.liara.run/public/49"/>
                                    <AvatarFallback>HH</AvatarFallback>
                                </Avatar>
                                <span
                                    className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="font-medium text-[#2A394B] text-sm">Head Hunter</h3>
                                <p className="text-[13px] text-[#9CA3AF]">headhunter 1</p>
                            </div>
                        </div>

                        <Button variant="secondary"
                                onClick={() => setOpen(true)}
                                className="bg-[#EAF5FE] hover:bg-[#EAF5FE] text-base px-2 py-3 text-[#2D8FE3] hover:text-[#2D8FE3]  border-[#BDD7ED] h-9 gap-2 items-center">
                            Show Shared Contracts
                            <span
                                className="bg-[#FBFBFB] text-[#374151] text-[10px] font-medium px-2 py-[3px] rounded-lg border border-[#BDD7ED]">3</span>
                        </Button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 lg:p-6 !pb-24 bg-[#F3F9FE]">
                        <div className="flex items-center justify-center my-6">
                            <div className="h-px bg-slate-200 flex-1"></div>
                            <span
                                className="px-4 text-xs font-medium text-slate-400 uppercase tracking-wide">Today</span>
                            <div className="h-px bg-slate-200 flex-1"></div>
                        </div>
                        {MESSAGES.map((msg) => (
                            msg.type === 'separator' ? null : <MessageBubble key={msg.id} msg={msg}/>
                        ))}
                    </div>

                    {/* Input */}
                    <div
                        className="absolute bottom-0 left-0 w-full z-20 p-4 bg-white border-t border-slate-200 shrink-0">
                        <div className="flex items-center gap-3 p-1">
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
                                <Paperclip size={20}/>
                            </Button>
                            <div className="flex-1 relative">
                                <Input placeholder="Start typing"
                                       className="pr-4 py-6 border-slate-200 bg-slate-50 focus:bg-white transition-colors"/>
                            </div>
                            <Button
                                className="h-10 w-10 rounded-lg bg-blue-500 hover:bg-blue-600 shadow-md shadow-blue-200">
                                <Send size={18} className="ml-0.5"/>
                            </Button>
                        </div>
                    </div>
                </div>


            </div>

            {open && <SharedContractsSheet open={open} setOpen={setOpen}/>}
        </>
    );
}


