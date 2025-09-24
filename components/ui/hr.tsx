// Images
import Image from "next/image"
// Images
import HrSvg from "../../public/images/shape/line-shape-9.svg"


export default function Hr() {
    return (
        <div className="flex items-center justify-center w-full">
            <Image src={HrSvg} alt="hr-svg" />
        </div>
    )
}