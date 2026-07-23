// GLOBAL VARIABLES
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

// CREATE FUNCTIONS
function createButton(btnText, btnID = '', btnClass = '') {
    const myBtn = document.createElement('button')
    myBtn.textContent = btnText
    if (btnID) {myBtn.id = btnID}
    if (btnClass) {myBtn.className = btnClass}

    return myBtn

}
function btnSelectDeselect(button) {
    if (button.classList.contains('results-comp-btn')) {
        compBtns = document.querySelectorAll('.compartment-icon')
        compBtns.forEach(compBtn => {
            compBtn.classList.remove('selected-btn');
            compBtn.classList.add('unselected-btn');
        })
        button.classList.add('selected-btn');
    } else {
        button.classList.toggle('selected-btn');
        button.classList.toggle('unselected-btn');

        checkbox = document.querySelector('.comp-checkbox')
        if (checkbox.checked) {
            checkbox.checked = false
        }
    }
}

function compSelectDeselectAll(checkbox) {
    compButtons = document.querySelectorAll('.compartment-icon')
    compButtons.forEach(compButton => {
        compButton.classList.toggle('selected-btn', checkbox.checked);
        compButton.classList.toggle('unselected-btn', !checkbox.checked);
    });
}

function createDropDownMenu(selectionTextArray, labelText) {
    const dropDown = document.createElement('select')
    dropDown.className = 'drop-down'

    selectionTextArray.forEach(selectionText => {
        const option = document.createElement('option')
        option.value = selectionText
        option.textContent = selectionText
        dropDown.appendChild(option)
    })

    const label = document.createElement('label')
    label.className = 'drop-down-label'
    label.textContent = labelText

    label.appendChild(dropDown)

    return label
}

function createStrainStats(divClass, spanOneText, spanTwoText, spanTwoID) {
    const statDiv = document.createElement('div')
    statDiv.className = divClass
    const divSpanOne = document.createElement('span')
    divSpanOne.textContent = spanOneText
    const divSpanTwo = document.createElement('span')
    divSpanTwo.textContent = spanTwoText
    divSpanTwo.className = spanTwoID
    statDiv.append(divSpanOne, divSpanTwo)

    return statDiv
}

function backToLandingPage() {
    document.body.replaceChildren()
    createLandingPage()
}

function createLandingPage() {
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

    const aboutNavigation = createButton('About', 'about-navigation', 'navigation-btn regular-button')
    const contactNavigation = createButton('Contact', 'contact-navigation', 'navigation-btn regular-button')
    const downloadNavigation = createButton('Download', 'download-navigation', 'navigation-btn regular-button')

    navigationHeaderDiv.append(aboutNavigation, contactNavigation, downloadNavigation)

    headerDiv.appendChild(navigationHeaderDiv)



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
    const compartmentsGridDiv = document.createElement('div')
    compartmentsGridDiv.id = 'compartments-grid-div'
    for (const comp in compartments) {
        const singleCompartmentDiv = document.createElement('div')
        singleCompartmentDiv.className = 'single-compartment-div'

        //---------------------------------------------------------------------
        const compartmentImage = document.createElement('button')
        compartmentImage.className = 'compartment-icon unselected-btn'

        compartmentImage.style.backgroundImage = `url(${compartments[comp]})`

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
    strainTextbox.defaultValue = 'YAR019C-37C, ELM1, tsa60-26C'

    ////////// Create a button for loading data
    const loadBtn = createButton('Load Data and Images', 'load-btn', 'regular-button')
    loadBtn.addEventListener('click', (event) => {createResultsPage()})

    strainsDiv.append(descriptionStrainsDiv, explanationStrainsList, strainTextbox, loadBtn)

    middleDiv.append(compartmentsDiv, strainsDiv)



    // CREATE THE FOOTER DIV
    const footerDiv = document.createElement('div')
    footerDiv.id = 'footer-div'
    footerDiv.textContent = 'Boone & Andrews Labs @ University of Toronto'

    document.body.append(headerDiv, middleDiv, footerDiv)
}



function createResultsPage() {
    // SAVE REQUIRED ELEMENTS FROM LANDING PAGE BEFORE REMOVING IT 
    const middleDiv = document.querySelector('#middle-div')
    const footerDiv = document.querySelector('#footer-div')
    const strainSelectionTexts = document.querySelector('#strain-textbox').textContent.split(',')

    const selectedComps = document.querySelectorAll('.selected-btn')
    let selectedCompParents = []
    selectedComps.forEach(selectedComp => {
        if (selectedCompParents.length !== 0) {
            selectedComp.classList.toggle('selected-btn');
            selectedComp.classList.toggle('unselected-btn');
        }
        selectedComp.classList.add('results-comp-btn')
        selectedCompParents.push(selectedComp.parentNode)
        }
    )

    middleDiv.remove()
    footerDiv.remove()

    // CREATE THE RESULTS PAGE MIDDLE DIV
    const resultsMiddleDiv = document.createElement('div')
    resultsMiddleDiv.id = 'results-middle-div'

    ////// Create the compartment selection div
    const compSelector = document.createElement('div')
    compSelector.id = 'comp-selector'
    compSelector.append(...selectedCompParents) // spread array into individual nodes

    ////// Create the results view div
    const resultsView = document.createElement('div')
    resultsView.id = 'results-view'

    ////// Create the drop-downs + strain stats div
    const dropDownsStats = document.createElement('div')
    dropDownsStats.id = 'drop-downs-stats'

    ////////// Create the drop-downs div
    const dropDownDiv = document.createElement('div')
    dropDownDiv.id = 'drop-down-div'

    const dropDownStrain = createDropDownMenu(strainSelectionTexts, 'Strain')
    const dropDownCellCycle = createDropDownMenu(['All', 'G1', 'S/G2', 'MAT'], 'Cell Cycle')
    const dropDownDefectClass = createDropDownMenu(['Compartment', 'Cell'], 'Defect Class')
    const dropDownDefectType = createDropDownMenu(['Any', 'Many APs', 'Few APs', 'High Coverage', 'Low Coverage', 'Dispersed', 'Clustered', 'High Uniform', 'Low Uniform'], 'Defect Type')

    const reloadDataBtn = createButton('Display', 'reload-btn', 'regular-button')
    

    dropDownDiv.append(dropDownStrain, dropDownCellCycle, dropDownDefectClass, dropDownDefectType, reloadDataBtn)
    
    ////////// Create the strain stats div
    const strainStatsDiv = document.createElement('div')
    strainStatsDiv.id = 'strain-stats-div'

    const sigHitDiv = createStrainStats('stat-div', 'Significant Hit?', 'YES', 'sig-hit-yes')
    const penetranceDiv = createStrainStats('stat-div', 'Penetrance: ', '38.6%', 'stat-result')
    const percentileDiv = createStrainStats('stat-div', 'Percentile: ', '89th (HIGH)', 'percentile-result-high')
    strainStatsDiv.append(sigHitDiv, penetranceDiv, percentileDiv)
    
    dropDownsStats.append(dropDownDiv, strainStatsDiv)

    ////// Create the images + controls div
    const imagesControls = document.createElement('div')
    imagesControls.id = 'images-controls-div'

    ////////// Create the images div
    const imagesDiv = document.createElement('div')
    imagesDiv.id = 'images-div'
    
    const fluorescence = document.createElement('img')
    fluorescence.src = './other-graphics/fluorescent_crops.png'
    fluorescence.className = 'cell-crops'
    
    const overlays = document.createElement('img')
    overlays.src = './other-graphics/overlay_crops.png'
    overlays.className = 'cell-crops'
    
    imagesDiv.append(fluorescence, overlays)
    

    ////////// Create the controls div
    const controlsButtonsDiv = document.createElement('div')
    controlsButtonsDiv.id = 'controls-buttons-div'

    const changeImageButtons = document.createElement('div')
    changeImageButtons.id = 'change-image-buttons'

    const imageStackButtons = document.createElement('div')
    imageStackButtons.id = 'image-stack-buttons'

    const bothStacks = createButton('Both', 'both-stacks-btn', 'regular-button')
    const compartmentStack = createButton('Compartment', 'compartment-stack-btn', 'regular-button')
    const nuclearStack = createButton('Nucleus', 'nuclear-stack-btn', 'regular-button')

    imageStackButtons.append(bothStacks, compartmentStack, nuclearStack)

    const brightnessSliderDiv = document.createElement('div')
    brightnessSliderDiv.id = 'brightness-slider-div'

    const sliderDescription = document.createElement('span')
    sliderDescription.textContent = 'Image Brightness: '

    const brightnessSlider = document.createElement('input')
    brightnessSlider.type = 'range'
    brightnessSlider.min = 1
    brightnessSlider.max = 10
    brightnessSlider.value = 1
    brightnessSlider.step = 1

    brightnessSliderDiv.append(sliderDescription, brightnessSlider)

    changeImageButtons.append(imageStackButtons, brightnessSliderDiv)
    
    const downloadBackButtons = document.createElement('div')
    downloadBackButtons.id = 'download-back-buttons-div'
    
    const downloadButton = createButton('Download Data', 'data-download-button', 'regular-button')
    const backButton = createButton('Back to Search', 'back-button', 'regular-button')
    backButton.addEventListener('click', backToLandingPage)

    downloadBackButtons.append(downloadButton, backButton)
    
    controlsButtonsDiv.append(changeImageButtons, downloadBackButtons)

    imagesControls.append(imagesDiv, controlsButtonsDiv)


    resultsView.append(dropDownsStats, imagesControls)
    resultsMiddleDiv.append(compSelector, resultsView)
    
    document.body.append(resultsMiddleDiv, footerDiv)
}

createLandingPage()