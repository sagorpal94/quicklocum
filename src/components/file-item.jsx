import {ImageIcon, PlayCircle,X, FileText} from "lucide-react";
import {Progress} from "@/components/ui/progress.jsx";

export default function FileItem({file}) {
    // Determine Icon based on type
    const getIcon = () => {
        switch (file.type) {
            case "image":
                return <ImageIcon className="h-5 w-5 text-blue-600" fill="currentColor" fillOpacity={0.2}/>;
            case "doc":
                return <FileText className="h-5 w-5 text-blue-600" fill="currentColor" fillOpacity={0.2}/>;
            case "video":
                return <PlayCircle className="h-5 w-5 text-blue-600" fill="currentColor" fillOpacity={0.2}/>;
            default:
                return <FileText className="h-5 w-5 text-slate-400"/>;
        }
    };

    return (
        <div
            className="relative flex flex-col gap-2 rounded-lg bg-[#F8FAFC] p-3 border border-transparent hover:border-slate-200 transition-all">

            {/* Top Row: Icon | Name | Actions */}
            <div className="flex items-center gap-3 w-full">
                {/* File Icon */}
                <div className="shrink-0">
                    {getIcon()}
                </div>

                {/* File Details (Name & Preview Link) */}
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                      <span className="truncate text-sm font-medium text-slate-700">
                        {file.name}
                      </span>

                    {/* Show 'Preview' only if completed */}
                    {file.status === "completed" && (
                        <>
                            <span className="text-slate-300">•</span>
                            <button className="text-xs font-medium text-blue-600 hover:underline">
                                Preview
                            </button>
                        </>
                    )}
                </div>

                {/* Right Side: Size & Close */}
                <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-slate-400">{file.size}</span>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                        <X className="h-4 w-4"/>
                    </button>
                </div>
            </div>

            {/* Bottom Row: Progress Bar (Only if uploading) */}
            {file.status === "uploading" && (
                <div className="w-full pl-8 pr-7"> {/* Indented to align with text */}
                    <Progress value={file.progress} className="h-1.5 w-full bg-slate-200"
                              indicatorClassName="bg-blue-600"/>
                </div>
            )}

        </div>
    );
}