const axios = require("axios");
const apiEndpoints = require("./endpoints");

const sessionId = async () =>
  await axios
    .get(apiEndpoints.sessionid, {
      headers: {
        "X-LIVEAGENT-API-VERSION": 34,
        "X-LIVEAGENT-AFFINITY": "null",
      },
    })
    .then((res) => res.data)
    .then((res) => {
      return {
        success: true,
        data: res,
      };
    })
    .catch(() => {
      return {
        success: false,
      };
    });

const sendingChatRequest = async (body, affinity, sessionkey) =>
  await axios
    .post(apiEndpoints.chatrequest, body, {
      headers: {
        "X-LIVEAGENT-API-VERSION": 34,
        "X-LIVEAGENT-AFFINITY": affinity,
        "X-LIVEAGENT-SESSION-KEY": sessionkey,
        "X-LIVEAGENT-SEQUENCE": 1,
      },
    })
    .then((res) => res.data)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err);
    });

const pullingMessages = async (affinity, sessionkey) =>
  await axios
    .get(apiEndpoints.pullingmessages, {
      headers: {
        "X-LIVEAGENT-API-VERSION": 34,
        "X-LIVEAGENT-AFFINITY": affinity,
        "X-LIVEAGENT-SESSION-KEY": sessionkey,
      },
    })
    .then((res) => res.data)
    .then((res) => {
      //console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });

const sendMessages = async (text, affinity, sessionkey) =>
  await axios
    .post(
      apiEndpoints.sendingmessages,
      {
        text: text,
      },
      {
        headers: {
          "X-LIVEAGENT-API-VERSION": 34,
          "X-LIVEAGENT-AFFINITY": affinity,
          "X-LIVEAGENT-SESSION-KEY": sessionkey,
        },
      }
    )
    .then((res) => res.data)
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });

module.exports.sessionId = sessionId;
module.exports.sendingChatRequest = sendingChatRequest;
module.exports.pullingMessages = pullingMessages;
module.exports.sendMessages = sendMessages;
