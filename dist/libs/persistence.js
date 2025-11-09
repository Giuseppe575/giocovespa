const memoryFallback = new Map();
function resolveStorage() {
    if (typeof window === "undefined")
        return null;
    const candidates = [
        window.persistentStorage,
        getLocalStorageSafe(),
    ];
    for (const candidate of candidates) {
        if (!candidate)
            continue;
        try {
            const testKey = "__vespa_storage_test__";
            candidate.setItem(testKey, "1");
            candidate.removeItem(testKey);
            return candidate;
        }
        catch (err) {
            // Ignore and try next candidate.
        }
    }
    return null;
}
function getLocalStorageSafe() {
    try {
        return window.localStorage;
    }
    catch (err) {
        return null;
    }
}
const storage = resolveStorage();
export const persistence = {
    setItem(key, value) {
        if (storage) {
            try {
                storage.setItem(key, value);
                return Promise.resolve();
            }
            catch (err) {
                console.warn("Impossibile salvare i dati in storage persistente", err);
            }
        }
        memoryFallback.set(key, value);
        return Promise.resolve();
    },
    getItem(key) {
        if (storage) {
            try {
                return Promise.resolve(storage.getItem(key));
            }
            catch (err) {
                console.warn("Impossibile leggere i dati da storage persistente", err);
            }
        }
        return Promise.resolve(memoryFallback.get(key) ?? null);
    },
    removeItem(key) {
        if (storage) {
            try {
                storage.removeItem(key);
                return Promise.resolve();
            }
            catch (err) {
                console.warn("Impossibile rimuovere i dati da storage persistente", err);
            }
        }
        memoryFallback.delete(key);
        return Promise.resolve();
    },
    clear() {
        if (storage) {
            try {
                storage.clear();
                return Promise.resolve();
            }
            catch (err) {
                console.warn("Impossibile pulire lo storage persistente", err);
            }
        }
        memoryFallback.clear();
        return Promise.resolve();
    },
};
