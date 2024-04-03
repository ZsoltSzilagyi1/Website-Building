// Function to fetch language data
async function fetchLanguageData(lang) {
    const response = await fetch(`lang/${lang}.json`);
    return response.json();
}

// Function to set the language preference
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        element.textContent = langData[key];
    });

}

// Function to change language
// !!!Ca sa o putem folosi in fisierul HTML se declara cu window
window.changeLanguage = function (lang) {
    console.log('limba aleasa', lang);
    setLanguagePreference(lang);

    const langData = fetchLanguageData(lang);
    updateContent(langData);



}




// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'ro';
    document.documentElement.setAttribute('lang', userPreferredLanguage);
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);

});
