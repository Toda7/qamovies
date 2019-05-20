PROTACTOR:

===    https://www.protractortest.org/#/

https://www.protractortest.org/#/tutorial   =====



Startovanje WEB DRIVERA:


* ako nece da se pokrene lepo, mora ova procedura (clean cache neki) 
 - webdriver-manager update --standalone --versions.standalone=3.8.0

- sudo webdriver-manager clean

sudo webdriver-manager update --standalone --versions.standalone=3.8.0

i na kraju
- sudo webdriver-manager start --versions.standalone=3.8.0


U normalnim okolnostima ide ova komanda:

webdriver-manager start




- Ovako se pokrecje SUIT login is fajla CONF.JS   —>  protractor conf.js --suite login


--------------------------------------------------------------------------------------------

NODE JS I NPM UPDATE: 


<<<<Update NOD JS >>>>- https://www.hostingadvice.com/how-to/update-node-js-latest-version/

node -v - da se vidi trenutna verzija

sudo npm cache clean -f 
sudo npm install -g n 
sudo n stable 



 <<<< Update NPM: >>>>

npm -v     - da se vidi trenutna verzija

npm update   -update NPMa( da ti kaze da li ima nova verzija da update)
+
sudo npm install -g npm (da updatuje/instalira novu verziju ako ima)


	1.	Test Node. To see if Node is installed, type node -v in Terminal. This should print the version number so you'll see something like this v0.10.31 .
	2.	Test NPM. To see if NPM is installed, type npm -v in Terminal.