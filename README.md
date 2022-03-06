# refugee-support
## Story/Purpose

As a result of recent and past interstate conflict and attacks, more and more individuals who seek protection and asylum away from their home country are looking to migrate to other countries with refugee status. Due to the Ukrainian war, UN estimates about 4 million refugees to seek refuge by July of 2022. After going through the government of Canada website, we’ve noticed that the process of achieving refugee status is quite complex, and wanted to support and simplify the process for applicants by consolidating the information and links in one place through a chrome browser extension. We also wanted to provide further support for those who migrate to Canada, in regards to services in their given area by utilizing Google maps to identify the locations of services such as housing, job search, healthcare, language classes and assessments, and more.

## Our Use Case

The current situation in Ukraine shed some light on the refugee status application process, and we realized that more can be done to fully support Ukranians who are looking to seek refuge in places like Canada. Although the process for Ukranian refugees to enter Canada is still in progress, we compiled the resources they would need to seek refuge for the time being.

## Tech Stack

Frontend: Figma, CSS, MaterialUI Backend: React, Javascript, Firebase. Our extension was built mainly using React and JavaScript, with the help of some HTML/CSS and in the front end. Our main workflow was to first build the various pages on the pop up using material UI components and create each user flow. These different flows were prototyped in Figma by our designer. Then, we compiled our own resources to collect locations of the various community centers, schools, and agencies at which refugees can seek further support. This data was stored in Firestore, then read into our backend using Google’s firestore package.

## Challenges

We noticed a lack of Canadian government policy currently for Ukrainian refugees due to recent state of emergency. In two weeks, the Canadian government will be issuing Canada-Ukraine Authorization for Emergency Travel. More information to come and be added for the extension. We also predict that we can scale this project to be applicable for not only refugees in Canada, but also for other countries in the world. In the future versions, we aim to add countries such as Poland, Hungary, and Moldova to guide refugees on essential information needed in seeking safety and becoming a refugee in the country. Because we created our own database, there were definitely limitations on how much data we were able to collect in the amount of time given to us. We hope to expand our dataset in the future to include support locations outside of Canada and provide information for countries around the world to better support refugees seeking asylum even outside of Canada. Regarding the checklist portion of our extension, we hope to introduce an authentication process in our user flow so that users can save their progress on the checklist. In doing so, we hope to find a secure way to store user data so that we can collect confidential information such as passport numbers and immigration documents to provide a support system more targeted to each and every user.

## Accomplishments that we're proud of

We hope to make impact. While we were researching for the project, we had a chance to get a glimpse of complexities and processes needed to obtain the refuge status in Canad., We learned a lot about what processes refugees had to endure to enter Canada, and we tried to build SeekingRegufe from the user’s perspective mitigate their concerns even by the slightest amount. We believe that this extension has the capability to become the go-to source of refugees for information.

## What's next for Seek Refuge

As mentioned previously, there are areas of improvement that we would like to see on this extension. We would like to keep updating our extension to include the necessary information for Ukrainian refugees to enter Canada, include other countries that need to find refuge as well, and authenticate the process so that users can always refer back to it and see their progress on the checklist of things they need to do to attain refugee status in Canada.

## Screenshots and Demo

<img width="1679" alt="Screen Shot 2022-03-06 at 10 54 32 AM" src="https://user-images.githubusercontent.com/23249184/156939471-f779e8dd-58c7-47fb-9fbc-502d5e8e9bfe.png">
<img width="493" alt="Screen Shot 2022-03-06 at 10 54 42 AM" src="https://user-images.githubusercontent.com/23249184/156939470-455c8889-0d86-4458-870d-30ec5b4711d6.png">
<img width="464" alt="Screen Shot 2022-03-06 at 10 55 12 AM" src="https://user-images.githubusercontent.com/23249184/156939469-c81388d8-50b8-45b1-bcd9-7079b6abb9d1.png">
<img width="410" alt="Screen Shot 2022-03-06 at 10 55 24 AM" src="https://user-images.githubusercontent.com/23249184/156939466-02a47626-29cb-456d-aeb0-8e82c6ba3fa9.png">
<img width="410" alt="Screen Shot 2022-03-06 at 10 55 49 AM" src="https://user-images.githubusercontent.com/23249184/156939464-fff15861-1402-446a-b4e7-dbcb30e33a6b.png">
<img width="398" alt="Screen Shot 2022-03-06 at 10 56 00 AM" src="https://user-images.githubusercontent.com/23249184/156939463-8407ce4d-dff7-447a-b72e-91df533398a7.png">
<img width="394" alt="Screen Shot 2022-03-06 at 10 56 14 AM" src="https://user-images.githubusercontent.com/23249184/156939462-dedd21d0-8631-44d5-963f-9b268d08ac17.png">

https://youtu.be/fQXMDZQmyls
