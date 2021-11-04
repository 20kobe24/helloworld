import {useState} from "react";

export default function HelloWorld() {
    const [counter, setCounter] = useState(0);
    const [fieldValue, setFieldValue] = useState("");

    function myButtonHandler() {
        console.log("Button was clicked!");
    }

    function inCounter() {
        setCounter(counter + 1);
        console.log(counter);
    }

   /* function FamilyMembers() {
        let family = [
            {name: "Peter", age: 18},
            {name: "Petra", age: 16}
        ]

        const list = family.map(person => <p>{person.name}</p>)
        return (
            <div>
                {list}
            </div>
        )
    }*/

   async function printName() {
        console.log(fieldValue);
    }

    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={myButtonHandler}>Klick mich!</button>
            <button onClick={inCounter} value="">+1</button>
            <button onClick={ printName }>Gib den Namen aus</button>

            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={fieldValue}
                           onChange={(e) => setFieldValue(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}