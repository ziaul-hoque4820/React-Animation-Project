import Button from "./Button";

function Navbar() {
    const nav = ["Home", "Work", "Culture", "", "News"];
    return (
        <div className="max-w-screen-xl mx-auto  py-6 flex items-center justify-between border-b-[1px] border-b-zinc-600">
            <div className="nleft flex items-center">
                <img className="w-[200px] h-[50px] " src="https://images.pexels.com/photos/9011349/pexels-photo-9011349.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="links flex gap-14 ml-20">
                    {nav.map((elem, index) => (
                        elem.length === 0 ? <span key={index} className="w-[2px] h-7 bg-zinc-600 drop-shadow-2xl"></span> :
                            <a className="text-white flex items-center gap-1" key={index} href="#">
                                {index === 1 && (<span className="inline-block w-2 h-2 drop-shadow-2xl bg-green-500 rounded-full"></span>)}
                                {elem}
                            </a>
                    ))}
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Navbar 