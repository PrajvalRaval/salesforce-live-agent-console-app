<p align="center">
    <img src="https://user-images.githubusercontent.com/41849970/83685479-5e47cd80-a606-11ea-9b96-6118ec777fc4.png">
</p>

# Saleforce Live Agent(Chat) Console Client.

This is a simple Javascript console app utilising [Saleforce Chat API](https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_understanding_resources.htm). You can use this console app to send and recieve messages from online agents.

Demo Video: [Here](https://drive.google.com/file/d/1Nc6n5J1OTpc8c87sLoYpIp3K7qiulMbs/view?usp=sharing).

---

# Pre-requisites:

1. Saleforce Developer Account with Live Agent(Chat) Setup.

2. Node.js

---

# Installation

1. Clone this repository.

    `git clone https://github.com/PrajvalRaval/salesforce-live-agent-console-app`

1. Change to root directory.

    `cd salesforce-live-agent-console-app`
    
1. Install Dependencies.

    `npm install`
    
1. Open `config.js` file in any editor, and replace all the following values with your own:

    1. `SERVER_URL`: Replace this with your own Chat API Endpoint. To find this value, go to your **Salesforce Dashboard** -> **Setup (In Gear Icon)** -> **Quick Find Search** -> **Type in** `chat setting` -> **Click on Chat Settings option**
    
    <p align="center">
    <img src="https://user-images.githubusercontent.com/41849970/83684587-eaf18c00-a604-11ea-85a6-ae818fbeb3bf.png">
    </p>
    

    2. For remaining values you will need your `Embedded Service Code Snippet` to find it, again go to **Quick Find Search** -> **Type in** `Embedded Service Deployments` -> **Find your current deployment from the list** -> **Click on drop down menu and select 'View'** -> **Scroll Down and click on 'Get Code' button**. From the code, you can find the values here:
    
    <p align="center">
    <img src="https://user-images.githubusercontent.com/41849970/83683865-ad403380-a603-11ea-8e39-3b0ee9b35a58.png">
    </p>
    
1. Run the application.

    `node index`
    
 ---
