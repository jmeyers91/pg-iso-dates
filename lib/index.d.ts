interface Pg {
    types: {
        setTypeParser(typeId: number, parseFn: (value: string | null) => string | null): any;
    };
}
export default function pgIsoDates(pg: Pg): void;
export {};
//# sourceMappingURL=index.d.ts.map