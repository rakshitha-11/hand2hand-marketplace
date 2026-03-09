class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handlePrice() {
    const message = this.createChatBotMessage(
      "You can negotiate with the seller using the 'Make Offer' button."
    );

    this.updateChatbotState(message);
  }

  handleDiscount() {
    const message = this.createChatBotMessage(
      "Try offering ₹100–₹200 less than the listed price."
    );

    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;