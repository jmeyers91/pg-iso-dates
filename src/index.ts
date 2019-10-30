interface Pg {
  types: {
    setTypeParser(
      typeId: number,
      parseFn: (value: string | null) => string | null
    ): any;
  };
}

export default function pgIsoDates(pg: Pg) {
  const TIMESTAMPTZ_OID = 1184;
  const TIMESTAMP_OID = 1114;
  pg.types.setTypeParser(TIMESTAMPTZ_OID, parseDate);
  pg.types.setTypeParser(TIMESTAMP_OID, parseDate);
}

function parseDate(value: string | null): string | null {
  if (!value) {
    return null;
  }
  return new Date(value).toISOString();
}
