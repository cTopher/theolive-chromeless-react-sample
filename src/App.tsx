import {useState} from "react";
import "./App.css";
import THEOLive from "./components/TheolivePlayer";

// Change these to your own channelIds
const CHANNEL_1 = "yourFirstChannelId"
const CHANNEL_2 = "yourSecondChannelId"

function App() {
    const [channelId, setChannelId] = useState(CHANNEL_1)
    const [visible, setVisible] = useState(true)

    return (
        <div className="App">
            <header>
                <h1>Showcasing THEOlive chromeless player with React</h1>
            </header>
            <section className="App-buttons">
                <button onClick={() => setChannelId(CHANNEL_1)}>channel 1</button>
                <button onClick={() => setChannelId(CHANNEL_2)}>channel 2</button>
                <button onClick={() => setVisible(v => !v)}>Toggle</button>
            </section>
            <section>
                {visible && <THEOLive channelId={channelId}/>}
            </section>
        </div>
    );
}

export default App;
