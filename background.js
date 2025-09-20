chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    const url = changeInfo.url;

    if (url && url.includes('youtube.com/watch') && url.includes('start_radio') && url.includes('&list=')) {
        const newUrl = url.replace(/&list=.*/, '');
        chrome.tabs.update(tabId, { url: newUrl });
    }
});