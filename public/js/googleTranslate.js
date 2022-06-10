/* API Cloud Translation */

let bannerTranslate = document.querySelector('.goog-te-banner-frame');
/* let bodysPages = document.querySelectorAll('.pages'); */
/* let bodysPagesBottom = document.querySelectorAll('.pagesBottom');  */


function loadGoogleTranslate() {

    new google.translate.TranslateElement({pageLanguage:'es', layout:google.translate.TranslateElement.SIMPLE}, "google_element");
    
    /* if(bannerTranslate.style.display === 'block') {
        bodysPages.classList.add('.pages')
    }  */ /* {
        bodysPagesBottom.classList.add('.pagesBottom')
    }  */
}
/* else(bodysPages.classList.add('.pagesBottom')) */











/* function googleTranslateElementInit(){
    new google.translate.TranslateElement({pageLanguage:'es',layout:google.translate.TranslateElement.InlineLayout.SIMPLE},'google_translate_element')
} 
 if(typeof(document.querySelector) == 'goog-te-banner') {
        document.querySelector('.goog-te-banner').setAttribute('style', 'position: relative');
    }
*/