import { Link } from "react-router"

function Header(){
    return(
        <>
        
        <div className="flex flex-col justify-around w-full h-80 text-gray-100 bg-slate-800">
            <div className="flex flex-row text-center">
            <div className="pt-20 flex flex-col gap-5 w-2xl p-5">
            <h1 className="text-5xl font-bold">Petani Kode</h1>
            <h3 className="text-2xl text-left font-light ml-20">Belajar budidaya kode coding dengan tutorial yang mudah dipahami. Mostly pakai Linux.</h3>
            <div className="flex flex-row gap-2 justify-center">
            <Link to="/unavaible" className=" px-3 py-2 bg-teal-500 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500">mulai belajar</Link>
            <Link to="/unavaible" className="px-3 py-2 bg-teal-400/10 border border-teal-400/50 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 text-teal-100 rounded-lg active:bg-teal-500">Join Newsletter</Link>
            </div>
            </div>
            <div className="flex items-end">
            <img src="/img/header/petanikode-hero.svg" alt="" className="h-80 m-30"/>
            </div>
            </div>
        </div>
        </>
    )
}

export default Header