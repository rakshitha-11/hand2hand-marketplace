class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("price")) {
      this.actionProvider.handlePrice();
    }

    if (lower.includes("discount")) {
      this.actionProvider.handleDiscount();
    }
  }
}

export default MessageParser;