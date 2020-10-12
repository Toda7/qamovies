function landOnViewFinderPage() {
    browser.get('https://qa.cbancnetwork.com/view-finder');
    browser.sleep(2000);
}

function clickOnGetStartedToday() {
    // klik na show me how kao public user
    element(by.className('btn-large green')).click();
}

function checkText1() {
    // 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.sales_lead_section.row'), 'Know more about your sales leads than ever beforeThen take it to the next level with exclusive data insights and the ability to quickly identify, target, and capture the accounts with the highest propensity to purchase. We deliver a strategic approach that aligns sales and marketing efforts to reach and understand the right accounts, deepen engagement, and increase opportunities and win rates. Get the most complete picture of your prospects through CBANC’s data insights and leverage them to market and sell more effectively.'), 5000);
}

function backToQa() {
    browser.get('https://qa.cbancnetwork.com/view-finder?success=true');
    browser.sleep(2000);
}
 
function checkSucessMessage1() {
    //  Cekiranje success poruke nakon slanja forme/prod
    var xxx = element.all(by.className('center')).get(3);
    expect(xxx.getText()).toEqual('Thank You!');
}

function checkSucessMessage2() {
    //  Cekiranje success poruke nakon slanja forme/prod
    var xxx = element.all(by.className('center')).get(4);
    expect(xxx.getText()).toEqual("We received your info and we'll be in touch soon.");
}

function checkSucessMessage2qa() {
    //  Cekiranje success poruke nakon slanja forme/prod
    var xxx = element(by.className('active'));
    expect(xxx.getText()).toEqual("We received your info and we'll be in touch soon.");
}

function checkSucessMessage1qa() {
    //  Cekiranje success poruke nakon slanja forme/prod
    var xxx = element(by.className('active'));
    expect(xxx.getText()).toEqual('Thank You!');
}



function checkText2() {
    // 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.engage_prospects_section'), 'Engage your prospects:Become the trusted partner that they want to talk to. Distribute your message on the highest converting channel –– where your target market goes to get their work done. You get the widest coverage area by leveraging all of our engagement features, including:Community Account - The best way to make sure your content reaches your intended audience. Increase brand awareness to over 35,000 verified FI Professionals. Documents on average receive ~190 downloads each.Company and Product Pages - Influence buyers right inside the CBANC network.Live Webinars - Captivate your audience with Live Webinars through CBANC. Let us handle the hard parts.Vendor Digest - Engage your followers with automated emails letting them know new content and promotions from your Company Page on a weekly basis.Native Ads - Boost your top content embedded in our most viewed emails.Display ads - Reach the entire community with your graphical ad or target your ad across specific dimensions like topics or demographics.Featured Vendor status - CBANC drives awareness to your company and products to increase your following and help FI Professionals more easily find you.'), 5000);
}

function checkText3() {
    // 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.qualified_accounts_section'), 'Develop highly qualified accounts through dataLet us identify the most qualified accounts for you and increase the rate at which you convert these into opportunities for your sales team. Enabling features:Viewfinder - Helps you quickly identify, target, and capture the accounts with the highest propensity to purchase. It looks at signals across 5 data categories – including the engagement data created with our engagement features. Accounts and individuals are stack-ranked by their CBANC Score.Lens - Pair Viewfinder with Lens to sharpen the picture and seamlessly weave together a prospect’s path between CBANC and your website. A quick copy and paste is all it takes.Smart Opt-in - With Smart Opt-in, we look at intent signals that an CBANC Members has with your content and automatically prompt them to share their contact information with you. Smart Opt-in can deliver conversion rates 5-10 times higher than you’ll typically see on other digital channels.Polls - Supercharge the insights you get by collecting additional data points. You create the questions, CBANC Members provide the answers, right on CBANC. Poll data is all fed back into the full picture of an individual and their institution in Viewfinder.More Features in Production'), 5000);
}

function checkText4() {
    // 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.arm_salesteam_section'), 'Arm your sales team with unmatched intelClose more deals, with less effortViewfinderDirect Messages - Turn highly qualified accounts into sales qualified accounts. Send personalized 1-1 messages to your top targets identified by Viewfinder.Account Match - Already have a list of target accounts? With Account Match, when you send us your list of accounts, we automatically see if there are matches with members on CBANC. Then we allow you to easily engage those accounts with personalized content. These accounts are also earmarked in Viewfinder so that you know when these accounts engage with your content.Deep Integration with Data Export - Integrate CRM, support teams, or other systems by piping ViewFinder data into your systems. We provide data export endpoints. You control the data flow.'), 5000);
}

function checkText5() {
    // 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.measure_results_section.row'), 'Easily measure the results of your efforts with CBANC AnalyticsFormulate your content strategy by seeing which of your content is resonating with your target demographic. Understand and be able to easily report on how your campaigns and personalized direct messages perform.'), 5000);
}

module.exports = {
    landOnViewFinderPage,
    clickOnGetStartedToday,
    checkText1,
    checkText2,
    checkText3,
    checkText4,
    checkText5,
    backToQa,
    checkSucessMessage1,
    checkSucessMessage2,
    checkSucessMessage2qa,
    checkSucessMessage1qa,
}