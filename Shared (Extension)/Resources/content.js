const blockAds = () => {
    const adSelectors = [
        '.video-ads', // Video ad container
        '.ytp-ad-module', // Overlay ads
        '.ytp-ad-image-overlay', // Image ads
        '#player-ads', // Player ads
    ];

    adSelectors.forEach(selector => {
        const ads = document.querySelectorAll(selector);
        ads.forEach(ad => ad.style.display = 'none');
    });

    console.log('YouTube Ad Blocker: Ads blocked!');
};

// Observe changes to the DOM
const observer = new MutationObserver(blockAds);
observer.observe(document, { childList: true, subtree: true });

// Run the blocker immediately on page load
blockAds();
