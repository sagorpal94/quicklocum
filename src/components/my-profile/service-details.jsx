import {FieldGroup} from "@/components/ui/field.jsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.jsx";
import {IdCard, Users, Phone, User, Stethoscope, Building2, Pill, Home, Calendar1} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Input} from "@/components/ui/input.jsx";
import {useState} from "react";

const specialties = [
    {id: "general", label: "General Medicine", icon: Stethoscope},
    {id: "dental", label: "Dental Care", icon: Building2},
    {id: "pharmacy", label: "Pharmacy", icon: Pill},
    {id: "nursing", label: "Nursing & Home Care", icon: Home},
]

const regions = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Quebec",
    "Prince Edward Island",
    "Saskatchewan",
]

const contractTypes = [
    {id: "temporary", label: "Temporary Staffing", icon: Users},
    {id: "permanent", label: "Permanent Staffing", icon: Users},
]
const formSchema = z.object({
    experience: z.string(),
    recruiters: z.string(),
    licensing: z.string(),
    recruitmentDescription: z.string(),
    specialtiesCovered: z.string()
})
export default function ServiceDetails() {
    const [selectedSpecialties, setSelectedSpecialties] = useState(["dental"])
    const [selectedRegions, setSelectedRegions] = useState([
        "British Columbia",
        "New Brunswick",
        "Nova Scotia",
        "Ontario",
        "Quebec",
        "Prince Edward Island",
    ])
    const [selectedContractType, setSelectedContractType] = useState("permanent")

    const toggleSpecialty = (id) => {
        setSelectedSpecialties((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
    }

    const toggleRegion = (region) => {
        setSelectedRegions((prev) => (prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]))
    }
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            experience: "",
            recruiters: "",
            licensing: "",
            recruitmentDescription: "",
            specialtiesCovered: ""
        },
        mode: "onSubmit",
    })

    function onSubmit() {}

    return (
        <Form {...form} >
            <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-[13px]">
                    <label
                        className="flex items-center text-sm text-[#194185] leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive mb-0.5 gap-0"
                    >
                        Specialties Covered
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {specialties.map((specialty) => {
                            const Icon = specialty.icon
                            const isSelected = selectedSpecialties.includes(specialty.id)
                            return (
                                <button
                                    key={specialty.id}
                                    onClick={() => toggleSpecialty(specialty.id)}
                                    className={`flex items-center gap-2 cursor-pointer rounded-lg border px-2 py-2 text-base transition-all ${
                                        isSelected
                                            ? "border-blue-500 bg-blue-500 text-white"
                                            : "border-gray-200 bg-[#EAF5FE] text-[#2A394B] hover:border-blue-300 hover:bg-blue-50"
                                    }`}
                                >
                                    <Icon
                                        className={`h-[18px] w-[18] ${isSelected ? 'text-white' : 'text-[#A161F0]'}`}/>
                                    {specialty.label}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="grid gap-[13px]">
                    <label
                        className="flex items-center text-sm text-[#194185] leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive mb-0.5 gap-0"
                    >
                        Region Served
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {regions.map((region) => {
                            const isSelected = selectedRegions.includes(region)
                            return (
                                <button
                                    key={region}
                                    onClick={() => toggleRegion(region)}
                                    className={`flex items-center gap-2 cursor-pointer rounded-lg border px-2 py-2 text-base transition-all ${
                                        isSelected
                                            ? "border-blue-500 bg-blue-500 text-white"
                                            : "border-gray-200 bg-[#EAF5FE] text-[#2A394B] hover:border-blue-300 hover:bg-blue-50"
                                    }`}
                                >
                                    {region}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="grid gap-[13px]">
                    <label
                        className="flex items-center text-sm text-[#194185] leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive mb-0.5 gap-0"
                    >
                        Region Served
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {contractTypes.map((contract) => {
                            const Icon = contract.icon
                            const isSelected = selectedContractType === contract.id
                            return (
                                <button
                                    key={contract.id}
                                    onClick={() => setSelectedContractType(contract.id)}
                                    className={`flex items-center gap-2 cursor-pointer rounded-lg border px-2 py-2 text-base transition-all ${
                                        isSelected
                                            ? "border-blue-500 bg-blue-500 text-white"
                                            : "border-gray-200 bg-[#EAF5FE] text-[#2A394B] hover:border-blue-300 hover:bg-blue-50"
                                    }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    {contract.label}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <FieldGroup
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-3">
                    {/* Experience Field */}
                    <FormField
                        control={form.control}
                        name="experience"
                        render={({field}) => (
                            <FormItem className="gap-[13px]">
                                <FormLabel className="mb-0.5 gap-0">
                                    Years of Experience
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <InputGroup className="bg-[#F3F4F6] border-[#E5E7EB]">
                                        <InputGroupInput type="text"
                                                         placeholder="11" {...field}/>
                                        <InputGroupAddon>
                                            <Calendar1/>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="recruiters"
                        render={({field}) => (
                            <FormItem className="gap-[13px]">
                                <FormLabel className="mb-0.5 gap-0">
                                    Number of Recruiters
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <InputGroup className="bg-[#F3F4F6] border-[#E5E7EB]">
                                        <InputGroupInput type="text"
                                                         placeholder="CTO" {...field}/>
                                        <InputGroupAddon>
                                            <IdCard/>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="licensing"
                        render={({field}) => (
                            <FormItem className="gap-[13px]">
                                <FormLabel className="mb-0.5 gap-0">Licensing/Accreditation</FormLabel>
                                <FormControl>
                                    <Input type="number" className="w-full bg-[#F3F4F6] border-[#E5E7EB]" placeholder="11" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </FieldGroup>

                <FormField
                    control={form.control}
                    name="recruitmentDescription"
                    render={({field}) => (
                        <FormItem className="gap-[13px]">
                            <FormLabel className="mb-0.5 gap-0">Recruitment Process Description<span
                                className="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <Textarea  className="w-full h-20 bg-[#F3F4F6] border-[#E5E7EB]" {...field} placeholder="Bridgewater"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button variant="secondary" type="submit"
                        className="bg-[#216CD2] hover:bg-[#216CD2] text-white">
                    Edit Details
                </Button>
            </form>
        </Form>
    )
}