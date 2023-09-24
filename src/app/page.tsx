"use client";
import { isElementIs, isElementIt } from "@/utils/element";
import { useEffect, useState } from "react";

const WORDS = ["ITRISOTWENTY", "QUARTERAHALF", "TENFIVELPAST", "TOUTWELVEONE", "TWOTHREEFOUR", "FIVESIXSEVEN", "EIGHTNINETEN", "LKIELEVENALM", "UO'CLOCKDLWP"];

const ROWS: number[] = Array.from(Array(9).keys());
const COLUMNS: number[] = Array.from(Array(12).keys());

export function Character({ xIndex, yIndex }: { xIndex: number; yIndex: number; time: Date }) {
    const word = WORDS[yIndex];
    const character = word.charAt(xIndex);
    // check what element character is in
    const isIt = isElementIt({ xIndex, yIndex });
    const isIs = isElementIs({ xIndex, yIndex });

    // check if element is active
    const isItActive = true;
    const isIsActive = true;

    const isActive = (isIt && isItActive) || (isIs && isIsActive);
    return (
        <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${isActive ? "text-white" : "text-gray-600"} flex items-center justify-center font-bold`}>
            {character}
        </div>
    );
}

export default function Home() {
    const [time, setTime] = useState(new Date());

    // update current time every minute
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 60 * 1000);
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 antialiased">
            <div className="grid grid-cols-12 grid-rows-12 gap-y-2">
                {ROWS.map((row) => COLUMNS.map((col) => <Character key={`${row},${col}`} xIndex={col} yIndex={row} time={time} />))}
            </div>
        </main>
    );
}
