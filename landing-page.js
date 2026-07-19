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



// CREATE THE COMPARTMENTS DIV
const compartmentsDiv = document.createElement('div')
compartmentsDiv.id = 'compartments-div'

////// Create description div
const descriptionCompartmentsDiv = document.createElement('div')
descriptionCompartmentsDiv.textContent = 'Select Compartments'
descriptionCompartmentsDiv.className = 'description-div'

////// Create div with boxes for each compartment
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
    
    const compartmentImage = document.createElement('img')
    compartmentImage.src = compartments[comp]
    compartmentImage.className = 'compartment-icon'

    const compartmentName = document.createElement('div')
    compartmentName.textContent = comp
    compartmentName.className = 'compartment-name'

    singleCompartmentDiv.append(compartmentImage, compartmentName)

    compartmentsGridDiv.appendChild(singleCompartmentDiv)
}

compartmentsDiv.append(descriptionCompartmentsDiv, compartmentsGridDiv)

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