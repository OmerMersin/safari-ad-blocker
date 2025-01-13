const blockAds = () => {
    const adSelectors = [
        '.video-ads', // Video ad container
        '.ytp-ad-module', // Overlay ads
        '.ytp-ad-image-overlay', // Image ads
        '#player-ads', // Player ads
        '.ytp-ad-progress', // Ad progress bar
        '.ytp-ad-preview-container', // Ad preview container
        '.ytp-ad-overlay-container', // Ad overlay container
        '.ytd-in-feed-ad-layout-renderer', // Main YouTube screen ads
        '.ytd-ad-slot-renderer' // Sidebar or inline ads
    ];

    adSelectors.forEach(selector => {
        const ads = document.querySelectorAll(selector);
        ads.forEach(ad => {
            ad.remove(); // Completely remove the element from the DOM
        });
    });

    // Skip skippable ads
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
        skipButton.click();
        console.log('Ad skipped!');
    }

    console.log('Ads and ad placeholders removed!');
};

// Observe changes to the DOM
const observer = new MutationObserver(blockAds);
observer.observe(document, { childList: true, subtree: true });

// Run the blocker immediately on page load
blockAds();
