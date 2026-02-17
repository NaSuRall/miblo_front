import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function App() {
    return (
        <div className="w-full h-full">
            {/* --- SIDEBAR FIXE --- */}
            <Navbar />

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

                {/* --- FOOTER --- */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
