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
            setPlayer(new Player(node))
        }
    }, []);

    useEffect(() => {
        return () => {
            player?.destroy()
        }
    }, [player])

    useEffect(() => {
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
