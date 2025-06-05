import Features from "./Features";

function PremiumPlan({price,planName,description,features,isYearly}) {
    return (
        <>
            <div className="flex flex-col justify-between p-10 w-full sm:w-[80%] md:w-[60%] lg:w-[30%] mx-auto bg-green-200 shadow-2xl space-y-2 text-lg">
                <div className="flex gap-2 items-center sm:gap-y-2">
                    <h1 className="text-2xl font-semibold">₹{price} </h1>
                    <p className="text-gray-500 text-xl">/{isYearly ? "year" : "month"}</p>
                </div>
                <h2 className="text-3xl font-bold">{planName}</h2>
                <p>{description}</p>

                <Features features= {features} />

                <button className="w-full mt-2 bg-green-700 text-white font-semibold p-1.5 cursor-pointer hover:bg-green-900">Choose Plan</button>
            </div>
        </>
    )
}
export default PremiumPlan;