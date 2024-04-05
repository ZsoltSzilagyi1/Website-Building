const roBTN = document.getElementById("ro-button");
const enBTN = document.getElementById("en-button");
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
    document.querySelectorAll('[data-typed-tr]').forEach(element => {
        const key = element.getAttribute('data-typed-tr');
        element.setAttribute('data-typed-items', langData[key]);
    });

}

// Function to change language
// !!!Ca sa o putem folosi in fisierul HTML se declara cu window
window.changeLanguage = function (lang) {
    console.log('limba aleasa', lang);
    // if(lang == "ro"){
    //     roBTN.classList.add("activeLang");
    //     enBTN.classList.add("notActiveLang");
    // }else{
    //     enBTN.classList.add("activeLang");
    //     roBTN.classList.add("notActiveLang");
    // }
    setLanguagePreference(lang);

    const langData = fetchLanguageData(lang);
    updateContent(langData);



}


// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    if(userPreferredLanguage == "ro"){
        roBTN.classList.add("activeLang");
        enBTN.classList.add("notActiveLang");
    }else{
        enBTN.classList.add("activeLang");
        roBTN.classList.add("notActiveLang");
    }
    document.documentElement.setAttribute('lang', userPreferredLanguage);
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
});

roBTN.addEventListener("click",async () => {
    let lang = "ro";
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
    setLanguagePreference(lang);
})


enBTN.addEventListener("click",async () => {
    let lang = "en";
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
    setLanguagePreference(lang);
})
