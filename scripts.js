// scroll

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// scroll


//pop-up //

document.addEventListener('DOMContentLoaded', () => {
    const privacyPolicyPopup = document.getElementById('privacyPolicyPopup');
    const termsConditionsPopup = document.getElementById('termsConditionsPopup');
    const popupOverlay = document.getElementById('popupOverlay');

    const openPrivacyPolicy = document.getElementById('openPrivacyPolicy');
    const openTermsConditions = document.getElementById('openTermsConditions');

    const closePrivacyPolicy = document.getElementById('closePrivacyPolicy');
    const closeTermsConditions = document.getElementById('closeTermsConditions');

    openPrivacyPolicy.addEventListener('click', () => {
        showPopup(privacyPolicyPopup);
    });

    openTermsConditions.addEventListener('click', () => {
        showPopup(termsConditionsPopup);
    });

    closePrivacyPolicy.addEventListener('click', () => {
        hidePopup(privacyPolicyPopup);
    });

    closeTermsConditions.addEventListener('click', () => {
        hidePopup(termsConditionsPopup);
    });

    popupOverlay.addEventListener('click', () => {
        hidePopup(privacyPolicyPopup);
        hidePopup(termsConditionsPopup);
    });

    function showPopup(popup) {
        popupOverlay.style.display = 'block';
        popup.style.display = 'block';
    }

    function hidePopup(popup) {
        popupOverlay.style.display = 'none';
        popup.style.display = 'none';
    }
});


//pop-up //