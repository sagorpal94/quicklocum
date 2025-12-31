import {Badge} from "@/components/ui/badge.jsx";
import {
    Clock,
    User,
} from "lucide-react";
import PositionCard from "@/components/job/position-card.jsx";

export const IndustryContent = ({temporaryPositions, permanentPositions}) => {
    return (
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-6 w-full h-full">
            {/* Left Item: Blue (Temporary) */}
            <div>
                <div className="flex items-center gap-3 pb-2 border-b-[3px] border-[#2D8FE3] text-[#2D8FE3] mb-3">
                    <Clock className="w-6 h-6" strokeWidth={2}/>
                    <span className="text-base whitespace-nowrap">Temporary Positions</span>
                    <Badge
                        variant="outline"
                        className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                    >
                        {temporaryPositions.length}
                    </Badge>
                </div>

                <div className="grid gap-4">
                    {temporaryPositions.length > 0 ? (
                        temporaryPositions.map((position) => (
                            <PositionCard key={position.id} position={position}/>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No temporary positions found.</p>
                    )}
                </div>
            </div>

            {/* Right Item: Orange (Permanent) */}
            <div>
                <div className="flex items-center gap-3 pb-2 border-b-[3px] border-[#F0A33A] text-[#F0A33A] mb-2">
                    <User className="w-6 h-6" strokeWidth={2}/>
                    <span className="text-base whitespace-nowrap">Permanent Positions</span>
                    <Badge
                        variant="outline"
                        className="ml-1 font-medium bg-[#FBFBFB] text-[#374151] text-[12px] border-[#BDD7ED] px-[10px] py-[10px] w-6 h-6 rounded-lg"
                    >
                        {permanentPositions.length}
                    </Badge>
                </div>
                <div className="grid gap-4">
                    {permanentPositions.length > 0 ? (
                        permanentPositions.map((position) => (
                            <PositionCard key={position.id} position={position}/>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No permanent positions found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};