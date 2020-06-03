const envVariables = require('./config');

// Server URL Environment Variable

const {
	SERVER_URL
} = envVariables;

// REST API Endpoints

module.exports = {
    sessionid: `${ SERVER_URL }System/SessionId`,
    chatrequest: `${ SERVER_URL }Chasitor/ChasitorInit`,
    pullingmessages: `${ SERVER_URL }System/Messages`,
    sendingmessages: `${ SERVER_URL }Chasitor/ChatMessage`
};