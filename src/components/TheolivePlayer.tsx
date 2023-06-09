import {Player} from "@theolive/player/chromeless";
import {useCallback, useEffect, useState} from "react";
import './TheolivePlayer.css'

interface Props {
    channelId: string;
}

export default function TheolivePlayer({channelId}: Props) {
    const [player, setPlayer] = useState<Player | null>(null);
    const onMount = useCallback((node: HTMLElement | null) => {
        if (node) {
            console.log("creating player")
            setPlayer(new Player(node))
        }
    }, []);

    useEffect(() => {
        return () => {
            if (player) {
                console.log("destroying player")
                player.destroy()
            }
        }
    }, [player])

    useEffect(() => {
        console.log("loading channel", channelId)
        player?.loadChannel(channelId).catch(console.error)
    }, [player, channelId])

    return (
        <div className="TheolivePlayer">
            <div ref={onMount}/>
            <div className="TheolivePlayer-buttons">
                <button onClick={() => player?.play()}>Play</button>
                <button onClick={() => player?.pause()}>Pause</button>
            </div>
        </div>
    );
}
