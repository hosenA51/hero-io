import logoImg from "../assets/logo.png"
const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <h1 className="text-4xl text-black font-semibold flex items-center gap-1">
                L
                <img
                    src={logoImg}
                    alt="logo"
                    className="w-10 h-10 animate-spin"
                />
                ading...
            </h1>
        </div>
    );
};

export default Loader;