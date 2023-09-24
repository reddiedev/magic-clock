export function isElementIt({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex > 0) return false;
    if (xIndex > 1) return false;

    return true;
}

export function isElementIs({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex > 0) return false;
    if (xIndex < 3 || xIndex > 4) return false;

    return true;
}

export function isElementTwenty({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex > 0) return false;
    if (xIndex < 6) return false;

    return true;
}

export function isElementQuarter({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 1) return false;
    if (xIndex > 6) return false;

    return true;
}

export function isElementHalf({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 1) return false;
    if (xIndex < 8) return false;

    return true;
}

export function isElementTenPref({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 2) return false;
    if (xIndex > 2) return false;

    return true;
}

export function isElementFivePref({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 2) return false;
    if (xIndex < 3 || xIndex > 6) return false;

    return true;
}

export function isElementPast({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 2) return false;
    if (xIndex < 8) return false;

    return true;
}

export function isElementTo({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 3) return false;
    if (xIndex > 1) return false;

    return true;
}

export function isElementTwelve({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 3) return false;
    if (xIndex < 3 || xIndex > 8) return false;

    return true;
}

export function isElementOne({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 3) return false;
    if (xIndex < 9) return false;

    return true;
}

export function isElementTwo({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 4) return false;
    if (xIndex > 2) return false;

    return true;
}

export function isElementThree({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 4) return false;
    if (xIndex < 3 || xIndex > 7) return false;

    return true;
}

export function isElementFour({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 4) return false;
    if (xIndex < 8) return false;

    return true;
}

export function isElementFive({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 5) return false;
    if (xIndex > 3) return false;

    return true;
}

export function isElementSix({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 5) return false;
    if (xIndex < 4 || xIndex > 6) return false;

    return true;
}

export function isElementSeven({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 5) return false;
    if (xIndex < 7) return false;

    return true;
}

export function isElementEight({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 6) return false;
    if (xIndex > 4) return false;

    return true;
}

export function isElementNine({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 6) return false;
    if (xIndex < 5 || xIndex > 8) return false;

    return true;
}

export function isElementTen({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 6) return false;
    if (xIndex < 9) return false;

    return true;
}

export function isElementEleven({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 7) return false;
    if (xIndex < 3 || xIndex > 8) return false;

    return true;
}

export function isElementOclock({ xIndex, yIndex }: { xIndex: number; yIndex: number }): boolean {
    if (yIndex !== 8) return false;
    if (xIndex == 0 || xIndex > 7) return false;

    return true;
}
