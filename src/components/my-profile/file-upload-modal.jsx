import React from 'react';
import {CloudUpload} from 'lucide-react';
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const FileUploadModal = ({isOpen, setIsOpen}) => {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[600px] p-6 bg-white">

                <DialogHeader className="space-y-1 text-left">
                    <DialogTitle className="text-[#194185] font-bold text-[14px]">
                        Upload File
                    </DialogTitle>
                    <DialogDescription className="text-[#374151] font-normal text-[14px]">
                        Select and upload the files of your choice
                    </DialogDescription>
                </DialogHeader>

                {/* Upload Area */}
                <div
                    className="mt-2 w-full border-[1.5px] border-dashed border-blue-200 rounded-xl bg-white py-10 px-4 flex flex-col items-center justify-center gap-6">

                    <div className="text-gray-600">
                        <CloudUpload strokeWidth={1.5} className="w-10 h-10 text-[#374151]"/>
                    </div>

                    <div className="space-y-2 text-center">
                        <h3 className="text-gray-900 font-medium text-[20px] leading-[25px]">
                            Choose a file or drag & drop it here
                        </h3>
                        <p className="text-gray-500 font-normal text-[12px] leading-[16px]">
                            JPEG, PNG, PDG, and MP4 formats, up to 50MB
                        </p>
                    </div>

                    <button
                        className="
                w-[106px] h-[44px]
                bg-[#DBEEFF] hover:bg-[#cbe5fe]
                text-[#374151] text-[14px] font-medium
                rounded-lg
                transition-colors
                flex items-center justify-center
              "
                    >
                        Browse File
                    </button>
                </div>

            </DialogContent>
        </Dialog>
    );
};

export default FileUploadModal;

