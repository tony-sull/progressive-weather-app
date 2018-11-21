const STORAGE_KEY = 'svelte-store-state';
const detectDate = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;

export function localStorageSync() {
    function onState({ current }) {
        putState(current);
    }

    function rehydrate() {
        return getState();
    }

    return {
        onState,
        rehydrate
    };
}

function dateReviver(key, value) {
    if (typeof value === 'string' && detectDate.test(value)) {
        return new Date(value);
    }
    return value;
}

function putState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getState() {
    return typeof localStorage !== 'undefined'
        ? JSON.parse(localStorage.getItem(STORAGE_KEY), dateReviver)
        : undefined;
}