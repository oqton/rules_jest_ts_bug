import { hashString } from "@oqton/lib1";

export function decorateHash(s: string) {
    return ''.concat('11', hashString(s), '22');
}
