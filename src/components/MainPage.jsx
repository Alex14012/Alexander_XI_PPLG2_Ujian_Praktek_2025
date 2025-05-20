import { Link } from "react-router"
import { useState, useEffect } from "react";


function MainPage(){
        
    return(
        <>
        <div className="px-4 mt-16">
            <h2 className="font-bold uppercase text-teal-600 dark:text-teal-400 mb-2">KATEGORI</h2>
            <h1 className="text-3xl font-bold mb-2">Mau belajar apa hari ini?</h1>
            <p class="text-lg mb-8 text-slate-500">Temukan tutorial berdasarkan minatmu.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <Link to="/unavaible" className="block rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg active:scale-95 transition-all active:shadow-sm">
                <div className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <img src="img\main\code-alt.png" alt="" />
                </div>
                <h3 class="text-slate-900 mt-5 text-base font-bold">Basic Programming</h3>
                <div className="flex items-center">
                <p class="text-slate-500mt-2 text-sm">
                    Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#, Java, Javascript, dan masih banyak lagi.
                </p>
             </div>
            </Link>

            <Link to="/unavaible" className="block rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg active:scale-95 transition-all active:shadow-sm">
                <div className="inline-flex items-center justify-center p-2 bg-orange-500 rounded-md shadow-lg">
                <img src="img\main\globe-alt.png" alt="" />
            </div>
            <h3 class="text-slate-900 mt-5 text-base font-bold">Web Programming</h3>
            <div className="flex items-center">
            <p class="text-slate-500mt-2 text-sm">
                Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MySQL, Codeigniter, React, dan masih banyak lagi.
            </p>
            </div>
            </Link>
            
            
            <Link to="/unavaible" className="block rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg active:scale-95 transition-all active:shadow-sm">
                <div className="inline-flex items-center justify-center p-2 bg-cyan-500 rounded-md shadow-lg">
                <img src="img\main\folder.png" alt="" />
            </div>
            <h3 class="text-slate-900 mt-5 text-base font-bold">Tutorial Lainnya</h3>
            <div className="flex items-center">
            <p class="text-slate-500mt-2 text-sm">
            Baca tutorial dalam kategori lainnya seperti Mobile programming, Game programming, IoT, Blockhain, dan masih
            banyak lagi.
            </p>
            </div>
            </Link>

        </div>
        </>
    )
}

export default MainPage