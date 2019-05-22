PROTACTOR (linkovi):

====   https://www.protractortest.org/#/

https://www.protractortest.org/#/tutorial   

https://www.protractortest.org/#/api   (spisak LOKATORA)    =====


<!-- Protractor is an end-to-end test framework for AngularJS applications. Protractor is a Node.js program that supports the Jasmine and Mocha test frameworks. Selenium is a browser automation framework. Selenium includes the Selenium Server, the WebDriver APIs, and the WebDriver browser drivers.

Protractor uses WebDriverJS which is based on Selenium. So Protractor is not instead of Selenium, but it is an extra layer on top of Selenium to make testing AngularJS applications easier. Researching the WebDriverJS specification will also help. ... Learned an test framework Jasmine (or Mocha).

Protractor uses JavaScript as language, NodeJS as programming environment and Jasmine as its test-runner-framework. Having some basic skills with these technologies will help.
Protractor uses WebDriverJS which is based on Selenium. So Protractor is not instead of Selenium, but it is an extra layer on top of Selenium to make testing AngularJS applications easier. Researching the WebDriverJS specification will also help. It simplifies the async nature of JavaScript and this will be probably be your greatest challenge when migrating from Java.

Protractor is a wrapper around WebDriverJS, which is JavaScript bindings for the Selenium WebDriver API.
Protractor needs two files to run, a spec file and configuration file. Configuration file: This File helps protractor to where the test files are placed (specs.js) and to talk with Selenium server (Selenium Address). Chrome is the default browser for Protractor

Choosing a Framework. Protractor supports two behavior driven development (BDD) test frameworks out of the box: Jasmine and Mocha. These frameworks are based on JavaScript and Node.js and provide the syntax, scaffolding, and reporting tools you will use to write and manage your tests. -->


INSTALL: 

(proverite da li ste u rootu i da li ste dali sve potrebne permisije. Ako trazi permisije, koristite >sudo< komandu )

<!-- * MORATE imati JDK (Java Development Kit (za MAC 64) ->  https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html ) instaliran da bi web driver radio kako treba. -->

1. Install NODE JS  (uz njega ide i NPM packaging sistem) 
2. npm install -g protractor     // This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working. 
3. webdriver-manager update    // The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with: 
4. START server sa  > webdriver-manager start < komandom  //  Server mora da se startuje svaki put pre pustanja testova. 
<!-- This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.  -->





Startovanje WEB DRIVERA (Start Selenium servera  (vidi text iznad) ):


* ako nece da se pokrene lepo, mora ova procedura (clean cache neki) 
1.  sudo webdriver-manager clean
2.  sudo webdriver-manager update --standalone --versions.standalone=3.8.0
i na kraju
3.  sudo webdriver-manager start --versions.standalone=3.8.0


U normalnim okolnostima ide osamo va komanda:
>  webdriver-manager start   ( ako nece onda probati sa > sudo webdriver-manager start <)


------------------------------------------------------------------------------------------------

POKRETANJE TESTOVA (config fajla):  // NAPOMENA: morate biti u folderu iz kog pozivate/startujete test config.js fajl)
- > protractor conf.js
POKRETANJE SUITA (seta testova):
- Ovako se pokrecje SUIT login is fajla CONF.JS   —>  protractor conf.js --suite login    (suit "login" je set testova)


------------------------------------------------------------------------------------------------


NODE JS I NPM UPDATE: 


<<<<Update NODE JS >>>>- https://www.hostingadvice.com/how-to/update-node-js-latest-version/

node -v - da se vidi trenutna verzija

sudo npm cache clean -f 
sudo npm install -g n 
sudo n stable 



 <<<< Update NPM: >>>>

npm -v     - da se vidi trenutna verzija

npm update   -update NPMa( da ti kaze da li ima nova verzija da update)
+
sudo npm install -g npm (da updatuje/instalira novu verziju ako ima)


	1.	Test Node. To see if Node is installed, type node -v in Terminal. This should print the version number so you'll see something like this v0.10.31 
	
	2.	Test NPM. To see if NPM is installed, type npm -v in Terminal.