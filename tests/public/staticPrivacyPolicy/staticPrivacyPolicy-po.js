function clickOnLink() {
    //  Klik na Privacy Policy link iz footera
    element(by.linkText('Privacy Policy')).click(); 
    browser.sleep(2000);
}

function checkPrivacyURL() {
    // Provera Privacy Policy URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/support/privacy_policy'), 7000);
}

function checkText() {
    //  
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#main'), 'Privacy PolicyCBANC Network, Inc. (“CBANC”) values your privacyIn this Privacy Policy (the “Policy”), we describe the information that we collect about visitors to our website, www.CBANCnetwork.com (the “Site”), through their use of our Site and the services available on our Site. By visiting the Site, or using any of our services, you agree that your personal information will be handled as described in this Policy. Your use of our Site or services, and any dispute over privacy, is subject to this Policy and our Terms of Service, including its applicable limitations on damages and the resolution of disputes. CBANC’s Terms of Service are incorporated by reference into this Policy.Information We CollectWe may collect information about you directly from you and from third parties, as well as automatically through your use of our Site or services.Information We Collect Directly From YouThe information that we collect from or about you depends on your interaction with our Site and our services. We require you to register with us to use certain areas and features of our Site, such as viewing, contributing, downloading, commenting, rating, or otherwise submitting any user-generated content. To register, we will collect a business email address; we also may collect your name, the name of the financial institution your work for, your phone number, your address, and/or related information as may be appropriate to validate your identity. You may provide additional information to us, such as contact information and information about how you came to our Site. If you purchase anything from us (e.g., Premium Services) we will also collect your credit or debit card information and billing information.Information We Collect AutomaticallyWe automatically collect information about your use of our Site through cookies and other tracking technologies, including your domain name; your browser type; web pages you view; the length of time you visit our Site and or use our services; and the referring URL, or the webpage that led you to our Site. We may combine this information with other information that we collect about you, including, where applicable, your name. Please see the section Our Use of Cookies and Other Tracking Mechanisms below for more information about our use of cookies and other tracking mechanisms.How We Use the Information We CollectWe use your information for the following purposes:To provide our Site and services to you, to communicate with you about your use of our Site and services (including via email), to respond to your inquiries, and for other customer service purposesTo better understand how users access and use our Site and services, both on an aggregated and individualized basis, in order to improve our Site and services, to respond to user desires and preferences, and for other research and analytical purposesTo tailor the content and information that we may send or display to you, to offer personalized help and instructions, and to otherwise personalize your experiences while using our Site or servicesTo provide you with news and newsletters, special offers, and promotions, to contact you about products or information we think may interest you, and for other marketing and promotional purposes (as required by law)How We Share the Information We CollectWe may share your information, including personal information, as follows:Non-registered CBANC UsersAny content that you post to our Site, including, without limitation, documents, reviews, and comments, may be available to all visitors to our Site and users of our servicesAll persons, including non-registered users, will be able to search our Site, and will be able to see certain information about the content you have posted (e.g., type of document and size of bank – based on the characteristics that you submit when posting the document)All persons also may be able to see any comments that you leave on our Site, including certain information associated with your comment, such as your locationThe information that you post may continue to be available even if you discontinue using CBANC or cancel your account with usRegistered CBANC UsersRegistered users will be able to see your name and the financial institution with which you are affiliated and be able to download the content you post to our Site and view the full contents – unless your financial institution has blocked certain content from being downloaded by certain usersFor example, a financial institution may “block” users from a competitor financial institution from seeing the contents of its documents. Under such circumstances, users from financial institutions that have been “blocked” from seeing the content you post will only be able to see certain information about the content you have posted (e.g., type of document and size of bank – based on the characteristics that you submit when posting the document)All persons also may be able to see any comments that you leave on our Site, including certain information associated with your comment, such as your locationThe information that you post may continue to be available even if you discontinue using CBANC or cancel your account with usNon-Affiliated Third PartiesWe may share your information with third parties that offer products and services that we believe may be of interest to youAffiliatesWe may disclose your information to our affiliates or subsidiaries for research, marketing, and other purposes consistent with this Policy. Service ProvidersWe may disclose your information to third-party vendors, service providers, contractors, or agents who perform functions on our behalfBusiness TransfersIf we are acquired by or merged with another company, if substantially all of our assets are transferred to another company, or as part of a bankruptcy proceeding, we may transfer your information to the other company.In Response to Legal ProcessWe also may disclose your information in order to comply with the law, a judicial proceeding, court order, or other legal process, such as in response to a court order or a subpoena.To Protect Us and OthersWe also may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the safety of any person, violations of our Terms of Service or this Policy, or as evidence in litigation in which we are involved.Aggregate and De-Identified InformationWe may share aggregate or de-identified information about users with third parties for marketing, advertising, research, or similar purposes.Our Use of Cookies and Other Tracking MechanismsWe or our service providers use cookies to track visitor activity on our Site. A cookie is a text file that a website transfers to your computer’s hard drive for record-keeping purposes. We or our service providers use cookies to track user activities on our Site, such as the pages visited and time spent on our Site. Most browsers allow users to refuse cookies. The Help portion of the toolbar on most browsers will tell you how to prevent your computer from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether. Visitors to our Site who disable cookies will be able to browse certain areas of the Site but will not be able to access password-restricted areas or content.Local Storage ObjectsWe or our service providers may use Flash Local Storage Objects (“Flash LSOs”) to store your Site preferences and to personalize your visit. Flash LSOs are different from browser cookies because of the amount and type of data stored. Typically, you cannot control, delete, or disable the acceptance of Flash LSOs through your web browser. For more information on Flash LSOs, or to learn how to manage your settings for Flash LSOs, go to the Adobe Flash Player Help Page, choose “Global Storage Settings Panel” and follow the instructions. To see the Flash LSOs currently on your computer, choose “Website Storage Settings Panel” and follow the instructions to review and, if you choose, to delete any specific Flash LSO.Clear GIFs, pixel tags and other technologiesClear GIFs are tiny graphics with a unique identifier, similar in function to cookies. In contrast to cookies, which are stored on your computer’s hard drive, clear GIFs are embedded invisibly on web pages. We or our service providers may use clear GIFs (a.k.a. web beacons, web bugs, or pixel tags) in connection with our Site to, among other things, track the activities of Site visitors, help manage content, and compile statistics about Site usage. We or our service providers also use clear GIFs in HTML emails to our customers, to help us track email response rates, identify when our emails are viewed, and track whether our emails are forwarded.Third-Party Analytics and TrackingWe or our service providers use automated devices and applications, such as Google Analytics, to evaluate use of our Site. We also may use other analytic means to evaluate our Services. We or our service providers use these tools to help us improve our Site, services, performance, and user experiences. These entities may use cookies and other tracking technologies to perform their services. We do not share your personal information with these third parties, and we do not track your activities once you leave our Site.Third-Party AdvertisersWe use third parties to display advertisements on our Site, as well as on other websites, and to track the success of our advertising campaigns. This enables us and these third parties to target advertisements by displaying ads for products and services in which you might be interested. These advertising third parties may use cookies, JavaScript, web beacons (including clear GIFs), Flash LSOs, and other technologies to measure the effectiveness of their ads and to personalize advertising content to you. These third-party cookies and other technologies are governed by each third party’s specific privacy policy, not this one. We may provide these third-party advertisers with information about your usage of our Site and our services, as well as aggregate or non-personal information about visitors to our Site. You may opt out of many third-party ad networks, including those operated by members of the Network Advertising Initiative (“NAI”) and the Digital Advertising Alliance (“DAA”).For more information regarding this practice by NAI members and DAA members, and your choices regarding having this information used by these companies, including how to opt out of third-party ad networks operated by NAI and DAA members, please visit their respective websites: www.networkadvertising.org/optout_nonppii.asp (NAI) and www.aboutads.info/choices (DAA). Opting out of one or more NAI member or DAA member networks (many of which will be the same) only means that those members no longer will deliver targeted content or ads to you. It does not mean you will no longer receive any targeted content or ads on our Site or other websites. You may continue to receive advertisements, for example, based on the particular website that you are viewing.Also, if your browsers are configured to reject cookies when you visit this opt-out page, or you subsequently erase your cookies, use a different computer or change web browsers, your NAI or DAA opt-out may no longer be effective. Additional information is available on NAI’s and DAA’s websites accessible by the above links. User-Generated Content Our Site is designed for sharing content, including documents, questions and answers, reviews, feedback on regulatory issues, and any other information that you would like to be available on our Site. If you post content to our Site, the following information that you post will be available to all visitors to our Site: your employing financial organization, including the type of organization and office, asset size, and location.As noted above in our discussion about how we share your information, registered users will be able to see your name and the financial institution with which you are affiliated; they also will be able to download the information you post to our Site and view the full document contents. Any content that you post to our Site will become public, and we cannot prevent such information from being used in a manner that may violate this Policy, the law, or your personal privacy.Third-Party LinksOur Site may contain links to third-party websites. Any access to and use of such linked websites is not governed by this Policy, but instead is governed by the privacy policies of those third-party websites. We are not responsible for the information practices of such third-party websites.Security of My Personal InformationWe have implemented commercially reasonable precautions to protect the information we collect from loss, misuse, unauthorized access, disclosure, alteration, and destruction. Please be aware that despite our best efforts, no data security measures can guarantee 100% security. You should take steps to protect against unauthorized access to your password, phone, and computer by, among other things, signing off after using a shared computer, choosing a robust password that nobody else knows or can easily guess, and keeping your log-in and password private. We are not responsible for any lost, stolen, or compromised passwords or for any activity on your account via unauthorized password activity.Access to My Personal InformationYou may modify personal information that you have submitted by logging into your user profile page and updating your profile information. Please note that copies of information that you have updated, modified, or deleted may remain viewable in cached and archived pages of the Site for a period of time. We may send periodic promotional or informational emails to you. You may opt out of such communications by following the opt-out instructions contained in the email. Please note that it may take up to 10 business days for us to process opt-out requests. If you opt out of receiving emails about recommendations or other information we think may interest you, we may still send you emails about your account or any services you have requested or received from us.Special Information for California ConsumersCalifornia residents may request a list of certain third parties to which we have disclosed personally identifiable information about you for their own direct marketing purposes. You may make one request per calendar year. In your request, please attest to the fact that you are a California resident and provide a current California address for your response. You may request this information in writing by contacting us at the contact information below. Please allow up to thirty (30) days for a response. Contact Us If you have questions about the privacy aspects of our services or would like to make a complaint, please contact us by email at help@cbancnetwork.com, by phone at 512.583.4570, or by mail at: 4200 N Lamar Blvd Suite 250, Austin, TX 78756Changes to this PolicyThis Policy is current as of the Effective Date set forth above. We may change this Policy from time to time, so please be sure to check back periodically. We will post any changes to this Policy on our Site, at https://www.cbancnetwork.com/support/privacy_policy. If we make any changes to this Policy that materially affect our practices with regard to the personal information we have previously collected from you, we will endeavor to provide you with notice in advance of such change by highlighting the change on our Site.'), 5000);
}


module.exports = {
    clickOnLink,
    checkPrivacyURL,
    checkText,
 }