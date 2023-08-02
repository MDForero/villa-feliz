import img1 from "../public/IMG-8713.jpg"
import img2 from "../public/IMG-8719.jpg"
import img3 from "../public/IMG-8727.jpg"
import img4 from "../public/IMG-8772.jpg"
import img5 from "../public/IMG-8815.jpg"
import img6 from "../public/IMG-8821.jpg"
import img7 from "../public/IMG-8846.jpg"
import img8 from "../public/IMG-8840.jpg"
import img9 from "../public/IMG-8841.jpg"
import img10 from "../public/IMG-8867.jpg"
import img11 from "../public/IMG-8885.jpg"
import img12 from "../public/IMG-8891.jpg"
import img13 from "../public/IMG-8713.jpg"
import { ImageList, ImageListItem } from "@mui/material"
import Image from "next/image"

const itemData = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13]

const Galeria = () => {
    return (
        <div className="max-w-6xl mx-auto mb-[20px]">
            <ImageList
                variant="masonry" cols={5} gap={8}
            >
                {itemData.map((item, index) => (
                    <ImageListItem key={index}>
                        <Image
                            src={item}
                            alt="prueba"
                            width={248}
                            className="o"
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default Galeria