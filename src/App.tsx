// import { useSendRegister } from "./hooks/useSendRegister";
//import { useSendLogin } from "./hooks/useSendLogin";
// import { useSendTestLogin } from "./hooks/useSendTestLogin";
function App() {
    /*
    const sendTestLogin = useSendTestLogin();
    const sendRegister = useSendRegister();
    const sendLogin = useSendLogin();
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
    const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const payload = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        sendLogin.mutate(payload);
    };
    */
    /*
        <>
            <form method="post" onSubmit={handleSubmit}>
                <input type="text" name="first_name" placeholder="Prenom" />
                <input type="text" name="last_name" placeholder="Nom" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="text" name="phone" placeholder="Phone" />
                <button type="submit">Register</button>
            </form>

            {sendRegister.isSuccess && (
                <p style={{ color: "green" }}>{sendRegister.data.message}</p>
            )}

            <form method="post" onSubmit={handleSubmitLogin}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">login</button>
            </form>

            {sendTestLogin.isSuccess && (
                <p style={{ color: "green" }}>
                    {sendTestLogin.data.first_name}
                    {sendTestLogin.data.last_name}
                    {sendTestLogin.data.email}
                </p>
            )}
        </>
        */
    return (
        <div className="w-full h-full">
            {/* --- SIDEBAR FIXE --- */}
            <div className="fixed left-0 top-0 w-1/5 h-screen border-r-2 border-r-gris flex flex-col justify-between bg-white">
                <div>
                    <div className="flex flex-row items-center justify-start h-20 border-b-2 border-b-gris p-4">
                        <img src="" alt="" />
                        <h1 className="text-xl font-Lisa">Miblo</h1>
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
                    </div>
                </div>

                <div className="flex flex-row w-full">
                    <a
                        href="#"
                        className="flex items-center justify-center p-2 rounded-sm bg-jaune text-noir font-Lemon text-sm w-1/2"
                    >
                        Connexion
                    </a>
                    <a
                        href="#"
                        className="flex items-center justify-center p-2 rounded-sm bg-rose text-noir font-Lemon text-sm w-1/2"
                    >
                        Inscription
                    </a>
                </div>
            </div>

            {/* --- CONTENU PRINCIPAL --- */}
            <div className="ml-[20%] w-[80%] flex flex-col">
                <div className="flex w-full items-center justify-center h-130 border-b-2 border-b-gris animate-move bg-gradient-to-r from-jaune to-rose">
                    <h2 className="text-9xl font-Lemon text-noir">MIBLO API</h2>
                </div>

                <div className="flex flex-col w-full items-center justify-center pb-20 pt-20">
                    <div className="flex flex-col w-[80%] h-full items-center justify-center">
                        <div className="space-y-5">
                            <h3 className="text-noir font-Lemon text-3xl">
                                Créez des API personnalisées en quelques minutes
                            </h3>

                            <p className="text-noir font-Lisa text-center text-s">
                                Miblo vous permet de générer rapidement des
                                endpoints sur mesure pour tester vos
                                applications front-end avec <br /> des données
                                réalistes, avant même que votre backend final ne
                                soit prêt
                            </p>
                        </div>

                        <div className="flex w-full pt-15">
                            <div className="flex flex-row items-center justify-center w-full h-96 bg-gris"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full items-center justify-center pb-20 pt-20">
                    <div className="flex flex-col w-[80%] h-full items-center justify-center">
                        <div className="space-y-5">
                            <h3 className="flex items-center justify-center text-noir font-Lemon text-center text-3xl">
                                C’est quoi ca ?
                            </h3>

                            <p className="text-noir font-Lisa text-center text-s">
                                Miblo est un outil de création d’API
                                personnalisées conçu pour simplifier le travail
                                des développeurs. Il permet de générer
                                rapidement des endpoints adaptés à leurs
                                besoins, afin de tester leur code front-end avec
                                des données réalistes et de valider le bon
                                fonctionnement de leurs futures intégrations
                                backend.
                            </p>
                        </div>

                        <div className="flex w-full pt-15 gap-5">
                            <div className="flex flex-row items-center justify-center w-full h-96 bg-gris">
                                <h2 className="text-noir font-Lisa text-center text-s">
                                    Créer des Api personnalisées
                                </h2>
                            </div>
                            <div className="flex flex-row items-center justify-center w-full h-96 bg-gris">
                                <h2 className="text-noir font-Lisa text-center text-s">
                                    Simuler des données
                                </h2>
                            </div>
                            <div className="flex flex-row items-center justify-center w-full h-96 bg-gris">
                                <h2 className="text-noir font-Lisa text-center text-s">
                                    Tester les appels réseau
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
