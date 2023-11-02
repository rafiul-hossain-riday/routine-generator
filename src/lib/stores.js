import { localStorageStore } from '@skeletonlabs/skeleton';

export const routineData = localStorageStore('routine-data', [
    [["Day"], ["8.30", "to 9.30"], ["9.30", "to 10.30"], ["10.30", "to 11.30"], ["11.30", "to 12.30"], ["12.30", "to 1.30"], ["1.30", "to 2.30"], ["2.30", "to 3.30"], ["3.30", "to 4.30"]],
    [["Sat"], ["CHEM", "E 203"], ["PHY", "E 304"], [null], ["TE", "E 302"], ["SAT", "ABY 919", { colspan: 2 }], [null], [null]],
    [["Sun"], [null], ["SAT", "ABY 920"], [null], [null], ["CHEM", "E 305"], [null], ["MAT", "E 305", { colspan: 2 }]],
    [["Mon"], [null], [null], [null], [null], [["PHY", "D 7"], ["CHEM", "D 8"], { colspan: 2 }], [["PHY", "D 8"], ["CHEM", "D 7"]], [null]],
    [["Tues"], ["ENG LAB D 8", "FDA LAB", { colspan: 2 }], ["ENG LAB D 7", "FDA LAB", { colspan: 2 }], ["TE", "E 302"], ["PHY", "E 202"], [null], [null]],
    [["Wed"], ["HUM", "E 304"], [null], ["MAT", "E 303"], ["TE", "E 302"], ["ENG", "E 302"], [null], [null], [null]],
    [["Thurs"], [null], [null], [null], ["ENG", "E 203"], [null], [null], [null], [null]]
]);

export const additionalData = localStorageStore('additional-data', {
    cellClass: 'py-1 px-6',
    firstRowColumnClass: '!bg-surface-300-600-token',
    errorCellStyle: 'background: #fff2;',
    cellStyle: {
        CHEM: 'background: #fce1e4; color: #000;',
        PHY: 'background: #9cb9ff; color: #000;',
        TE: 'background: #a2d2ff; color: #000;',
        SAT: 'background: #adf7b6; color: #000;',
        MAT: 'background: #ffc09f; color: #000;',
        ENG: 'background: #eaf2d7; color: #000;',
        HUM: 'background: #a7bed3; color: #000;',
    }
});
