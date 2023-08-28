import Image from "next/image"

const Acomodaciones = ({ item }) => {
    return (
        <article className="p-4 max-w-[600px]">
            <div className="relative p-2 border-b-4 border-b-blueSea rounded-md">
                <Image src={item.img} className={"w-full h-[400px] object-cover" + 'img'} alt=""/>
                <div className="w-[90%] mx-auto mt-5 ">
                    <h4 className="text-3xl font-bold text-green-600 text-justify">{item.title}</h4>
                    <div className="border-t-2 border-t-green-600 mt-2 pt-2">
                        <ul className="flex flex-wrap justify-evenly my-2">{item.features.map((item, index) => <li key={index
                        } className={"mx-4 " + 'listIcon'}>{item}</li>) || ""}</ul>
                        <p>{item.description || ""}</p>
                    </div>
                </div>
                <div className="absolute top-0 left-0 text-3xl font-black text-white p-2 pr-5 rounded-br-full
                 bg-blueSea">
                    <p>250.000$</p>
                </div>
            </div>
        </article>
    )
}

export default Acomodaciones