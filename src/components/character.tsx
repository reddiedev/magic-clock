import {
    isElementEight,
    isElementEleven,
    isElementFive,
    isElementFivePref,
    isElementFour,
    isElementHalf,
    isElementIs,
    isElementIt,
    isElementNine,
    isElementOclock,
    isElementOne,
    isElementPast,
    isElementQuarter,
    isElementSeven,
    isElementSix,
    isElementTen,
    isElementTenPref,
    isElementThree,
    isElementTo,
    isElementTwelve,
    isElementTwenty,
    isElementTwo
} from "@/utils/element";

const WORDS = ["ITRISOTWENTY", "QUARTERAHALF", "TENFIVELPAST", "TOUTWELVEONE", "TWOTHREEFOUR", "FIVESIXSEVEN", "EIGHTNINETEN", "LKIELEVENALM", "UO'CLOCKDLWP"];

export default function Character({ xIndex, yIndex, time }: { xIndex: number; yIndex: number; time: Date }) {
    const word = WORDS[yIndex];
    const character = word.charAt(xIndex);
    // check what element character is in
    const isIt = isElementIt({ xIndex, yIndex });
    const isIs = isElementIs({ xIndex, yIndex });

    const isTwenty = isElementTwenty({ xIndex, yIndex });
    const isQuarter = isElementQuarter({ xIndex, yIndex });
    const isHalf = isElementHalf({ xIndex, yIndex });
    const isTenPref = isElementTenPref({ xIndex, yIndex });
    const isFivePref = isElementFivePref({ xIndex, yIndex });

    const isPast = isElementPast({ xIndex, yIndex });
    const isTo = isElementTo({ xIndex, yIndex });

    const isTwelve = isElementTwelve({ xIndex, yIndex });
    const isOne = isElementOne({ xIndex, yIndex });
    const isTwo = isElementTwo({ xIndex, yIndex });
    const isThree = isElementThree({ xIndex, yIndex });
    const isFour = isElementFour({ xIndex, yIndex });
    const isFive = isElementFive({ xIndex, yIndex });
    const isSix = isElementSix({ xIndex, yIndex });
    const isSeven = isElementSeven({ xIndex, yIndex });
    const isEight = isElementEight({ xIndex, yIndex });
    const isNine = isElementNine({ xIndex, yIndex });
    const isTen = isElementTen({ xIndex, yIndex });
    const isEleven = isElementEleven({ xIndex, yIndex });
    const isOclock = isElementOclock({ xIndex, yIndex });

    const minutes = time.getMinutes();
    const hours = time.getHours() < 12 ? time.getHours() : time.getHours() - 12;

    // check if element is active
    const isItActive = true;
    const isIsActive = true;

    const isPastActive = minutes > 5 && minutes <= 30;
    const isToActive = minutes > 30;

    const isFivePrefActive = (minutes >= 5 && minutes < 10) || (minutes >= 35 && minutes < 40) || minutes >= 55;
    const isTenPrefActive = (minutes >= 10 && minutes < 15) || (minutes >= 50 && minutes < 55);
    const isQuarterActive = (minutes >= 15 && minutes < 20) || (minutes >= 45 && minutes < 50);
    const isTwentyActive = (minutes >= 20 && minutes < 30) || (minutes >= 35 && minutes < 45);
    const isHalfActive = minutes >= 30 && minutes < 35;

    const isOneActive = (hours == 0 && isToActive) || (hours == 1 && minutes <= 30);
    const isTwoActive = (hours == 1 && isToActive) || (hours == 2 && minutes <= 30);
    const isThreeActive = (hours == 2 && isToActive) || (hours == 3 && minutes <= 30);
    const isFourActive = (hours == 3 && isToActive) || (hours == 4 && minutes <= 30);
    const isFiveActive = (hours == 4 && isToActive) || (hours == 5 && minutes <= 30);
    const isSixActive = (hours == 5 && isToActive) || (hours == 6 && minutes <= 30);
    const isSevenActive = (hours == 6 && isToActive) || (hours == 7 && minutes <= 30);
    const isEightActive = (hours == 7 && isToActive) || (hours == 8 && minutes <= 30);
    const isNineActive = (hours == 8 && isToActive) || (hours == 9 && minutes <= 30);
    const isTenActive = (hours == 9 && isToActive) || (hours == 10 && minutes <= 30);
    const isElevenActive = (hours == 10 && isToActive) || (hours == 11 && minutes <= 30);
    const isTwelveActive = (hours == 0 && minutes <= 30) || (hours == 11 && isToActive);
    const isOclockActive = minutes < 5;

    const isActive =
        (isIt && isItActive) ||
        (isIs && isIsActive) ||
        (isPast && isPastActive) ||
        (isTo && isToActive) ||
        (isFivePref && isFivePrefActive) ||
        (isTenPref && isTenPrefActive) ||
        (isQuarter && isQuarterActive) ||
        (isTwenty && isTwentyActive) ||
        (isHalf && isHalfActive) ||
        (isOne && isOneActive) ||
        (isTwo && isTwoActive) ||
        (isThree && isThreeActive) ||
        (isFour && isFourActive) ||
        (isFive && isFiveActive) ||
        (isSix && isSixActive) ||
        (isSeven && isSevenActive) ||
        (isEight && isEightActive) ||
        (isNine && isNineActive) ||
        (isTen && isTenActive) ||
        (isEleven && isElevenActive) ||
        (isTwelve && isTwelveActive) ||
        (isOclock && isOclockActive);

    return (
        <span
            className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${
                isActive ? "text-white drop-shadow-glow" : "text-gray-600"
            } flex items-center justify-center font-bold transition-all ease-in-out duration-150 md:text-lg lg:text-xl`}>
            {character}
        </span>
    );
}
