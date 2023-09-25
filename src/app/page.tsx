"use client";

import Image from "next/image";

const ROWS: number[] = Array.from(Array(9).keys());
const COLUMNS: number[] = Array.from(Array(12).keys());

import Hourglass from "../assets/hourglass.gif";
import Character from "@/components/character";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export default function Home() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    useEffect(() => {
        setHours(dayjs().hour() < 12 ? dayjs().hour() : dayjs().hour() - 12);
        setMinutes(dayjs().minute());

        setInterval(() => {
            setHours(dayjs().hour() < 12 ? dayjs().hour() : dayjs().hour() - 12);
            setMinutes(dayjs().minute());
        }, 1 * 1000);
    }, []);
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 antialiased">
            <div className="grid grid-cols-12 grid-rows-12 gap-y-2">
                {ROWS.map((row) => COLUMNS.map((col) => <Character key={`${row},${col}`} xIndex={col} yIndex={row} hours={hours} minutes={minutes} />))}
            </div>
            <Image src={Hourglass} alt="hourglass" className="mt-10 w-12 h-12" priority />
        </main>
    );
}
