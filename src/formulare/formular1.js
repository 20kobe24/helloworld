import {useState} from "react";

export default function MyForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("The name you entered was: " + name);
    }

     function printName(){
        console.log(name)
        setName("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text" value={name} onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <input type="submit" onClick={printName}/>
            </form>
            <p>{name}</p>
        </div>
    )
}