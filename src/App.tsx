import { Player } from "@theolive/player/chromeless";
import { useState } from "react";
import "./App.css";
import THEOliveWrapper from "./components/THEOliveWrapper";

function App() {
    const [player, setPlayer] = useState<Player | null>(null);

    const myChannelId = "production"; // Change this to your own channelId

    async function handlePlayer(newPlayer: Player) {
        setPlayer(newPlayer);
        await loadChannel();
    }

    async function loadChannel() {
        if (player) {
            // Load your channel
            await player.loadChannel(myChannelId);
        }
    }

    function onPlay() {
        if (player) {
            player.play();
        }
    }

    function onPause() {
        if (player) {
            player.pause();
        }
    }

    return (
        <div className="App">
            <header>
                <h1>Showcasing THEOlive chromeless player with React</h1>
            </header>
            <section className="theolive-container">
                <THEOliveWrapper onPlayer={handlePlayer} />
            </section>
            <section className="buttons-wrapper">
                <button onClick={onPlay} style={{ marginRight: "20px" }}>
                    Play stream
                </button>
                <button onClick={onPause}>Pause stream</button>
            </section>
        </div>
    );
}

export default App;
