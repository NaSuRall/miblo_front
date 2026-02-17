import { Link } from "react-router-dom";
import { useSendRegister } from "../hooks/useSendRegister";

export default function LoginPage(){    

    const sendRegister = useSendRegister();

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const payload = {
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
            email: formData.get("email"),
            password: formData.get("password"),
            phone: formData.get("phone"),
        };

        sendRegister.mutate(payload);
    };

   
    return(
        <div className="flex flex-row w-full h-screen p-5 bg-noir">
            <div className="flex w-full rounded-sm bg-white">

                <div className="absolute flex items-center w-15 h-15 p-2">
                    <Link className="flex items-center justify-center  rounded-sm text-noir font-Lemon" to="/">
                        <img src="./img/miblo_logo.png" alt="LogoMiblo" />
                    </Link>
                </div>

                <div className="flex flex-col w-full h-full justify-center items-center">
                    <div className="">
                        <h2 className="text-2xl font-Lemon">Inscription</h2>
                    </div>
                    <div className="w-full max-w-sm bg-white p-6 rounded-sm">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nom :</label>
                            <input
                            type="text"
                            name="last_name"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ex: Does"
                            />
                            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom :</label>
                            <input
                            type="text"
                            name="first_name"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ex: Jhon"
                            />
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                            type="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ex: contact@miblo.fr"
                            />
                            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone :</label>
                            <input
                            type="number"
                            name="phone"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ex: 0640394872"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mot de passe
                            </label>
                            <input
                            type="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full transition-colors duration-800 ease-in-out bg-gradient-to-r from-jaune to-rose text-boir font-Lemon py-2 rounded-md
                             hover:from-rose hover:to-jaune  hover:cursor-pointer"
                        >
                            S"inscrire
                        </button>
                        <button
                            type="submit"
                            className="text-noir border-b-2 border-rose hover:bg-jaune p-2 text-sm"
                        >
                           Vous avez deja un compte ?
                        </button>
                        </form>
                    </div>
                </div>




                <div className="flex w-full h-full">
                    <div className="w-full h-full bg-gradient-to-r from-jaune to-rose"></div>
                </div>
            </div>
        </div>
    )
}
