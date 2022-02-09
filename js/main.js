$(document).ready(function() {
    $('.btn-show-all').click(function(event) {
        $('.profile-hidden').fadeIn('slow/400/fast');
        $(this).fadeOut();
        return false;
    });


    $('.video-gallery').poptrox({
        preload: false, // If true, preload fullsize images in
        // the background
        baseZIndex: 1000, // Base Z-Index
        fadeSpeed: 300, // Global fade speed
        overlayColor: '#000000', // Overlay color
        overlayOpacity: 0.6, // Overlay opacity
        windowMargin: 50, // Window margin size (in pixels; only comes into
        // play when an image is larger than the viewport)
        windowHeightPad: 0, // Window height pad
        selector: 'a', // Anchor tag selector
        caption: null, // Caption settings (see docs)
        popupSpeed: 300, // Popup (resize) speed
        popupWidth: 200, // Popup width
        popupHeight: 100, // Popup height
        popupIsFixed: false, // If true, popup won't resize to fit images
        useBodyOverflow: true, // If true, the BODY tag is set to overflow: hidden
        // when the popup is visible
        usePopupEasyClose: true, // If true, popup can be closed by clicking on
        // it anywhere
        usePopupForceClose: false, // If true, popup can be closed even while content
        // is loading
        usePopupLoader: true, // If true, show the popup loader
        usePopupCloser: true, // If true, show the popup closer button/link
        usePopupCaption: false, // If true, show the popup image caption
        usePopupNav: false, // If true, show (and use) popup navigation
        usePopupDefaultStyling: true, // If true, default popup styling will be applied
        // (background color, text color, etc)
        popupBackgroundColor: '#FFFFFF', // (Default Style) Popup background color (when 
        // usePopupStyling = true)
        popupTextColor: '#000000', // (Default Style) Popup text color (when
        // usePopupStyling = true)
        popupLoaderTextSize: '2em', // (Default Style) Popup loader text size
        popupCloserBackgroundColor: '#000000', // (Default Style) Popup closer background color
        // (when usePopupStyling = true)
        popupCloserTextColor: '#FFFFFF', // (Default Style) Popup closer text color (when
        // usePopupStyling = true)
        popupCloserTextSize: '20px', // (Default Style) Popup closer text size
        popupPadding: 10, // (Default Style) Popup padding (when
        // usePopupStyling = true)
        popupCaptionHeight: 60, // (Default Style) Popup height of caption area
        popupCaptionTextSize: null, // (Default Style) Popup caption text size
        popupBlankCaptionText: '(untitled)', // Applied to images that don't have captions
        // (when captions are enabled)
        popupCloserText: '&#215;', // Popup closer text
        popupLoaderText: '&bull;&bull;', // Popup loader text
        popupClass: 'poptrox-popup', // Popup class
        popupSelector: null, // (Advanced) Popup selector (use this if you 
        // want to replace the built-in popup)
        popupLoaderSelector: '.loader', // (Advanced) Popup Loader selector
        popupCloserSelector: '.closer', // (Advanced) Popup Closer selector
        popupCaptionSelector: '.caption', // (Advanced) Popup Caption selector
        popupNavPreviousSelector: '.nav-previous', // (Advanced) Popup Nav Previous selector
        popupNavNextSelector: '.nav-next', // (Advanced) Popup Nav Next selector
        onPopupClose: null, // Called when popup closes
        onPopupOpen: null // Called when popup opens

    });


    $(".loyalty-line").scrollie({
        direction: "both",
        scrollOffset: -100,
        scrollRatio: 2,
        scrollingInView: function(l) {
            l.addClass("loyalty-move")
        }
    })





});


if ($(window).width() < 1023) {

    $('.nav li a').click(function(event) {

        $(".navbar-toggle").click();
    });

};