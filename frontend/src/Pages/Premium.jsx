import PremiumPlan from "../Components/PremiumPlan";

function Premium(){
    const plans = [
        {
            price : 19,
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
            price : 29,
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
            price : 39,
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
    ]
    return(
        <>
        <div className="bg-green-100 pt-20">
            <div className="pl-7 space-y-2 ">
            <h1 className="text-3xl font-bold">Choose your plans</h1>
            <p className="text-gray-600 ">Sign up in less then 30 seconds. Try out 7 days free trail, Upgrade at anytime, no question, no hastie</p>
        </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
            {plans.map((plan,index)=>(
                <PremiumPlan key={index} {...plan}/>
            
            ))}
        </div>

        </div>
        
        </>
    )
}
export default Premium;