class ChatBotService {
    static getResponse(message) {
        const lowerMessage = message.toLowerCase();

        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! How can I assist you today?";
        } else if (lowerMessage.includes('product') || lowerMessage.includes('products')) {
            return "We have a wide range of marine and engineering products. Would you like to see our list of products?";
        } else if (lowerMessage.includes('reservation') || lowerMessage.includes('schedule')) {
            return "You can schedule an appointment through the reservation form on our website.";
        } else if (lowerMessage.includes('company')) {
            return "PT Cindo Internasional Marine Trading is a multinational trading company with branches in Jakarta, Batam, Surabaya, Kalimantan, and Sulawesi.";
        } else if (lowerMessage.includes('contact')) {
            return "You can contact us at cimt.Batam@gmail.com or call 0831-83-666666.";
        } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
            return "You're welcome! Let me know if you need any further assistance.";
        } else {
            return "I'm still learning about that. Can you rephrase or ask something else?";
        }
    }
}

module.exports = ChatBotService;