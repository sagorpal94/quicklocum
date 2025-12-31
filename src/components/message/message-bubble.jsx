import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import {FileText, Image as ImageIcon} from "lucide-react";
import React from "react";

export default function MessageBubble({msg}) {
    const isMe = msg.sender === "me";
    if (msg.type === "file") {
        const isPdf = msg.fileType === "pdf";
        return (
            <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start flex-row gap-2'} mb-6`}>
                <div className="flex items-center gap-2 mb-1">
                    {!isMe &&
                        <Avatar className="w-8 h-8"><AvatarImage
                            src="https://avatar.iran.liara.run/public/49"/><AvatarFallback>PW</AvatarFallback></Avatar>}

                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs text-slate-400">{msg.name} </p>
                        <p className="text-xs text-slate-400 ml-auto">{msg.time}</p>
                    </div>
                    <div
                        className={`px-[14px] py-[10px] rounded-xl border bg-white shadow-sm flex items-center gap-3 w-full max-w-sm ${isMe ? 'mr-0 rounded-tr-none rounded-tl rounded-br-lg rounded-bl-lg' : ' border-[#E4E7EC] rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-md'}`}>
                        <div
                            className={`w-10 h-10 rounded flex items-center justify-center ${isPdf ? 'bg-red-50 text-red-500' : 'bg-purple-50 text-purple-500'}`}>
                            {isPdf ? <FileText size={20}/> : <ImageIcon size={20}/>}
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-slate-800">{msg.fileName}</p>
                            <p className="text-xs text-slate-500">{msg.fileSize}</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
    if (msg.type === "typing") {
        return (
            <div className="flex items-start mb-6 gap-2">
                <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8"><AvatarImage
                        src="https://avatar.iran.liara.run/public/49"/><AvatarFallback>PW</AvatarFallback></Avatar>
                </div>

                <div>
                    <p className="text-xs text-slate-400 mb-1">{msg.name}</p>
                    <div
                        className="flex items-center justify-center gap-2 p-[10px] opacity-100 border  border-[#E4E7EC] rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-md bg-[#F9FAFB]">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start flex-row gap-2'} mb-6`}>
            <div className={` mb-1 ${isMe ? 'flex-row-reverse' : ''}`}>
                {!isMe &&
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://avatar.iran.liara.run/public/49"/>
                        <AvatarFallback>PW</AvatarFallback>
                    </Avatar>
                }

            </div>
            <div>
                <div className="flex justify-between mb-1">
                    <p className="text-xs text-slate-400">{msg.time}</p>
                    <p className="text-xs text-slate-400">{msg.name}</p>
                </div>
                <div
                    className={`relative px-5 py-3 text-sm max-w-md shadow-sm ${isMe ? 'bg-[#2D8FE3] text-white rounded-tr-none rounded-tl rounded-br-lg rounded-bl-lg' : ' border  text-[#374151]  rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-md bg-[#F9FAFB]'}`}>
                    {msg.content}
                </div>
            </div>
        </div>
    );
};