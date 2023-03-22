import Image from "next/image"
import logo from "../public/logo.png"

const BannerLogo = ({ bg }) => {
    return (
        <main className={`mx-auto max-w-full flex justify-content-center align-items-center h-screen ` + bg}>
            <div className="block mx-auto my-auto rounded-full bg-white/60">
                <Image src={logo} height={300} alt="" />
            </div>
        </main>
    )
}

export default BannerLogo