import Cards from "./cards"
import { useState, useEffect } from "react"

function SubMainPage(){

const [dataBlogs, setDataBlogs] = useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
            .then((res) => res.json())
            .then((data) => {
            setDataBlogs(data)
            console.log(data)
            .catch((error) => console.error("Error fetching data: ", error))
            })
        }, [])

    return(
        <>
            <div className="px-4 mt-16">
            <h2 className="font-bold uppercase text-teal-600 dark:text-teal-400 mb-2">UPDATE</h2>
            <h1 className="text-3xl font-bold mb-2">Apa yang baru di Petani Kode? 🔥</h1>
            <p class="text-lg mb-8 text-slate-500">Baca artikel terbaru yang masih fresh dan hangat</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
        {dataBlogs.map((dataBlog) => (

            <Cards
            key={dataBlog.id}
            id={dataBlog.userId}
            title={dataBlog.title}
            body={dataBlog.body}
            />
        ))}
        </div>
        </>
        )
}

export default SubMainPage