import React from 'react';
import 'tachyons'

const ContactMe = () => {
    return(
            <React.Fragment>
            <header class="tc ph4 sans-serif">
                <h1 class="f5 f4-m f3-l fw2 black-90 mt0 lh-copy">
                    kurtbauer55@protonmail.com
                </h1>
                <a name="talk">
                <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                    let's talk
                </h2>
                </a>
            </header>
            <footer class="pv4 ph3 tc sans-serif">
                {/* TODO: revisit this item */}
            {/* <div class="ph3 ph4-ns pv6 bt b--black-10 black-70">
                <a href="mailto:" class="link b f3 f2-ns dim black-70 lh-solid">kurtbauer55@protonmail.com</a>
                <p class="f6 db b ttu lh-solid">Let's talk</p>
            </div> */}
        <a class="link near-black hover-silver dib mh3 tc" target="_blank" href="https://github.com/krtb" title="GitHub">
            <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" /></svg>
            <span class="f6 db">GitHub</span>
        </a>
        <a class="link hover-silver near-black dib mh3 tc" target="_blank" href="https://dev.to/krtb" title="Dev">
            <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="1 1 21 22" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/></svg>
            <span class="f6 db">Dev</span>
        </a>
                <a class="link hover-silver near-black dib mh3 tc" target="_blank" href="https://www.linkedin.com/in/kurt-bauer-231a25108/" title="LinkedIn">
            <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero" /></svg>
            <span class="f6 db">LinkedIn</span>
        </a>

            <a class="link hover-silver near-black dib mh3 tc" href="https://twitter.com/kurtbauer_" title="">
            <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero" /></svg>
            <span class="f6 db">Twitter</span>
        </a>
            <a class="link hover-silver near-black dib mh3 tc" target="_blank" href="https://codepen.io/kurtbauer/#" title="CodePen">
            <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.988 5.443c-.004-.02-.007-.04-.012-.058l-.01-.033c-.006-.017-.012-.034-.02-.05-.003-.012-.01-.023-.014-.034l-.023-.045-.02-.032-.03-.04-.024-.03c-.01-.013-.022-.026-.034-.038l-.027-.027-.04-.032-.03-.024-.012-.01L8.38.117c-.23-.155-.53-.155-.76 0L.305 4.99.296 5c-.012.007-.022.015-.032.023-.014.01-.027.02-.04.032l-.027.027-.034.037-.024.03-.03.04c-.006.012-.013.022-.02.033l-.023.045-.015.034c-.007.016-.012.033-.018.05l-.01.032c-.005.02-.01.038-.012.058l-.006.03C.002 5.5 0 5.53 0 5.56v4.875c0 .03.002.06.006.09l.007.03c.003.02.006.04.013.058l.01.033c.006.018.01.035.018.05l.015.033c.006.016.014.03.023.047l.02.03c.008.016.018.03.03.042.007.01.014.02.023.03.01.012.02.025.034.036.01.01.018.02.028.026l.04.033.03.023.01.01 7.31 4.876c.116.078.248.117.382.116.134 0 .266-.04.38-.116l7.314-4.875.01-.01c.012-.007.022-.015.032-.023.014-.01.027-.02.04-.032l.027-.027.034-.037.024-.03.03-.04.02-.032.023-.046.015-.033.018-.052.01-.033c.005-.02.01-.038.013-.058 0-.01.003-.02.004-.03.004-.03.006-.06.006-.09V5.564c0-.03-.002-.06-.006-.09l-.007-.03zM8 9.626L5.568 8 8 6.374 10.432 8 8 9.626zM7.312 5.18l-2.98 1.993-2.406-1.61 5.386-3.59v3.206zM3.095 8l-1.72 1.15v-2.3L3.095 8zm1.237.828l2.98 1.993v3.208l-5.386-3.59 2.406-1.61zm4.355 1.993l2.98-1.993 2.407 1.61-5.387 3.59v-3.206zM12.905 8l1.72-1.15v2.3L12.905 8zm-1.237-.827L8.688 5.18V1.97l5.386 3.59-2.406 1.61z" fill-rule="nonzero" /></svg>
            <span class="f6 db">Code Pen</span>
        </a>
    </footer>
        </React.Fragment>
    );
}

export default ContactMe