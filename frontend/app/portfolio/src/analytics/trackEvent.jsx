


function trackEvent(eventType, params={}) {
    window.gtag('event', eventType, params)

}

export { trackEvent };
