import React, { Component } from "react";
import { Widget, addResponseMessage, } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import Wrapper from "./styles";
import logo from '../../assets/team.jpg';

class ChatWidget extends Component {
  componentDidMount() {
    addResponseMessage("Hello User!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message through the backend API
    this.sendMessage(newMessage);
  };

  sendMessage = (message) => {
    if (message.trim() !== "") {
      const response = this.generateResponse(message);

      addResponseMessage(response.text);

      if (response.prompt) {
        addResponseMessage(response.prompt.response);
      }

      // Clear the input field
      this.clearInput(message);
    }
  };

  generateResponse = (message) => {
    // Define the predefined prompts and corresponding answers
    const prompts = [
      {
        prompt: "1",
        answer: "ShopBuddies is an ecommerce app.",
        response:
          "ShopBuddies is an ecommerce app that helps users find the best deals and earn cashback on their online purchases.",
      },
      {
        prompt: "2",
        answer: "Enter your shipping address and your credit card info",
        response:
          "You must add items into cart first :)",
      },
    ];

    const lowerCaseMessage = message.toLowerCase(); // Convert user message to lowercase

    // Check if the lowercase message matches any predefined prompts
    for (const prompt of prompts) {
      const lowerCasePrompt = prompt.prompt.toLowerCase(); // Convert prompt to lowercase
      if (lowerCaseMessage.includes(lowerCasePrompt)) {
        return {
          text: prompt.answer,
          prompt: {
            answer: prompt.prompt,
            response: prompt.response,
          },
        };
      }
    }

    // If no prompt matches, return a generic greeting
    const greetings = ["Pick a number of the questions below:\n\t &nbsp; 1. What is ShopBuddies\n\t &nbsp; 2. How to make payment\n\t"];
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return { text: greetings[randomIndex] };
  };

  clearInput = () => {
    const message = document.getElementById("message");
    message.value = "";
  };



  render() {
    return (
      <Wrapper>
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Communication Portal"
          subtitle="Instant Chat"
          senderPlaceHolder="Ask a question?"
        />
      </Wrapper>
    );
  }
}

export default ChatWidget;