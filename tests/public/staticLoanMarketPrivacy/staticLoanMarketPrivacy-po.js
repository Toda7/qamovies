function landOnMarketPlacePrivacy() {
    // dolazak na Market Place Privacy stranu 
    browser.get('https://qa.cbancnetwork.com/loan-marketplace/privacy'); 
    browser.sleep(2000);
}

function checkTextOne() {
    // Provera texta na strani - Prvi deo
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#main'), 'Loan-Marketplace Privacy PolicyCBANC Network, Inc. (“CBANC,” “we,” or “us”) values your privacy, and we take reasonable steps designed to ensure that the personal information you give us is handled in a safe and responsible manner. In this Privacy Policy (“Policy”), we describe the information that we collect about existing Members of our Site,'), 7000);
}

function checkTextTwo() {
    // Provera texta na strani - Drugi deo
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#main'), ', who visit and/or are permitted to use the limited-access portion of our Site which consists of our loan marketplace (“Marketplace”) and the services provided through the Marketplace (“Marketplace Services”). By attempting to sign up to use the Marketplace, by visiting the Marketplace, or using any of the Marketplace Services, you agree that your personal information will be handled as described in this Policy. Your use of our Marketplace or Marketplace Services, and any dispute over privacy, is subject to this Policy and our Marketplace Terms, including its applicable limitations on damages and the resolution of disputes. CBANC’s Marketplace Terms are incorporated by reference into this Policy. Capitalized terms not defined in this Policy will have the meanings given to them in our Marketplace Terms.Information We CollectWe only collect information from you as part of our business relationship with you in providing the Marketplace and the Marketplace Services to you. We may collect information about you directly from you, from third parties, and automatically through your use of our Marketplace or Marketplace Services.Information We Collect Directly From You: The information that we collect from or about you depends on your interaction with our Marketplace or Marketplace Services. In particular, we collect the following information from you during your interactions with us:'), 7000);
}

function checkTextThree() {
    // Provera texta na strani - Treci deo
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#main'), 'Account Registration: We require you to register with us to use the Marketplace or Marketplace Services. To register, we will collect a business email address, your name, the name of the Financial Institution your work for, your business phone number, your business address, and/or related information as may be appropriate to validate your identity. You may provide additional information to us, such as personal contact information and information about how you came to the Marketplace.Customer Service: if you contact us, whether through our Site, the Marketplace, by phone, email, or other means, we collect your name, contact information, and information about the reason that you contacted us. If you call us, your call may be recorded for quality assurance and customer service purposes. We do not always associate a call recording with a particular customer’s account.Information We Collect About You From Other Sources: We may collect information about you from the Financial Institution that employs you.Information We Collect Automatically: We automatically collect information about your use of our Marketplace through cookies and other tracking technologies, including your domain name; your browser type; web pages you view; the length of time you visit our Marketplace and/or use our Marketplace Services; and the referring URL, or the webpage that led you to our Site and/or Marketplace. We may also collect your approximate city through collection of your IP address. We may combine this information with other information that we collect about you, including, where applicable, your name. Please see the section “Our Use of Cookies and Other Tracking Mechanisms” below for more information about our use of cookies and other tracking mechanisms.How We Use the Information We CollectWe use your information, including your personal information, for the following purposes:To provide our Marketplace and Marketplace Services to you, to communicate with you about your use of our Marketplace and Marketplace Services (including via email), to respond to your inquiries, and for other customer service purposes.To better understand how Users access and use our Marketplace and Marketplace Services, both on an aggregated and individualized basis, in order to improve our Site and Marketplace Services, to respond to User requests and preferences, and for other research and analytical purposes.To tailor the content and information that we may send or display to you, to offer personalized help and instructions, and to otherwise personalize your experiences while using our Marketplace and Marketplace Services.For informational, marketing, and promotional purposes. We use your email address to provide you with news and newsletters and to send you information about products and services that we think may be of interest to you, including information about our affiliates products and services, to the extent permitted by applicable law.To determine the relevance and success of our advertising campaigns. We may count ad impressions of unique visitors, verify quality of the ad impressions, and take similar measures to determine relevance and success of our online advertising.To administer surveys and questionnaires, such as for market research or customer satisfaction purposes.Debugging to identify and repair errors and overall Marketplace maintenance and improvement.To comply with legal obligations, as part of our general business operations, and for other business administration purposes.Where we believe necessary to detect, investigate, prevent or take action regarding security incidents, illegal activities, suspected fraud, or violations of our Marketplace Terms or this Policy.'), 7000);
}

function checkTextFour() {
    // Provera texta na strani - Cetvrti deo
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#main'), 'How We Share the Information We CollectWe may share your information, including personal information, as follows:Other Marketplace Users: Other Marketplace Users will be able to see your name and the Financial Institution with which you are affiliated, be able to send you messages or reply to messages you have sent, and be able to download the Content you post to our Marketplace and view the full contents – unless your Financial Institution has blocked certain content from being downloaded by certain users.For example, a Financial Institution may “block” users from a competitor Financial Institution from seeing the contents of its documents. Under such circumstances, Users from Financial Institutions that have been “blocked” from seeing the content you post will only be able to see certain information about the content you have posted (e.g., type of document and size of bank – based on the characteristics that you submit when posting the document).The information and Content that you post may continue to be available even if you discontinue using the Marketplace.Affiliates: Where permitted by applicable law, we may disclose your information to our affiliates or subsidiaries for research, marketing, and other purposes consistent with this Policy.Service Providers: We may disclose your information to third-party vendors, service providers, contractors, or agents who perform functions on our behalf.Business Transfers: If we are acquired by or merged with another company, if substantially all our assets are transferred to another company, or as part of a bankruptcy proceeding, we may transfer your information to the other company.In Response to Legal Process: We also may disclose your information in order to comply with the law, a judicial proceeding, court order, or other legal process, such as in response to a court order or a subpoena.To Protect Us and Others: We also may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the safety of any person, violations of our Terms of Service or this Policy, or as evidence in litigation in which we are involved.Aggregate and De-Identified Information: We may share aggregate or de- identified information about users with third parties for marketing, advertising, research, or similar purposes.Our Use of Cookies and Other Tracking MechanismsWe or our service providers (to assist us with website analytics, marketing, evaluating the success of our marketing campaigns, and targeted advertising) use cookies and other tracking technologies to track information about your use of the Marketplace. use cookies to track visitor activity on our Marketplace. Typically, we do not combine this information with other personal information we collect from you.Cookies: A cookie is a text file that a website transfers through your web browser to your computer’s hard drive for record-keeping purposes. Some cookies allow us to make it easier for you to navigate our Marketplace, while others are used to enable a faster log-in process or to allow us to track your activities on our Marketplace. There are two types of cookies: session and persistent cookies.Session Cookies. Session cookies exist only during an online session. They disappear from your computer when you close your browser or turn off your computer. We use session cookies to allow our systems to uniquely identify you during a session or while you are logged into the Marketplace. This allows us to verify your identity after you have logged in as you move through the Marketplace.Persistent Cookies. Persistent cookies remain on your computer after you have closed your browser or turned off your computer. We use persistent cookies to track aggregate and statistical information about User activity, and to display advertising both on our Site and the Marketplace.Disabling Cookies: Most browsers allow users to refuse cookies. The Help portion of the toolbar on most browsers will tell you how to prevent your computer from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether.Local Storage Objects: We or our service providers may use Flash Local Storage Objects (“Flash LSOs”) to store your Marketplace preferences and to personalize your visit. Flash LSOs are different from browser cookies because of the amount and type of data stored. Typically, you cannot control, delete, or disable the acceptance of Flash LSOs through your web browser. For more information on Flash LSOs, or to learn how to manage your settings for Flash LSOs, go to the Adobe Flash Player Help Page, choose “Global Storage Settings Panel” and follow the instructions. To see the Flash LSOs currently on your computer, choose “Website Storage Settings Panel” and follow the instructions to review and, if you choose, to delete any specific Flash LSO.Clear GIFs, pixel tags and other technologies: Clear GIFs are tiny graphics with a unique identifier, similar in function to cookies. In contrast to cookies, which are stored on your computer’s hard drive, clear GIFs are embedded invisibly on web pages. We or our service providers may use clear GIFs (a.k.a. web beacons, web bugs, or pixel tags) in connection with our Marketplace to, among other things, track the activities of Marketplace Users, help manage content, and compile statistics about Marketplace usage. We or our service providers also use clear GIFs in HTML emails to Users, to help us track email response rates, identify when our emails are viewed, and track whether our emails are forwarded.Third-Party Analytics and Tracking: We or our service providers use automated devices and applications, such as Google Analytics, to evaluate use of our Marketplace. We also may use other analytic means to evaluate our Marketplace Services. We or our service providers use these tools to help us improve our Marketplace, Marketplace Services, performance, and User experiences. These entities may use cookies and other tracking technologies to perform their services. We do not share your personal information with these third parties, and we do not track your activities once you leave our Marketplace. To learn more about Google’s privacy practices, please review the Google Privacy Policy at'), 7000);
}

function checkTextFive() {
    // Provera texta na strani - Peti deo
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#main'), '. You can also download the Google Analytics Opt-out Browser Add-on to prevent their data from being used by Google Analytics at'), 7000);
}

function checkTextSix() {
    // Provera texta na strani - Sesti deo
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#main'), 'Do-Not-Track: Currently, our systems do not recognize web browser “do-not- track” requests. You may, however, disable certain tracking as discussed in this section (e.g., by disabling cookies); you also may opt-out of targeted advertising by following the instructions in the Third-Party Advertisers section.Third-Party Advertisers: We use third parties to display advertisements on other websites and to track the success of our advertising campaigns. This enables us and these third parties to target advertisements by displaying ads for products and services in which you might be interested. These advertising third parties may use cookies, JavaScript, web beacons (including clear GIFs), Flash LSOs, and other technologies to measure the effectiveness of their ads and to personalize advertising content to you. These third-party cookies and other technologies are governed by each third party’s specific privacy policy, not this one. We may provide these third-party advertisers with information about your usage of our Marketplace and our Marketplace Services, as well as aggregate or non-personal information about Marketplace Users.You may opt out of many third-party ad networks, including those operated by members of the Network Advertising Initiative (“NAI”) and the Digital Advertising Alliance (“DAA”). For more information regarding this practice by NAI members and DAA members, and your choices regarding having this information used by these companies, including how to opt out of third-party ad networks operated by NAI and DAA members, please visit their respective websites:'), 7000);
}

function checkTextSeven() {
    // Provera texta na strani - Sedmi deo
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#main'), '(NAI) and'), 7000);
}

function checkTextEight() {
    // Provera texta na strani - Osmi deo
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#main'), '(DAA). Opting out of one or more NAI member or DAA member networks (many of which will be the same) only means that those members no longer will deliver targeted content or ads to you. It does not mean you will no longer receive any targeted content or ads on other websites. You may continue to receive advertisements, for example, based on the particular website that you are viewing.Also, if your browsers are configured to reject cookies when you visit this opt-out page, or you subsequently erase your cookies, use a different computer or change web browsers, your NAI or DAA opt-out may no longer be effective. Additional information is available on NAI’s and DAA’s websites accessible by the above links. For additional information and opt-out options, please go to:'), 7000);
}

function checkTextNine() {
    // Provera texta na strani - Deveti deo
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#main'), 'User ContentThe Marketplace is designed to enable Lead Financial Institutions to offer Loans for sale and allows Participant Financial Institutions to purchase a Participation Interest in Loans. To facilitate such transactions, Users will post User Content, such as Loan Documents or Authorization Documents. Any User Content you post to the Marketplace will be available to all other Users, as will any information included within your Marketplace Account profile, including your employing Financial Institution.As noted above in our discussion about how we share your information, other Users will be able to see your name and the Financial Institution with which you are affiliated; they also will be able to download the information you post to our Marketplace and view the full document contents. We cannot prevent such information from being used in a manner that may violate this Policy, the law, or your personal privacy.Third-Party LinksOur Marketplace may contain links to third-party websites. Any access to and use of such linked websites is not governed by this Policy, but instead is governed by the privacy policies of those third-party websites. We are not responsible for the information practices of such third-party websites.Security of My Personal InformationWe have implemented commercially reasonable precautions to protect the information we collect from loss, misuse, unauthorized access, disclosure, alteration, and destruction. Please be aware that despite our best efforts, no data security measures can guarantee 100% security. You should take steps to protect against unauthorized access to your password, phone, and computer by, among other things, signing off after using a shared computer, choosing a robust password that nobody else knows or can easily guess, and keeping your log-in and password private. We are not responsible for any lost, stolen, or compromised passwords or for any activity on your Marketplace Account via unauthorized password activity.Access to My Personal InformationYou may modify personal information that you have submitted by logging into your Marketplace Account and updating your profile information. Please note that copies of information that you have updated, modified, or deleted may remain viewable in cached and archived pages of the Marketplace for a period of time.Important Additional Privacy Information for California ResidentsBecause we communicate with you in the context of our business relationship with you, your rights under the California Consumer Privacy Act (“CCPA”) are your right to opt-out and the right of non-discrimination.Right to Opt-out of Sale of Personal Information: The CCPA defines “sale” of personal information very broadly, including as “sales” disclosure of personal information in exchange for receiving anything of value in quite a few situations that are not commonly understood to be “sales.” Under this very broad definition, we may “sell” personal information due to our use of website advertising cookies and other tracking devices used for online interest-based advertising. If you would like to opt-out of interest-based advertising as provided by our online advertising providers, please visit'), 7000);
}

function checkTextTen() {
    // Provera texta na strani - Deseti deo
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#main'), 'Right to Non-Discrimination: The CCPA prohibits discrimination against California residents for exercising their rights under the CCPA. Discrimination may exist where a business denies or provides a different level or quality of goods or services, or charges (or suggests that it will charge) different prices, rates, or penalties on residents who exercise their CCPA rights, unless doing so is reasonably related to the value provided to the business by the residents’ data.Changes to this PolicyThis Policy is current as of the Effective Date set forth above. We may change this Policy from time to time, so please be sure to check back periodically. We will post any changes to this Policy on our Marketplace. If we make any changes to this Policy that materially affect our practices with regard to the personal information we have previously collected from you, we will endeavor to provide you with notice in advance of such change by highlighting the change on our Marketplace.'), 7000);
}

module.exports = {
    landOnMarketPlacePrivacy,
    checkTextOne,
    checkTextTwo,
    checkTextThree,
    checkTextFour,
    checkTextFive,
    checkTextSix,
    checkTextSeven,
    checkTextEight,
    checkTextNine,
    checkTextTen,

}