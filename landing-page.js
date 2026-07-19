// CREATE FUNCTIONS
function btnSelectDeselect(button) {
    button.classList.toggle('selected-btn');
    button.classList.toggle('unselected-btn');

    checkbox = document.querySelector('.comp-checkbox')
    if (checkbox.checked) {
        checkbox.checked = false
    }
}

function compSelectDeselectAll(checkbox) {
    compButtons = document.querySelectorAll('.compartment-icon')
    compButtons.forEach(compButton => {
        compButton.classList.toggle('selected-btn', checkbox.checked);
        compButton.classList.toggle('unselected-btn', !checkbox.checked);
    });
}

// CREATE THE HEADER DIV
const headerDiv = document.createElement('div')
headerDiv.id = 'header-div'

/////// Add the website logo
const logoHeaderDiv = document.createElement('div')
logoHeaderDiv.id = 'logo-header-div'

const logoImage = document.createElement('img')
logoImage.src = './other-graphics/logo-grid.svg'
logoImage.id = 'logo-grid'

const logoText = document.createElement('div')
logoText.textContent = 'Marker Project'
logoText.id = 'logo-text'

logoHeaderDiv.append(logoImage, logoText)
headerDiv.appendChild(logoHeaderDiv)

/////// Create div for About, Contact, Download
const navigationHeaderDiv = document.createElement('div')
navigationHeaderDiv.id = 'navigation-header-div'

const aboutNavigation = document.createElement('button')
aboutNavigation.textContent = 'About'
aboutNavigation.id = 'about-navigation'
aboutNavigation.className = 'navigation-btn'

const contactNavigation = document.createElement('button')
contactNavigation.textContent = 'Contact'
contactNavigation.id = 'contact-navigation'
contactNavigation.className = 'navigation-btn'

const downloadNavigation = document.createElement('button')
downloadNavigation.textContent = 'Download'
downloadNavigation.id = 'download-navigation'
downloadNavigation.className = 'navigation-btn'

navigationHeaderDiv.append(aboutNavigation, contactNavigation, downloadNavigation)

headerDiv.appendChild(navigationHeaderDiv)

/////// Attach header div to the main document
document.body.appendChild(headerDiv)



// CREATE THE MIDDLE DIV
const middleDiv = document.createElement('div')
middleDiv.id = 'middle-div'

////// Create the compartment seleciton div
const compartmentsDiv = document.createElement('div')
compartmentsDiv.id = 'compartments-div'

////////// Create description div
const descriptionCompartmentsDiv = document.createElement('div')
descriptionCompartmentsDiv.textContent = '1. Select your favourite compartment(s)'
descriptionCompartmentsDiv.className = 'description-div'

////////// Create div with boxes for each compartment
const compartments = {
    'Actin Patches': './icons/actin-patches.svg',
    'Eisosomes': './icons/eisosomes.svg',
    'Endoplasmic Reticulum': './icons/endoplasmic-reticulum.svg',
    'Endosomes': './icons/endosomes.svg',
    'Golgi (Early)': './icons/golgi-early.svg',
    'Golgi (Late)': './icons/golgi-late.svg',
    'Kinetochores': './icons/kinetochores.svg',
    'Lipid Droplets': './icons/lipid-droplets.svg',
    'Mitochondria': './icons/mitochondria.svg',
    'Nuclear Membrane': './icons/inner-nuclear-membrane.svg',
    'Nucleolus': './icons/nucleolus.svg',
    'Nucleus': './icons/nucleus.svg',
    'Peroxisomes': './icons/peroxisomes.svg',
    'Septin': './icons/septin.svg',
    'Spindle Pole Bodies': './icons/spindle-pole-bodies.svg',
    'Vacuoles': './icons/vacuoles.svg'
}

const compartmentsGridDiv = document.createElement('div')
compartmentsGridDiv.id = 'compartments-grid-div'
for (const comp in compartments) {
    const singleCompartmentDiv = document.createElement('div')
    singleCompartmentDiv.className = 'single-compartment-div'
    
    //---------------------------------------------------------------------
    const compartmentImage = document.createElement('button')
    compartmentImage.className = 'compartment-icon unselected-btn'

    compartmentImage.style.backgroundImage = `url(${compartments[comp]})`
    compartmentImage.style.backgroundRepeat = 'no-repeat'
    compartmentImage.style.width = '120px'
    compartmentImage.style.height = '120px'

    compartmentImage.addEventListener('click', (event) => {
        btnSelectDeselect(event.currentTarget)
    })
    
    //---------------------------------------------------------------------
    const compartmentName = document.createElement('div')
    compartmentName.textContent = comp
    compartmentName.className = 'compartment-name'

    singleCompartmentDiv.append(compartmentImage, compartmentName)

    compartmentsGridDiv.appendChild(singleCompartmentDiv)
}


////////// Create a button to select/deselect all compartments
const compCheckbox = document.createElement('input')
compCheckbox.className = 'comp-checkbox'
compCheckbox.type = 'checkbox'
compCheckbox.checked = false
compCheckbox.addEventListener('change', (event) => {compSelectDeselectAll(event.currentTarget)})

const checkboxLabel = document.createElement('label')
checkboxLabel.className = 'checkbox-label'
checkboxLabel.appendChild(compCheckbox);
checkboxLabel.appendChild(document.createTextNode('Select All Compartments'));

compartmentsDiv.append(descriptionCompartmentsDiv, compartmentsGridDiv, checkboxLabel)

// CREATE THE STRAINS DIV
const strainsDiv = document.createElement('div')
strainsDiv.id = 'strains-div'

// CREATE THE FOOTER DIV
const footerDiv = document.createElement('div')
footerDiv.id = 'footer-div'


// ATTACH MAIN CONTAINERS TO THE DOCUMENT

document.body.appendChild(compartmentsDiv)
document.body.appendChild(strainsDiv)
document.body.appendChild(footerDiv)