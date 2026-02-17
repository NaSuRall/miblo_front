import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="fixed left-0 top-0 w-1/5 h-screen border-r-2 border-r-gris flex flex-col justify-between bg-white">
            <div>
                <div className="flex flex-row items-center justify-start h-20 border-b-2 border-b-gris p-4">
                    <img
                        src="./img/miblo_logo.png"
                        alt="Miblo Logo"
                        className="w-10 h-10 mr-2"
                    />
                    <h1 className="text-xl font-Lemon">API</h1>
                </div>

                <div className="flex flex-col w-full p-4 space-y-2">
                    <a
                        href="#"
                        className="font-Lemon text-noir p-2 rounded-sm transition-colors duration-500 ease-in-out hover:bg-gradient-to-r hover:from-rose hover:to-jaune"
                    >
                        Qu'est ce que Miblo ?
                    </a>
                    <a
                        href="#"
                        className="font-Lemon text-noir p-2 rounded-sm transition-colors duration-500 ease-in-out hover:bg-gradient-to-r hover:from-rose hover:to-jaune"
                    >
                        Documentations
                    </a>
                    <a
                        href="#"
                        className="font-Lemon text-noir p-2 rounded-sm transition-colors duration-500 ease-in-out hover:bg-gradient-to-r hover:from-rose hover:to-jaune"
                    >
                        Nos abonnements
                    </a>
                    <a
                        href="#"
                        className="font-Lemon text-noir p-2 rounded-sm transition-colors duration-500 ease-in-out hover:bg-gradient-to-r hover:from-rose hover:to-jaune"
                    >
                        Contact
                    </a>
                    <a
                        href="#"
                        className="font-Lemon text-noir p-2 rounded-sm transition-colors duration-500 ease-in-out hover:bg-gradient-to-r hover:from-rose hover:to-jaune"
                    >
                        Mon espace
                    </a>
                </div>
            </div>

            <div className="flex flex-row w-full">
                <Link className="flex items-center justify-center p-2 rounded-sm bg-jaune text-noir font-Lemon text-sm w-1/2" to="/login">Connexion</Link>
                <Link className="flex items-center justify-center p-2 rounded-sm bg-rose text-noir font-Lemon text-sm w-1/2" to="/register">Inscription</Link>
            </div>
        </div>
    );
}
