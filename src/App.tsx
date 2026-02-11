import "./App.css";
import { useSendRegister } from "./hooks/useSendRegister";

function App() {
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

    return (
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
        </>
    );
}

export default App;
