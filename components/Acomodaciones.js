import Image from "next/image"

const Acomodaciones = ({ item }) => {
    return (
        <article className="p-4 max-w-[600px]">
            <div className="relative p-2 border-b-4 border-b-verde-oliva rounded-md">
                <Image src={item.img} className={"w-full h-[400px] object-cover" + 'img'} alt=""/>
                <div className="w-[90%] mx-auto ">
                    <h4 className="text-2xl font-bold text-verde-hunt text-justify">{item.title}</h4>
                    <div className="border-t-2 border-t-verde-hunt mt-2 pt-2">
                        <ul className="flex flex-wrap justify-evenly my-2">{item.features.map((item, index) => <li key={index
                        } className={"mx-4 " + 'listIcon'}>{item}</li>) || ""}</ul>
                        <p>{item.description || ""}</p>
                    </div>
                </div>
                <div className="absolute top-5 left-5 text-3xl font-black text-verde-hunt bg-verde-oliva">
                    <p>{ item.title || ""}</p>
                </div>
            </div>
        </article>
    )
}

export default Acomodaciones