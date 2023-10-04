"use client";

import Script from 'next/script'

export const Scripts = () => {
    return (
        <div>
            <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=641d471fd3455b282e312af5"  />
            <Script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js" />
            <Script src="/feedbackFin.js" />
            <Script src="/script.js" />
            <div dangerouslySetInnerHTML={{ __html: `
              <button data-feedbackfin-button id="feedback-button"><image class="feedback-icon" src="/feedback-icon.svg" alt="Give us feedback"></button>
            `}}></div>
        </div>
    )
}

