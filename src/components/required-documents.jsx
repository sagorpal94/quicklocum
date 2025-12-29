import {useState} from "react";
import {CloudUpload, Download, Edit, FileText, Upload} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";

export default function RequiredDocuments() {
    const [documents, setDocuments] = useState([
        {id: 1, name: "Sample Document 01", size: "12 MB"},
        {id: 2, name: "Sample Document 01", size: "12 MB"},
        {id: 3, name: "Sample Document 01", size: "12 MB"},
    ])
    return (
        <div className="space-y-4">
            {/* Required Documents List */}
            <div>
                <h2 className="mb-4 text-sm font-bold text-[#194185]">Required Documents</h2>
                <div className="space-y-3">
                    {documents.map((doc) => (
                        <div
                            key={doc.id}
                            className="flex flex-col items-start justify-between gap-4 rounded-xl bg-[#F3F9FE] border border-[#EAF5FE] p-4 sm:flex-row sm:items-center"
                        >
                            <div className="flex items-center gap-3">
                                {/* PDF Icon */}
                                <div
                                    className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-red-500 text-white">
                                    <FileText className="h-5 w-5"/>
                                    <span className="text-xs font-semibold">PDF</span>
                                </div>
                                <div>
                                    <h3 className="font-medium text-[#374151]">{doc.name}</h3>
                                    <p className="text-sm text-[#374151]">{doc.size}</p>
                                </div>
                            </div>
                            <div className="flex w-full gap-2 sm:w-auto">
                                <button
                                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#DBEEFF] px-4 py-2 text-sm font-medium text-[#2A394B] transition-colors hover:bg-blue-200 sm:flex-initial">
                                    <Download className="h-4 w-4"/>
                                    Download
                                </button>
                                <button
                                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#2D8FE3] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 sm:flex-initial">
                                    <Edit className="h-4 w-4"/>
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Upload File Section */}
            <div>
                <h2 className="mb-4 text-sm font-bold text-[#194185]">Upload File</h2>
                <div className="rounded-lg border-2 border-dashed border-[#DBEEFF] bg-white p-8 text-center transition-colors hover:border-blue-400 hover:bg-blue-50">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ">
                        <CloudUpload className="h-8 w-8 text-[#2A394B]" />
                    </div>
                    <h3 className="mb-2 text-xl font-medium text-[#374151]">Choose a file or drag & drop it here</h3>
                    <p className="mb-4 text-sm text-[#374151]">JPEG, PNG, PDG, and MP4 formats, up to 50MB</p>
                    <button className="rounded-lg bg-blue-100 px-6 py-2 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-200">
                        Browse File
                    </button>
                </div>
            </div>

            {/* Edit Details Button */}
            <Button variant="secondary" type="submit"
                    className="bg-[#216CD2] hover:bg-[#216CD2] text-white !cursor-pointer">
                Edit Details
            </Button>
        </div>
    )
}