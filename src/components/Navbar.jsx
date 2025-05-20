import { Link } from "react-router";

function NavBar(){

    return(
        <>
    <div className="flex justify-around bg-teal-600 text-white sticky top-0 h-12 w-full">
     <div className="container px-4 flex justify-around">
        <div className="flex flex-row gap-2 items-center">
        <Link to="/"><img src="\img\navbar\LogoPetani.png" alt="logo" className="size-6 rounded-4xl border-2 border-white  "/></Link>
        <Link to="/" className="hover:bg-teal-500 rounded-sm pr-2"><img src="\img\navbar\home.png" alt="Home" className="size-6 inline m-2 pb-0.5"/>Home</Link>
        <Link to="/unavaible" className="hover:bg-teal-500 rounded-sm pr-2"><img src="\img\navbar\play.png" alt="Home" className="size-6 inline m-2 pb-0.5"/>Kelas</Link>
        <Link to="/unavaible" className="hover:bg-teal-500 rounded-sm pr-2"><img src="\img\navbar\docs.png" alt="Home" className="size-6 inline m-2 pb-0.5"/>Tutorial</Link>
        <Link to="/unavaible" className="hover:bg-teal-500 rounded-sm pr-2"><img src="\img\navbar\book.png" alt="Home" className="size-6 inline m-2 pb-0.5"/>Buku</Link>
        <Link to="/unavaible" className="hover:bg-teal-500 rounded-sm pr-2"><img src=".\img\navbar\discord.png" alt="Home" className="size-6 m-2 inline-flex"/>discord</Link>
        </div>
        <div className="flex flex-row gap-5 items-center">
        <Link to="/unavaible" className="hover:bg-teal-500 size-6 rounded-md"><img src="\img\navbar\search.png" alt="" /></Link>
        <button type="button" className="hover:bg-teal-500 size-6 rounded-md"><img src="\img\navbar\moon.png" alt="" /></button>
        <Link to="/unavaible" title="Subscribe to our newsletter" className=" px-3 py-2 bg-teal-500 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500 w-30 h-10 text-sm">
            Join Newsletter
            </Link>
        </div>
     </div>
    </div>
    </>
    )
}

export default NavBar;