import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Button} from "@/components/ui/button.jsx";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Clock, DollarSign, CircleEllipsisIcon, Receipt} from "lucide-react";
import {useState} from "react";

const formSchema = z.object({
    billingMethods: z.string()
})

const billingMethods = [
    {id: "commission", label: "Commission on Success", icon: DollarSign},
    {id: "hourly", label: "Hourly/Daily Rate", icon: Clock},
    {id: "fixed", label: "Fixed fee/Flat Rate", icon: Receipt},
    {id: "other", label: "Other", icon: CircleEllipsisIcon},
]

export default function BillingInformationForm() {

    const [selectedBillingMethods, setSelectedBillingMethods] = useState(["commission"])
    const toggleSpecialty = (id) => {
        setSelectedBillingMethods((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
    }

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            billingMethods: ""
        },
        mode: "onSubmit",
    })

    function onSubmit() {
    }

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
                        {billingMethods.map((specialty) => {
                            const Icon = specialty.icon
                            const isSelected = selectedBillingMethods.includes(specialty.id)
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

                <FormField
                    control={form.control}
                    name="billingMethods"
                    render={({field}) => (
                        <FormItem className="gap-[13px]">
                            <FormLabel className="mb-0.5 gap-0">Other Billing Methods<span
                                className="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <Textarea className="w-full h-20 bg-[#F3F4F6] border-[#E5E7EB]" {...field}
                                          placeholder="Bridgewater"/>
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