import { useState } from "react";
import PremiumPlan from "../Components/PremiumPlan";

function Premium(){
    const [isYearly,setYearly] = useState(false);
    const monthlyPlans = [
        {
            price : 250,
            planName: "Starter",
            description:"Limited access, great for new users or casual readers.",
            features: [
                "10 eBooks/month",
                "Limited genres",
                "Online reading only",
                "Basic search",
                "No downloads"
            ]
        },
        {
            price : 700,
            planName: "Basic",
            description:"Mid-tier with more access and user conveniences.",
            features: [
                "100 eBooks/month",
                "Access all genres",    
                "Download 10 books/month",
                "Reading progress tracking",
                "Highlight & Notes"
            ]
        },
        {
            price : 1500,
            planName: "Pro",
            description:"Full access with premium tools and priority support.",
            features: [
                "Unlimited eBooks",
                "Premium book access",
                "Unlimited downloads",
                "Audiobooks & journals",
                "Priority support",
                "Sync across devices"
            ]
        }
    ];

    const yearlyPlans = monthlyPlans.map(plan=>({
        ...plan,
        price : plan.price *11,
    }));
    
    const displayedPlans = isYearly ? yearlyPlans :monthlyPlans;
    return(
        <>
        <div className="bg-green-100 pt-20 pb-10">
            <div className="flex w-full justify-between">
                <div className="pl-7 space-y-2">
            <h1 className="text-3xl font-bold">Choose your plans</h1>
            <p className="text-gray-600 ">Sign up in less then 30 seconds. Try out 7 days free trail, Upgrade at anytime, no question, no hastie</p>
        </div>
        <div className="flex justify-center items-center mr-5"><button className="p-2  cursor-pointer bg-green-300 rounded-xl font-medium text-gray-600 hover:bg-green-400" onClick={()=>setYearly(prev=>!prev)}>{isYearly ? "Monthly Plan": "Yearly Plan"}</button></div>

            </div>
            

            <div className="flex flex-wrap justify-center gap-8 pt-8">
            {displayedPlans.map((plan,index)=>(
                <PremiumPlan key={index} {...plan} isYearly={isYearly}/>
            
            ))}
        </div>

        </div>
        
        </>
    )
}
export default Premium;