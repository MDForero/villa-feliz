import Image from "next/image"
import logo from "../public/logo.png"

const BannerLogo = ({ bg, children }) => {
    return (
        <main className={`mx-auto max-w-full flex justify-content-center align-items-center h-[400px] lg:h-[600px] ` + bg}>
            <div className=" relative block mx-auto my-auto rounded-full bg-white/60">
                <Image src={logo} height={0} width={0} alt="" className="lg:w-40 lg:h-40 h-32 w-32" />
            {children}
            </div>
        </main>
    )
}

export default BannerLogo