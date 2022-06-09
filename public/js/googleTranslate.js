/* API Cloud Translation */

let bannerTranslate = document.querySelector('.goog-te-banner');
let bodysPages = document.querySelector('body')


function loadGoogleTranslate() {
    new google.translate.TranslateElement({pageLanguage:'es', layout:google.translate.TranslateElement.SIMPLE}, "google_element");
    if(bannerTranslate.style.display === 'block') {
        
    }
}


/* function googleTranslateElementInit(){
    new google.translate.TranslateElement({pageLanguage:'es',layout:google.translate.TranslateElement.InlineLayout.SIMPLE},'google_translate_element')
} 

 if(typeof(document.querySelector) == 'goog-te-banner') {
        document.querySelector('.goog-te-banner').setAttribute('style', 'position: relative');
    }
*/