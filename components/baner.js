export default function Baner({children}) {
    return (
        <div className="min-h-screen bg-cover bg-no-repeat bg-center bg-my-img p-5 flex justify-center items-center">
            <div className="container flex flex-col justify-center items-center">
            {children}
            </div>
        </div>
    )
}