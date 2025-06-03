import { TiTick } from "react-icons/ti";
function Features({features}){
    
    return(
        <>
        <div className="space-y-2.5 text-lg">
            {features.map((text,index)=>(
                <div key={index} className="flex items-center gap-2">
                    <TiTick className="text-green-600 text-xl"/>
                    <span>{text}</span>
                </div>
            ))}
        </div>
            
        </>
    )
}
export default Features;