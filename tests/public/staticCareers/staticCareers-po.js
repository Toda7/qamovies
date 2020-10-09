function landOnCareers() {
    // Dolazak na Careers stranu
    browser.get('https://qa.cbancnetwork.com/careers');
}

function checkMainSectionText() {
    // Provera da li se ucitao text u glavnoj sekciji
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('content'));
    browser.wait(EC.textToBePresentInElement(c, "Careers with CBANCWe're the largest online network of verified bank and credit union professionals in the United States. Our community empowers members to collaborate, share information and lead the evolution of community banking. Fifty-five thousand strong, CBANC’s membership represents over 8,500 financial institutions with over $22 trillion in assets. CBANC is based in Austin, Texas.Every day, thousands of FI professionals use the CBANC community to find resources that help them implement best practices at their institution, make more intelligent vendor decisions, navigate challenges, and advance their careers. CBANC also helps our community by building and launching point technologies that help our membership in the areas of risk and compliance and credit and lending.Front-end Web DeveloperJob DescriptionWe are looking for an ambitious and self-driven Front-End Web Developer who loves to combine the art of design with the science of programming. Working closely with the product and design teams, you will be responsible for implementing the visual elements and user-interactions across our suite of products.CBANC is a collaborative organization with an emphasis on iteration and learning. We’re looking for someone who’s excited to work with modern technologies in a startup culture, looking to have an immediate impact, and ready to rise to the challenge of a growing organization.Sound like you? Keep reading!ResponsibilitiesCollaborate with product, design, and engineering team members to help shape the product direction and ensure the technical feasibility of UI/UX designsImplement new user-facing features with an eye for developing reusable code and librariesOptimize application for maximum speed and scalabilityCollaborate with other team members and stakeholdersParticipate in peer code reviews and provide constructive feedback to other team membersSkills And Qualifications3-5 years professional software development experienceExcellent HTML5, CSS3, and Javascript programming skillsProven experience with modern front-end frameworks such as Elm, React or Vue. Understanding unidirectional data flow. Familiarity or experience with Elm is a plusDevelopers with orientation to functional programming paradigm will have advantageFamiliarity with css frameworks such as Materialize and BootstrapProficiency in developing mobile-first, responsive, cross-browser UI solutionsExperienced with automated testing using tools such as Mocha, Chai, Enzyme, and Sinon is a plusPracticed in Agile development methodologySolid verbal and written communication skillsEMAIL USBack-end Application DeveloperJob DescriptionWe are looking for an ambitious and self-driven Back-End Application Developer who has a passion for building high-quality, robust, scalable, and maintainable web applications. Working closely with the product, design, and other engineering team members, you will be responsible for server-side development across our suite of products.CBANC is a collaborative organization with an emphasis on iteration and learning. We’re looking for someone who’s excited to work with modern technologies in a startup culture, looking to have an immediate impact, and ready to rise to the challenge of a growing organization.Sound like you? Keep reading!ResponsibilitiesCollaborate with other engineering team members to define and/or refine technical architecture, designs, and toolsetsDesign and develop reusable, testable, and efficient server-side code including APIsDesign data models for new applications as well and refine/evolve data models for existing applicationsImplementation of application security and data protectionSkills And Qualifications5+ years professional software development experienceExpert knowledge of Javascript and Node.jsProfessional experience with a range of modern database technologies. Proficiency with Postgres, Neo4j, and/or MongoDB is a plusExpertise with data modeling, SQL, and query plan / performance optimizationFamiliarity with developing cloud-native applications. AWS experience is a plusUnderstanding of idempotence and distributed event based systemsUnderstanding accessibility and security principlesPracticed in Agile development methodology and a commitment to test driven developmentSolid verbal and written communication skillsEMAIL US"), 5000);
}

function checkCultureSectionText() {
    // Provera da li se ucitao text u Culture sekciji
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#culture'), "CultureWe work smart. We have fun. We care a lot.If you think you can contribute, we'd love to hear from you.Financially stable, successful company with a ten-year track record of growth and successOffices in the 38th and Lamar corridor with free parkingBest-in-class health, dental, vision, disability, and 401K benefitsFlexible paid time offFresh, healthy lunches provided three days a week"), 5000);
}

function checkFirstEmailUsButton() {
    // Provera da li je prvo Email Us dugme dobro linkovano
    var xxx = element.all(by.className('cta')).get(0);
    expect(xxx.getAttribute('href')).toEqual('mailto:team@cbancnetwork.com');
    browser.sleep(500);
 }

 function checkSecondEmailUsButton() {
    // Provera da li je drugo Email Us dugme dobro linkovano
    var xxx = element.all(by.className('cta')).get(1);
    expect(xxx.getAttribute('href')).toEqual('mailto:team@cbancnetwork.com');
    browser.sleep(500);
 }

 function openIntercom() {
    //  Otvori Intercom
    element(by.className('intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open')).click();
 }

 function closeIntercom() {
    //  Zatvori Intercom
    element(by.className('intercom-launcher-frame intercom-cqrjjr e1ur5zlj0')).click();
 }

module.exports = {
    landOnCareers,
    checkMainSectionText,
    checkCultureSectionText,
    checkFirstEmailUsButton,
    checkSecondEmailUsButton,
    openIntercom,
    closeIntercom,
}