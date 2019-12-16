export function birthYearConvert(birthYear: string): number {
    return Number(birthYear.replace('BBY', ''));
}
