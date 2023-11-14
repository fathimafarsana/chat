const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startChat() {
  console.log('Welcome to the Console Chat App! Type "exit" to end the chat.');

  rl.question('Enter your username: ', (username) => {
    console.log(`Hello, ${username}! You can start chatting now.`);

    // Start the chat loop
    chatLoop(username);
  });
}

function chatLoop(username) {
  rl.question('You: ', (message) => {
    if (message.toLowerCase() === 'exit') {
      console.log('Chat ended. Goodbye!');
      rl.close();
    } else {
      console.log(`[${username}]: ${message}`);
      chatLoop(username);
    }
  });
}

// Start the chat when the script is run
startChat();
