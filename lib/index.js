"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pgIsoDates(pg) {
    const TIMESTAMPTZ_OID = 1184;
    const TIMESTAMP_OID = 1114;
    pg.types.setTypeParser(TIMESTAMPTZ_OID, parseDate);
    pg.types.setTypeParser(TIMESTAMP_OID, parseDate);
}
exports.default = pgIsoDates;
function parseDate(value) {
    if (!value) {
        return null;
    }
    return new Date(value).toISOString();
}
//# sourceMappingURL=index.js.map