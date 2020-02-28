'use strict';

const MIN_ROWS         = 1;
const MAX_ROWS         = 8;
const NUM_ROWS         = 2;
const COMPACT_STYLE    = false;
const MESSAGE_DURATION = 1500;

document.addEventListener('DOMContentLoaded', () => window.chrome.storage.sync.get({
    numRows      : NUM_ROWS,
    compactStyle : COMPACT_STYLE,
}, preferences => {
    document.getElementById('numRows').value        = preferences.numRows;
    document.getElementById('compactStyle').checked = preferences.compactStyle;
}));

document.getElementById('save').addEventListener('click', () => {
    const numRows      = Math.max(MIN_ROWS, Math.min(MAX_ROWS, document.getElementById('numRows').value || NUM_ROWS));
    const compactStyle = document.getElementById('compactStyle').checked || COMPACT_STYLE;

    window.chrome.storage.sync.set({
        numRows,
        compactStyle,
    }, () => {
        const message = document.getElementById('message');
        message.textContent = 'Settings saved';

        window.setTimeout(() => message.textContent = '', MESSAGE_DURATION);
    });
});
