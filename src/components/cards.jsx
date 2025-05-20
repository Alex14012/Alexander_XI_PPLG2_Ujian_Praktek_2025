import { Link } from "react-router"

function Cards({title, body}){
    return(
        <>
        <div className="block rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg active:scale-95 transition-all active:shadow-sm mb-20">
            <Link to="/unavaible" >
                <div className="flex justify-around items-center rounded-xl object-cover h-48 w-96 bg-gray-500">
                    <h1 className="">tests</h1>
                </div>
                <h3 class="text-slate-900 mt-5 text-base font-bold">{title}</h3>
                <div className="flex items-center">
                <p class="text-slate-500mt-2 text-sm">
                {body}
                </p>
               </div>
            </Link>
        </div>
        </>
        )
}

export default Cards