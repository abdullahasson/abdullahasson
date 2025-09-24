export default function Footer() {
    return (
        <div className="p-16 w-full max-[560px]:px-10">
            <p className="txt p-0 text-2xl">
                © Copyright {new Date().getFullYear().toString()} | Abdullah Hasson | All Rights Reserved
            </p>
        </div>
    )
}