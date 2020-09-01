import React, {useEffect, useState} from 'react';
import '../App.css';

function App() {
    const [position, setPosition] = useState({
        x: 0, y: 0
    });

    useEffect(() => {
        const handle = document.getElementById("handle");
        handle.addEventListener("mousedown", function (e) {
            e.preventDefault();
            handle.style.pointerEvents = "none";

            document.body.addEventListener("mousemove", move);
            document.body.addEventListener("mouseup", () => {
                document.body.removeEventListener("mousemove", move);
                handle.style.pointerEvents = "initial"
            })
        });

        return () => {
            document.body.removeEventListener("mousedown", move);
            document.body.removeEventListener("mouseup", move);
            document.body.removeEventListener("mousemove", move);

        }
    },[]);

    function move(e) {
        const pos = {
            x: e.clientX,
            y: e.clientY,
        };
        setPosition(pos);
    }

    return (
        <div style={{
            position: "relative",
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: "grey",
            overflow: "hidden",
            border: "1px solid black",
        }}
        >
            <div style={{
                position: "absolute",
                border: "1px solid black",
                top: position.y,
                left: position.x,
                width: 200,
                height: 200,
                backgroundColor: "black"
            }}
            >
            <img id="handle" src="/img/drag-handle.png" alt="handle"/>
            </div>
        </div>
    );
}

export default App;
