const inputReader = require("wait-console-input");
const helperFunctions = require("./helperFunctions");
const envVariables = require("./config");
const chalk = require("chalk");

console.log(
  chalk.cyan.bold("\n\t Welcome To Salesforce Live Agent Console App.\n")
);

console.log(
  "To start a session, please start by entering: " + chalk.yellow("start")
);
console.log("To exit application, please enter: " + chalk.red("stop \n"));

let input = inputReader.readLine("> ");

if (input === "start") {
  main();
} else {
  console.log(chalk.white.bgMagenta("\n Program Exited Successfully"));
}

async function main() {
  const getSessionId = await helperFunctions.sessionId();

  if (getSessionId.success === true) {
    const sessionkey = getSessionId.data.key;
    const affinity = getSessionId.data.affinityToken;
    const sessionid = getSessionId.data.id;

    const body = {
      organizationId: envVariables.CHAT_ORGANISATIONID,
      deploymentId: envVariables.CHAT_DEPLOYMENTID,
      buttonId: envVariables.CHAT_BUTTONID,
      sessionId: sessionid,
      userAgent: "Lynx/2.8.8",
      language: "en-US",
      screenResolution: "1900x1080",
      visitorName: "Console Test User",
      prechatDetails: [],
      prechatEntities: [],
      receiveQueueUpdates: true,
      isPost: true,
    };

    const sendingChatRequest = await helperFunctions.sendingChatRequest(
      body,
      affinity,
      sessionkey
    );

    if (sendingChatRequest === true) {
      console.log(
        chalk.black.bgGreenBright("\n Chat Session Initiated Successfully.")
      );

      var pullmessageorg = await helperFunctions.pullingMessages(
        affinity,
        sessionkey
      );

      while (pullmessageorg.messages[0].type != "ChatEnded") {
        if (pullmessageorg.messages[0].type === "ChatRequestSuccess") {
          console.log(
            chalk.whiteBright.bgBlueBright(
              "\n Waiting for agent to accept your request."
            )
          );
        }
        if (pullmessageorg.messages[0].type === "ChatEstablished") {
          console.log(
            chalk.black.bgGreenBright("\n Agent Accepted your request.")
          );
          console.log(
            "\n" +
              chalk.cyanBright(pullmessageorg.messages[0].message.name) +
              chalk.white(
                " is here to help you. Should be joining you any second now."
              )
          );
        }
        if (pullmessageorg.messages[0].type === "ChatMessage") {
          console.log(
            "\n" +
              chalk.yellowBright(pullmessageorg.messages[0].message.name) +
              " : " +
              pullmessageorg.messages[0].message.text +
              "\n"
          );

          let text = inputReader.readLine(chalk.red("You : "));

          const sendMessage = await helperFunctions.sendMessages(
            text,
            affinity,
            sessionkey
          );

          if (sendMessage !== "OK") {
            console.log(chalk.white.bgRed("\n Error: Cannot Send Message \n"));
            return;
          }
        }
        const pullingMessagesAgain = await helperFunctions.pullingMessages(
          affinity,
          sessionkey
        );
        pullmessageorg = pullingMessagesAgain;
      }

      console.log(
        chalk.white.bgMagenta("\n Chat Ended. Agent Left The Chat. \n")
      );
      return;
    } else {
      console.log(
        chalk.white.bgRed("\n Error: Sending Chat Request Failed \n")
      );
      return;
    }
  } else {
    console.log(chalk.white.bgRed("\n Error: Cannot Get Session Id \n"));
    return;
  }
}
