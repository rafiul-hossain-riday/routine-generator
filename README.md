#### Technology used :
- SvelteKit
- Tailwind
- [PWA](https://thecodingchannel.hashnode.dev/turn-your-sveltekit-app-into-a-pwa-in-3-simple-steps){:target="_blank"}
- SSG
- SkeletonUI
- TypeScript

##### Live site : https://routine-generator-rafi-riday.netlify.app/

```ts
const routineData: Writable<
    ((null[] | (string | {colspan: number;})[])[] | (string[] | null[] | (string[] | {colspan: number;})[])[])[]
>

const additionalData: Writable<{
    cellClass: string;
    firstRowColumnClass: string;
    errorCellStyle: string;
    cellStyle: {
        subjectAbbreviation: string;
    };
}>
```

#### Edit routineData from sidebar :
```js
[
    [[cell], [cell], [cell, ...]]
    [...],
    [...],
    ...
]
```

#### Rules :
- Here `[cell]` should be like `["string", "string", { colspan: number, rowspan: number }]` for a normal cell
- If a cell needs to take `n` ammount of columns/rows, set the `rowspan`/`colspan` number to `n`.
- You can edit, add, remove `[cell]` from the routineData editor in the side bar
- if you want to create more than one cell inside a parent cell, then you have to make `[cell]` as `[["string"], ["string"], { colspan: number }]`, this will add more cells like a column
- If you want to add a `No Class` cell, then you have to use `[null]`, you also have options to use `{ colspan: number }`
- You can change styles in the `additionalData` section, here you will find raw code and relatable options
- The `cellStyle` object will search the keys in the cells and will add a style which is the keys item
