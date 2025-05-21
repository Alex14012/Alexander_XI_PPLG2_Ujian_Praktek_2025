import { Link } from "react-router"

function Footer(){
    return(
        <>
<div className=" bg-slate-800 text-white">
        <div className="pt-16 bg-slate-800 text-white grid grid-cols-5 gap-4">
        <div className="block">
                <div className="flex justify-around">
                    <div className="cols-span-2">
                     <div className="w-40 ml-20">   
                    <img src="img\footer\logo.png" alt="" />
                    </div>
                    <div>
                    <p className="mt-10 ml-3 w-2xl">
                        Tempat belajar budidaya kode (coding)
                        <br />
                        dengan tutorial yang gampang dipahami.
                    </p>
                    </div>
                    </div>
                </div>
        </div>

        <div className="block">
            <div className="pl-28">
            <h3 class="text-md font-bold mb-4">Belajar</h3>
            <div className="flex flex-col">
            <Link to="/unavaible" class="font-medium text-sm py-1 hover:text-teal-400 text-slate-300">Artikel</Link>
            <Link to="/unavaible"class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">Tutorial</Link>
            <Link to="/" class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">Buku</Link>
            </div>
            </div>
        </div>

        <div className="block">
            <div className="pl-28">
            <h3 class="text-md font-bold mb-4">Popular Tutorial</h3>
            <div className="flex flex-col">
            <Link to="/unavaible" class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">Tutorial Bahasa C</Link>
            <Link to="/unavaible"class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">Tutorial Javascript</Link>
            <Link to="/unavaible" class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">Tutorial Java</Link>
            <Link to="/unavaible" class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">Tutorial PHP</Link>
            <Link to="/unavaible" class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">Tutorial Python</Link>
            </div>
            </div>
        </div>

        <div className="block">
            <div className="pl-28">
            <h3 class="text-md font-bold mb-4">Sosial Media</h3>
            <div className="flex flex-col">
            <Link to="/unavaible" class="font-medium py-1 text-sm  hover:text-teal-400 text-slate-300">Facebook Page</Link>
            <Link to="/unavaible"class="font-medium py-1 text-sm  hover:text-teal-400 text-slate-300">Instagram</Link>
            <Link to="/unavaible" class="font-medium py-1 text-sm  hover:text-teal-400 text-slate-300">Twitter</Link>
            <Link to="/unavaible" class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">Youtube Channel</Link>
            <Link to="/unavaible" class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">Telegram Channel</Link>
            </div>
            </div>
        </div>

        <div className="block">
            <div className="pl-28">
            <h3 class="text-md font-bold mb-4">Petani Kode</h3>
            <div className="flex flex-col">
            <Link to="/unavaible" class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">About</Link>
            <Link to="/unavaible"class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">FAQs</Link>
            <Link to="/unavaible" class="font-medium text-sm  py-1 hover:text-teal-400 text-slate-300">Contant</Link>
            </div>
            </div>
        </div>
    </div>

        <div className="flex flex-col items-center border-t border-gray-500 mt-5">
            <div className="flex flex-col">
                <h1 className="mt-5">Ikuti Kami</h1>
            </div>
            <div className="flex flex-row gap-3">
            <Link to="/unavaible" class="hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white size-8 mt-3" >
            <img src="/img/footer/Facebook.png" alt=""/>
            </Link>
            <Link to="/unavaible" class="hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white size-8 mt-3" >
            <img src="/img/footer/twitter.png" alt=""/>
            </Link>
            <Link to="/unavaible" class="hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white size-8 mt-3" >
            <img src="/img/footer/telegram.png" alt=""/>
            </Link>
            <Link to="/unavaible" class="hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white size-8 mt-3" >
            <img src="/img/footer/Instagram.png" alt=""/>
            </Link>
            <Link to="/unavaible" class="hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white size-8 mt-3" >
            <img src="/img/footer/Youtube.png" alt=""/>
            </Link>
            </div>
            <p className=" flex flex-row">
                © 2025 <p className="font-bold pl-3 pr-3">Petani Kode</p> · Made with ❤️ using Hugo 0.134.0
            </p>
        </div>
</div>
</>
    )
}

export default Footer
