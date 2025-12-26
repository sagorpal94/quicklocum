import React, {useState} from "react"
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
    ChevronLeft, CalendarIcon, AlertCircle, Inbox,
} from "lucide-react"
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Alert, AlertDescription} from "@/components/ui/alert.jsx";
import {cn} from "@/lib/utils.js";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {Checkbox} from "@/components/ui/checkbox.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import FileItem from "@/components/file-item.jsx";

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

// Mock Data to replicate the image
const files = [
    {
        id: 1,
        name: "Picture.png",
        size: "5.7MB",
        type: "image",
        status: "completed",
    },
    {
        id: 2,
        name: "Document example.doc",
        size: "5.7MB",
        type: "doc",
        status: "completed",
    },
    {
        id: 3,
        name: "Video.mp4",
        size: "5.7MB",
        type: "video",
        status: "uploading",
        progress: 45, // 45% uploaded
    },
    {
        id: 4,
        name: "Picture.png",
        size: "5.7MB",
        type: "image",
        status: "uploading",
        progress: 5, // Just started
    },
];

function CreateContract() {
    const [currentStep, setCurrentStep] = useState(1)

    const [selectedCategory, setSelectedCategory] = useState("dental")
    const [selectedContractType, setSelectedContractType] = useState(null)
    const [selectedDates, setSelectedDates] = useState([])
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 11))
    const [attachments, setAttachments] = useState([
        {name: "Picture.png", size: "5 MB", type: "image"},
        {name: "Document example.doc", size: "6 MB", type: "document"},
        {name: "Video.mp4", size: "5 MB", type: "video"},
        {name: "Picture.png", size: "5 MB", type: "image"},
    ])

    const [formData, setFormData] = useState({
        facilityName: "",
        streetAddress: "",
        city: "",
        province: "",
        postalCode: "",
        country: "",
        breakIncluded: "",
        experienceLevel: "",
        compensationMode: "",
        bonusIncentives: "",
        fees: "",
        parking: "",
        languages: [],
        software: [],
        jobDescription: "",
        additionalInfo: "",
        professionalCategory: "",
        positions: [],
    })

    const handleContractTypeSelect = (typeId) => {
        setSelectedContractType(typeId)
        setTimeout(() => setCurrentStep(2), 300)
    }

    const getDaysInMonth = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const daysInMonth = lastDay.getDate()
        const startingDayOfWeek = firstDay.getDay()

        return {daysInMonth, startingDayOfWeek}
    }

    const isDateSelected = (date) => {
        return selectedDates.some(
            (d) =>
                d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear(),
        )
    }

    const isDateBlocked = (date) => {
        // Example blocked dates: 17th, 18th
        const day = date.getDate()
        return day === 17 || day === 18
    }

    const toggleDate = (date) => {
        if (isDateBlocked(date)) return

        if (isDateSelected(date)) {
            setSelectedDates(selectedDates.filter((d) => d.getTime() !== date.getTime()))
        } else {
            setSelectedDates([...selectedDates, date])
        }
    }

    const selectAllWeekdays = () => {
        const {daysInMonth} = getDaysInMonth(currentMonth)
        const weekdayDates = []

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
            const dayOfWeek = date.getDay()
            // 1-5 are Monday-Friday
            if (dayOfWeek >= 1 && dayOfWeek <= 5 && !isDateBlocked(date)) {
                weekdayDates.push(date)
            }
        }

        setSelectedDates(weekdayDates)
    }

    const selectEntireMonth = () => {
        const {daysInMonth} = getDaysInMonth(currentMonth)
        const allDates = []

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
            if (!isDateBlocked(date)) {
                allDates.push(date)
            }
        }

        setSelectedDates(allDates)
    }

    const previousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
    }

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
    }

    const handleFileUpload = (e) => {
        // Handle file upload logic
    }

    const removeAttachment = (index) => {
        setAttachments(attachments.filter((_, i) => i !== index))
    }

    const filteredContracts = contractTypes.filter((contract) => contract.category === selectedCategory)

    return (
        <div className={`relative ${currentStep === 1 && "h-[calc(100vh-84px)]"}`}>

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

                                    <div className="flex justify-center flex-wrap items-center gap-2">
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
                <div className="mt-10">

                    <div className="p-0 space-y-6 text-[#6B7280]">
                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                            Location Information
                        </span>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="facilityName">Facility/ Clinic Name</Label>
                                    <Input
                                        id="facilityName"
                                        placeholder="-"
                                        value={formData.facilityName}
                                        onChange={(e) => setFormData({...formData, facilityName: e.target.value})}
                                        className="mt-1.5"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="streetAddress">Street Address</Label>
                                        <Input
                                            id="streetAddress"
                                            placeholder="-"
                                            value={formData.streetAddress}
                                            onChange={(e) => setFormData({...formData, streetAddress: e.target.value})}
                                            className="mt-1.5"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="city">City</Label>
                                        <Input
                                            id="city"
                                            placeholder="-"
                                            value={formData.city}
                                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                                            className="mt-1.5"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <Label htmlFor="province">Province</Label>
                                        <Input
                                            id="province"
                                            placeholder="-"
                                            value={formData.province}
                                            onChange={(e) => setFormData({...formData, province: e.target.value})}
                                            className="mt-1.5"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="postalCode">Postal Code</Label>
                                        <Input
                                            id="postalCode"
                                            placeholder="-"
                                            value={formData.postalCode}
                                            onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                                            className="mt-1.5"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="country">Country</Label>
                                        <Input
                                            id="country"
                                            placeholder="-"
                                            value={formData.country}
                                            onChange={(e) => setFormData({...formData, country: e.target.value})}
                                            className="mt-1.5"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                            Contract Duration
                        </span>
                            <div className="border border-gray-200 rounded-lg p-4">
                                {/* Calendar Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <Button variant="ghost" size="icon" onClick={previousMonth}>
                                        <ChevronLeft className="h-5 w-5"/>
                                    </Button>
                                    <h4 className="font-medium">
                                        {currentMonth.toLocaleDateString("en-US", {month: "long", year: "numeric"})}
                                    </h4>
                                    <Button variant="ghost" size="icon" onClick={nextMonth}>
                                        <ChevronRight className="h-5 w-5"/>
                                    </Button>
                                </div>

                                {/* Calendar Grid */}
                                <div className="grid grid-cols-7 gap-2 mb-4">
                                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                                        <div key={day} className="text-center text-xs font-medium text-gray-400 py-2">
                                            {day}
                                        </div>
                                    ))}

                                    {(() => {
                                        const {daysInMonth, startingDayOfWeek} = getDaysInMonth(currentMonth)
                                        const days = []

                                        // Empty cells for days before month starts
                                        for (let i = 0; i < startingDayOfWeek; i++) {
                                            days.push(<div key={`empty-${i}`}/>)
                                        }

                                        // Days of the month
                                        for (let day = 1; day <= daysInMonth; day++) {
                                            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
                                            const isSelected = isDateSelected(date)
                                            const isBlocked = isDateBlocked(date)

                                            days.push(
                                                <button
                                                    key={day}
                                                    onClick={() => toggleDate(date)}
                                                    disabled={isBlocked}
                                                    className={cn(
                                                        "aspect-auto cursor-pointer h-[30px] rounded-md text-sm font-medium transition-all duration-200",
                                                        isBlocked && "bg-red-500 text-white cursor-not-allowed",
                                                        isSelected && !isBlocked && "bg-blue-100 text-blue-600 border-2 border-blue-500",
                                                        !isSelected && !isBlocked && "hover:bg-gray-100 text-gray-700",
                                                    )}
                                                >
                                                    {day}
                                                </button>,
                                            )
                                        }

                                        return days
                                    })()}
                                </div>

                                {/* Calendar Legend */}
                                <div className="flex flex-wrap items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded border-2 border-blue-500 bg-blue-100"/>
                                        <span className="text-sm text-gray-600">Selected</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded bg-red-500"/>
                                        <span className="text-sm text-gray-600">Holiday (Blocked)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded border border-gray-300 bg-white"/>
                                        <span className="text-sm text-gray-600">Available</span>
                                    </div>
                                </div>

                                {/* Quick Select Buttons */}
                                <div className="flex flex-wrap gap-3 mb-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={selectAllWeekdays}
                                        className="gap-2 bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100"
                                    >
                                        <CalendarIcon className="h-4 w-4"/>
                                        Select All Weekdays
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={selectEntireMonth}
                                        className="gap-2 bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100"
                                    >
                                        <CalendarIcon className="h-4 w-4"/>
                                        Select Entire Month
                                    </Button>
                                </div>

                                {/* Warning Message */}
                                {selectedDates.length === 0 && (
                                    <Alert className="bg-yellow-50 border-yellow-200">
                                        <AlertCircle className="h-4 w-4 text-yellow-600"/>
                                        <AlertDescription className="text-yellow-800">
                                            No dates selected yet. Please add at least one date or date range above.
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </div>
                        </div>

                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                            Work Schedule
                        </span>
                            <>
                                <Label htmlFor="breakIncluded">Break Included</Label>
                                <Select
                                    value={formData.breakIncluded}
                                    onValueChange={(value) => setFormData({...formData, breakIncluded: value})}
                                >
                                    <SelectTrigger id="breakIncluded" className="mt-1.5 w-full md:w-[400px]">
                                        <SelectValue placeholder="-"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                            </>
                        </div>


                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                            Compensation & Requirements
                        </span>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="experienceLevel">
                                            Required Experience Level <span className="text-red-500">*</span>
                                        </Label>
                                        <Select
                                            value={formData.experienceLevel}
                                            onValueChange={(value) => setFormData({
                                                ...formData,
                                                experienceLevel: value
                                            })}
                                        >
                                            <SelectTrigger id="experienceLevel" className="mt-1.5 w-full">
                                                <SelectValue placeholder="-"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="entry">Entry Level</SelectItem>
                                                <SelectItem value="mid">Mid Level</SelectItem>
                                                <SelectItem value="senior">Senior Level</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label htmlFor="compensationMode">
                                            Compensation Mode <span className="text-red-500">*</span>
                                        </Label>
                                        <Select
                                            value={formData.compensationMode}
                                            onValueChange={(value) => setFormData({
                                                ...formData,
                                                compensationMode: value
                                            })}
                                        >
                                            <SelectTrigger id="compensationMode" className="mt-1.5 w-full">
                                                <SelectValue placeholder="-"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="hourly">Hourly</SelectItem>
                                                <SelectItem value="daily">Daily</SelectItem>
                                                <SelectItem value="monthly">Monthly</SelectItem>
                                                <SelectItem value="annual">Annual</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="bonusIncentives">Bonus/Incentives</Label>
                                        <Select
                                            value={formData.bonusIncentives}
                                            onValueChange={(value) => setFormData({
                                                ...formData,
                                                bonusIncentives: value
                                            })}
                                        >
                                            <SelectTrigger id="bonusIncentives" className="mt-1.5 w-full">
                                                <SelectValue placeholder="-"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="yes">Yes</SelectItem>
                                                <SelectItem value="no">No</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label htmlFor="fees">Fees</Label>
                                        <Select value={formData.fees}
                                                onValueChange={(value) => setFormData({...formData, fees: value})}>
                                            <SelectTrigger id="fees" className="mt-1.5 w-full">
                                                <SelectValue placeholder="-"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="included">Included</SelectItem>
                                                <SelectItem value="excluded">Excluded</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                            <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                                Additional Details
                            </span>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="parking">Parking</Label>
                                        <Select
                                            value={formData.parking}
                                            onValueChange={(value) => setFormData({...formData, parking: value})}
                                        >
                                            <SelectTrigger id="parking" className="mt-1.5 w-full">
                                                <SelectValue placeholder="-"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="available">Available</SelectItem>
                                                <SelectItem value="not-available">Not Available</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label>
                                            Languages <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="flex flex-wrap gap-4 mt-3">
                                            {["English", "French", "Spanish"].map((language) => (
                                                <div key={language} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id={language}
                                                        checked={formData.languages.includes(language)}
                                                        onCheckedChange={(checked) => {
                                                            if (checked) {
                                                                setFormData({
                                                                    ...formData,
                                                                    languages: [...formData.languages, language]
                                                                })
                                                            } else {
                                                                setFormData({
                                                                    ...formData,
                                                                    languages: formData.languages.filter((l) => l !== language),
                                                                })
                                                            }
                                                        }}
                                                    />
                                                    <label htmlFor={language}
                                                           className="text-sm font-medium cursor-pointer">
                                                        {language}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Label>
                                        Software <span className="text-red-500">*</span>
                                    </Label>
                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
                                        {[
                                            "ABELdent",
                                            "WINDENT",
                                            "WINDENT",
                                            "AXXIUM X",
                                            "EXCELDENT",
                                            "EXCELDENT",
                                            "AXXIUM R+",
                                            "CONSULT PRO",
                                            "CONSULT PRO",
                                            "AD2000",
                                            "DENTIMAX",
                                            "DENTIMAX",
                                        ].map((software, index) => (
                                            <div key={`${software}-${index}`} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={`${software}-${index}`}
                                                    checked={formData.software.includes(`${software}-${index}`)}
                                                    onCheckedChange={(checked) => {
                                                        if (checked) {
                                                            setFormData({
                                                                ...formData,
                                                                software: [...formData.software, `${software}-${index}`]
                                                            })
                                                        } else {
                                                            setFormData({
                                                                ...formData,
                                                                software: formData.software.filter((s) => s !== `${software}-${index}`),
                                                            })
                                                        }
                                                    }}
                                                />
                                                <label htmlFor={`${software}-${index}`}
                                                       className="text-sm font-medium cursor-pointer">
                                                    {software}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="jobDescription">Detailed Job Description</Label>
                                    <Textarea
                                        id="jobDescription"
                                        value={formData.jobDescription}
                                        onChange={(e) => setFormData({...formData, jobDescription: e.target.value})}
                                        rows={4}
                                        className="mt-1.5 resize-none"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="additionalInfo">Additional Information</Label>
                                    <Textarea
                                        id="additionalInfo"
                                        value={formData.additionalInfo}
                                        onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                                        rows={4}
                                        className="mt-1.5 resize-none"
                                    />
                                </div>

                                <div className="w-full space-y-4">
                                    <Label htmlFor="attachments">Attachments</Label>
                                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <div className="h-full min-h-[250px] lg:min-h-0 w-full">
                                                <div
                                                    className="group h-full w-full rounded-xl border-[2px] border-dashed border-slate-300 bg-transparent hover:bg-slate-50 transition-colors flex flex-col items-center justify-center cursor-pointer p-6"
                                                >
                                                    {/* Icon Container */}
                                                    <div
                                                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-slate-200 transition-colors">
                                                        <Inbox className="h-6 w-6 text-slate-400"/>
                                                    </div>

                                                    {/* Text */}
                                                    <div className="text-center text-sm">
                                                <span
                                                    className="text-blue-600 font-medium hover:underline">Click here</span>
                                                        <span
                                                            className="text-slate-500"> to upload or drop files here</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* --- RIGHT SIDE: File List --- */}
                                        <div className="flex flex-col gap-3">
                                            {files.map((file) => (
                                                <FileItem key={file.id} file={file}/>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                        <div
                            className="relative rounded-[8px] border border-[#E5E7EB] bg-white gap-5 pt-[20px] pr-[16px] pb-[12px] pl-[16px]">
                            <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#9CA3AF]">
                                Position Sought
                            </span>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="professionalCategory">Professional Category</Label>
                                    <Select
                                        value={formData.professionalCategory}
                                        onValueChange={(value) => setFormData({
                                            ...formData,
                                            professionalCategory: value
                                        })}
                                    >
                                        <SelectTrigger id="professionalCategory" className="mt-1.5 w-full">
                                            <SelectValue placeholder="Select category"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="dental">Dental Care</SelectItem>
                                            <SelectItem value="pharmacy">Pharmacy</SelectItem>
                                            <SelectItem value="nursing">Nursing & Home Care</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label>Position Sought</Label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mt-3">
                                        {[
                                            "General Dentist",
                                            "Specialist Dentist",
                                            "Dental Hygienist",
                                            "Dental Assistant",
                                            "Dental Secretary",
                                        ].map((position) => (
                                            <div key={position} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={position}
                                                    checked={formData.positions.includes(position)}
                                                    onCheckedChange={(checked) => {
                                                        if (checked) {
                                                            setFormData({
                                                                ...formData,
                                                                positions: [...formData.positions, position]
                                                            })
                                                        } else {
                                                            setFormData({
                                                                ...formData,
                                                                positions: formData.positions.filter((p) => p !== position),
                                                            })
                                                        }
                                                    }}
                                                />
                                                <label htmlFor={position}
                                                       className="text-sm font-medium cursor-pointer text-[#6B7280]">
                                                    {position}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            )}

            {/* Footer Actions */}
            <div
                className="flex flex-col sm:flex-row gap-2 items-center justify-between py-2 sm:py-5 bg-white mt-auto">

                {/* Left Side: Secondary Actions */}
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                    {/* Delete Button: Icon only on mobile, Icon + Text on desktop */}
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-11 w-1/2 sm:w-auto p-0 sm:px-8 gap-2 bg-[#FCF1F1] border border-[#F7B5C6] shrink-0"
                    >
                        <Trash2 className="h-4 w-4 text-red-500"/>
                        <span className="hidden sm:inline text-red-600">Delete</span>
                    </Button>

                    {/* Save Draft Button: Icon only on mobile, Icon + Text on desktop */}
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-11 w-1/2 sm:w-auto p-0 sm:px-8 gap-2 bg-[#FBFBFB] border border-[#E4E7EC] rounded-[8px] shrink-0"
                    >
                        <FileText className="h-4 w-4 text-gray-600"/>
                        <span className="hidden sm:inline text-gray-700">Save as draft</span>
                    </Button>
                </div>

                {/* Right Side: Navigation */}
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                    {currentStep > 1 && (
                        <Button
                            className="bg-[#FBFBFB] hover:bg-[#FBFBFB] border border-[#E4E7EC] h-11 w-1/2 sm:w-auto p-0 sm:px-6"
                            variant="outline"
                            size="lg"
                            onClick={() => setCurrentStep(currentStep - 1)}
                        >
                            <ChevronLeft className="h-4 w-4 text-gray-600"/>
                            {/* Optional: Add text 'Back' for desktop if needed */}
                            {/* <span className="hidden sm:inline ml-2 text-gray-700">Back</span> */}
                        </Button>
                    )}

                    <Button
                        size="lg"
                        onClick={() => currentStep < 2 && setCurrentStep(currentStep + 1)}
                        disabled={!selectedContractType}
                        className="bg-[#2D8FE3] hover:bg-[#2D8FE3] h-11 w-1/2 sm:w-auto px-6 sm:px-10 text-sm sm:text-base whitespace-nowrap"
                    >
                        {currentStep === 1 ? 'Next' : 'Create Contract'}
                    </Button>
                </div>
            </div>


            {/* Footer Actions */}
            {/*<div className="flex flex-wrap items-center justify-between py-4 bg-transparent sticky bottom-0">*/}
            {/*    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2">*/}
            {/*        <Button variant="outline" size="lg" className="gap-2 bg-[#FCF1F1] border border-[#F7B5C6]">*/}
            {/*            <Trash2 className="h-4 w-4"/>*/}
            {/*            /!*<span className="hidden sm:inline">Delete</span>*!/*/}
            {/*        </Button>*/}

            {/*        <Button variant="outline" size="lg"*/}
            {/*                className="gap-2 bg-[#FBFBFB] border border-[#E4E7EC] rounded-[8px]">*/}
            {/*            <FileText className="h-4 w-4"/>*/}
            {/*            Save as draft*/}
            {/*        </Button>*/}
            {/*    </div>*/}

            {/*    <div className="flex items-center gap-3">*/}
            {/*        {currentStep > 1 && (*/}
            {/*            <Button className="bg-[#FBFBFB] hover:bg-[#FBFBFB] border border-[#E4E7EC]"*/}
            {/*                    variant="outline"*/}
            {/*                    size="lg" onClick={() => setCurrentStep(currentStep - 1)}>*/}
            {/*                <ChevronLeft className="h-4 w-4"/>*/}
            {/*            </Button>*/}
            {/*        )}*/}

            {/*        <Button*/}
            {/*            size="lg"*/}
            {/*            onClick={() => currentStep < 2 && setCurrentStep(currentStep + 1)}*/}
            {/*            disabled={!selectedContractType}*/}
            {/*            className="bg-[#2D8FE3] hover:bg-[#2D8FE3]"*/}
            {/*        >*/}
            {/*            {currentStep === 1 ? 'Next' : 'Create Contract'}*/}
            {/*        </Button>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
}

export default CreateContract;