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

////// Create the compartment selection div
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
    compartmentImage.style.width = '115px'
    compartmentImage.style.height = '115px'

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


////// Create the strain selection div
const strainsDiv = document.createElement('div')
strainsDiv.id = 'strains-div'

////////// Create description div
const descriptionStrainsDiv = document.createElement('div')
descriptionStrainsDiv.textContent = '2. Select your favourite strain(s)'
descriptionStrainsDiv.className = 'description-div'

////////// Create explanation list
const explanationStrainsList = document.createElement('ul')
explanationStrainsList.id = 'strain-entry-rule-list'

const ruleOne = document.createElement('li')
ruleOne.className = 'strain-entry-rule'
ruleOne.textContent = 'Multiple entries should be comma-separated.'

const ruleTwo = document.createElement('li')
ruleTwo.className = 'strain-entry-rule'
ruleTwo.textContent = 'Systematic names (e.g., YAR019C), standard names (e.g., CDC15), and Strain IDs if known (e.g., tsa882) are all valid.'

const ruleThree = document.createElement('li')
ruleThree.className = 'strain-entry-rule'
ruleThree.textContent = 'If you are entering an essential gene perturbation, append \'-26C\' or \'-37C\' to the end (e.g., YAR019C-26C, CDC15-37C, tsa882-37C).'

explanationStrainsList.append(ruleOne, ruleTwo, ruleThree)

////////// Create a textbox
const strainTextbox = document.createElement('textarea')
strainTextbox.id = 'strain-textbox'
strainTextbox.defaultValue = 'YAR019C-26C, ELM1, tsa60-37C'

////////// Create a button for loading data
loadBtn = document.createElement('button')
loadBtn.textContent = 'Load Data and Images'
loadBtn.id = 'load-btn'

strainsDiv.append(descriptionStrainsDiv, explanationStrainsList, strainTextbox, loadBtn)

middleDiv.append(compartmentsDiv, strainsDiv)

document.body.appendChild(middleDiv)



// CREATE THE FOOTER DIV
const footerDiv = document.createElement('div')
footerDiv.id = 'footer-div'
footerDiv.textContent = 'Boone & Andrews Labs @ University of Toronto'

document.body.appendChild(footerDiv)

