"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ROWS: number[] = Array.from(Array(9).keys());
const COLUMNS: number[] = Array.from(Array(12).keys());

import Hourglass from "../assets/hourglass.gif";
import Character from "@/components/character";

export default function Home() {
    const [time, setTime] = useState(new Date());
    console.log(time);

    // update current time every minute
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1 * 1000);
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 antialiased">
            <div className="grid grid-cols-12 grid-rows-12 gap-y-2">
                {ROWS.map((row) => COLUMNS.map((col) => <Character key={`${row},${col}`} xIndex={col} yIndex={row} time={time} />))}
            </div>
            <Image src={Hourglass} alt="hourglass" className="mt-10 w-12 h-12" priority />
        </main>
    );
}
