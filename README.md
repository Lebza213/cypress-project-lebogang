## About The Project

CIB Digital Tech – QA Automation Assessment
(Open Source)

Task 1 - API:

Public API - https://dog.ceo/dog-api/

Using the above mentioned API perform the following calls

• Perform an API request to produce a list of all dog breeds. (Diagram 1)
• Using code, verify “retriever” breed is within the list. (Diagram 2)
• Perform an API request to produce a list of sub-breeds for “retriever”. (Diagram 3)
• Perform an API request to produce a random image / link for the sub-breed “golden” (Diagram 4)


Task 2 - Web:

• Navigate to - http://www.way2automation.com/angularjs-protractor/webtables/
• Validate that you are on the User List Table
• Click Add user
• Add users with the following details:
• Ensure that User Name (*) is unique on each run
• Ensure that your users are added to the list


### Installation

_Below is a set of quick steps run these test._

1. Open VS Code

2. Clone the repo
   ```sh
   https://www.dropbox.com/sh/o351h7uk8uw3v6v/AABvHcgTaZ71RLZO4c18In4ia?dl=0
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Install Cypress 
   ```
   npm install cypress --save-dev
   ```
5. Open & Run Tests 
   ```
   npx cypress open
   ```   

## Usage

The tests are fairly easy and straight forward 

Task 1: 
test-API.spec.js

Task 2: 
test-Web.spec.js

Cypress is a very powerful tool that can be utilised for UI, E2E and API Testing
It is open source

It recoirds videos as the tests are running (This fumctionality can be turned off)
Location: .\cypress\videos

Detailed report can also be found here
Reporting: .\cypress\results

## Framework Benefits
Below are some the Cypress benefits:
open-source: it is free to use
Super-fast: faster than all the testing frameworks in the market
Time Travel: takes snapshots as your tests run
Debuggability: readable error and stack traces
Automatic Waiting: no need to put explicit wait statements
Screenshots and Videos: simple options to get screenshots and videos while the tests run in CI/CD
Cross Browser Testing: locally or remotely 
API Testing: you can also mock server responses. this is a much needed solution in the API world 
Easy to write tests


## Contact

Lebogang Mabye - Lebogang.Mabye@gmail.com
Project Link: https://www.dropbox.com/sh/o351h7uk8uw3v6v/AABvHcgTaZ71RLZO4c18In4ia?dl=0