import { BMITypes } from 'src/app/core/models';

export function BMICalc(height: number, mass: number): number {
    return (mass / Math.pow(height, 2)) * 100;
}

export function BMIType(value: number): BMITypes {
    if (value < 16) {
        return BMITypes.Below16;
    }
    if (value >= 16 && value < 25) {
        return BMITypes.Betwen1624;
    }
    if (value >= 25 && value < 40) {
        return BMITypes.Betwen2540;
    }
    if (value >= 40) {
        return BMITypes.Above40;
    }
    return BMITypes.Undefined;
}
