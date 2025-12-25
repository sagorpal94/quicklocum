import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Card, CardContent} from "@/components/ui/card"
import {
    Bluetooth as Tooth,
    Pill,
    Heart,
    Stethoscope,
    ChevronRight,
    Check,
    Trash2,
    FileText,
    ArrowLeft,
} from "lucide-react"

const contractTypes = [
    {id: "general-temp", title: "General Dentistry", buttonText: "Temporary Contract", category: "dental"},
    {id: "dental-perm", title: "Dental", buttonText: "Permanent Staffing Contract", category: "dental"},
    {id: "specialty", title: "Specialty Dentistry", buttonText: "Permanent and Temporary", category: "dental"},
    {id: "pharmacy-temp", title: "Retail Pharmacy", buttonText: "Temporary Contract", category: "pharmacy"},
    {id: "pharmacy-perm", title: "Hospital Pharmacy", buttonText: "Permanent Contract", category: "pharmacy"},
]

const categories = [
    {id: "dental", name: "Dental Care", icon: Tooth, count: 3},
    {id: "pharmacy", name: "Pharmacy", icon: Pill, count: 2},
    {id: "nursing", name: "Nursing & Home Care", icon: Heart, count: 0},
    {id: "medicine", name: "General Medicine", icon: Stethoscope, count: 0},
]

function CreateContract() {
    const [currentStep, setCurrentStep] = useState(1)

    const [selectedCategory, setSelectedCategory] = useState("dental")
    const [selectedContractType, setSelectedContractType] = useState(null)

    const handleContractTypeSelect = (typeId) => {
        setSelectedContractType(typeId)
        // Move to next step after selection
        setTimeout(() => setCurrentStep(2), 300)
    }

    const filteredContracts = contractTypes.filter((contract) => contract.category === selectedCategory)

    return (<div className="h-[calc(100vh-84px)] relative">

        {/* Step Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Step 1 */}
            <button
                onClick={() => setCurrentStep(1)}
                className={`relative py-3 px-4 gap-3 rounded-xl border-2 transition-all duration-200
                                          ${currentStep === 1 ? "border-[#2D8FE3] bg-white shadow-sm" : currentStep > 1 ? "border-green-500 bg-white" : "border-gray-200 bg-white"}
                                          hover:shadow-md
                                        `}
            >
                <div className="flex items-center gap-4">
                    <div
                        className={` flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center text-sm font-semibold
                                ${currentStep === 1 ? "bg-blue-100 text-blue-600" : currentStep > 1 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}
                              `}
                    >
                        {currentStep > 1 ? <Check className="h-5 w-5"/> : "1"}
                    </div>
                    <div className="flex-1 text-left">
                        <h3 className="font-semibold text-gray-900">Select Contract Type</h3>
                        <p className="text-sm text-gray-500 ">Choose your contract category</p>
                    </div>
                    {currentStep === 1 && (<div className="absolute right-6 top-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"/>
                    </div>)}
                </div>
            </button>

            {/* Step 2 */}
            <button
                onClick={() => currentStep > 1 && setCurrentStep(2)}
                disabled={currentStep < 2}
                className={`relative py-3 px-4 rounded-xl border-2 border-[#E5E7EB] transition-all duration-200
                          ${currentStep === 2 ? "border-blue-500 bg-white shadow-sm" : currentStep > 2 ? "border-green-500 bg-white" : "border-gray-200 bg-gray-50"}
                          ${currentStep >= 2 ? "hover:shadow-md cursor-pointer" : "cursor-not-allowed"}
                        `}
            >
                <div className="flex items-center gap-4">
                    <div
                        className={`flex-shrink-0 w-9 h-9 border border-[#BDD7ED] rounded-md flex items-center justify-center text-sm font-semibold
                                ${currentStep === 2 ? "bg-blue-100 text-blue-600" : currentStep > 2 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}
                              `}
                    >
                        {currentStep > 2 ? <Check className="h-5 w-5"/> : "2"}
                    </div>
                    <div className="flex-1 text-left">
                        <h3 className={`font-normal text-base ${currentStep >= 2 ? "text-gray-900" : "text-[#2A394B]"}`}>
                            Contract Details
                        </h3>
                        <p className={`text-xs text-[#9CA3AF]  ${currentStep >= 2 ? "text-gray-500" : "text-gray-400"}`}>
                            Fill in contract information
                        </p>
                    </div>
                    {currentStep === 2 && (<div className="absolute right-6 top-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"/>
                    </div>)}
                </div>
            </button>
        </div>

        {/* Step Content */}
        {currentStep === 1 && (
            <div className="space-y-6 mt-5">
                {/* Category Tabs */}
                <div className="flex items-center justify-center">
                    <div
                        className="inline-flex items-center gap-2 p-1 bg-white rounded-lg border border-gray-200 shadow-sm overflow-x-auto scrollbar-hide">
                        {categories.map((category) => {
                            const Icon = category.icon
                            const isSelected = selectedCategory === category.id

                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`
                        flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap
                        transition-all duration-200
                        ${
                                        isSelected
                                            ? "bg-blue-50 text-blue-600 border border-blue-200"
                                            : "text-gray-600 hover:bg-gray-50"
                                    }
                      `}
                                >
                                    <Icon className="h-4 w-4"/>
                                    {category.name}
                                    {category.count > 0 && (
                                        <Badge
                                            variant="secondary"
                                            className={`
                          ml-1 ${isSelected ? "bg-blue-100 text-blue-700" : ""}
                        `}
                                        >
                                            {category.count}
                                        </Badge>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Contract Type Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredContracts.map((contract) => (
                        <Card
                            key={contract.id}
                            className={`
                    relative overflow-hidden transition-all duration-200 cursor-pointer
                    hover:shadow-lg hover:-translate-y-1   rounded-xl border border-[#BDD7ED] py-0
                    ${
                                selectedContractType === contract.id
                                    ? "ring-2 ring-blue-500 bg-blue-50"
                                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                            }
                  `}
                            onClick={() => handleContractTypeSelect(contract.id)}
                        >
                            <CardContent
                                className="p-8 flex flex-col items-center justify-center min-h-[300px] space-y-6 bg-gradient-to-b from-[#F3F9FE] to-[#EAF5FE] backdrop-blur-[8px]">

                                <h3 className="text-[#2A394B] font-light text-[32px] leading-none tracking-[0.005em] text-center">{contract.title}</h3>

                                <div className="flex items-center gap-2">
                                    <Button
                                        variant={selectedContractType === contract.id ? "ghost" : "outline"}
                                        className="flex items-center gap-[6px] px-5 py-3 rounded-[8px] border border-[#BDD7ED] bg-[#FBFBFB] text-[#374151]"
                                    >
                                        {contract.buttonText}
                                    </Button>

                                    <Button
                                        variant={selectedContractType === contract.id ? "ghost" : "outline"}
                                        className="flex items-center justify-center gap-[6px] rounded-[8px] border border-[#BDD7ED] bg-[#FBFBFB]"
                                    >
                                        <ChevronRight
                                            className="text-[#2A394B] h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                    </Button>
                                </div>

                                {selectedContractType === contract.id && (
                                    <div className="absolute top-4 right-4">
                                        <div
                                            className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                            <Check className="h-5 w-5 text-white"/>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredContracts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No contracts available in this category</p>
                    </div>
                )}
            </div>
        )}

        {currentStep === 2 && (
            <div className="bg-white rounded-lg border border-gray-200 p-8 mt-5">
                <div className="text-center py-12">
                    <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4"/>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Contract Details Form</h3>
                    <p className="text-gray-500">Form fields will be added here</p>
                </div>
            </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-6">
            <div className="flex items-center gap-2">
                <Button variant="outline" size="lg" className="gap-2 bg-[#FCF1F1] border border-[#F7B5C6]">
                    <Trash2 className="h-4 w-4"/>
                    {/*<span className="hidden sm:inline">Delete</span>*/}
                </Button>

                <Button variant="outline" size="lg"
                        className="gap-2 bg-[#FBFBFB] border border-[#E4E7EC] rounded-[8px]">
                    <FileText className="h-4 w-4"/>
                    Save as draft
                </Button>
            </div>

            <div className="flex items-center gap-3">
                {currentStep > 1 && (
                    <Button variant="outline" size="lg" onClick={() => setCurrentStep(currentStep - 1)}>
                        <ArrowLeft className="h-4 w-4 mr-2"/>
                        Back
                    </Button>
                )}

                <Button
                    size="lg"
                    onClick={() => currentStep < 2 && setCurrentStep(currentStep + 1)}
                    disabled={!selectedContractType}
                    className="min-w-[100px]"
                >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2"/>
                </Button>
            </div>
        </div>

    </div>)
}

export default CreateContract;