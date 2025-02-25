const aiService = require("../services/ai.service");

module.exports.getResponse = async (req, res) => {
  try {
    const { prompt } = req.query;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await aiService(prompt);
    
    console.log(`AI response generated for prompt: "${prompt}"`);
    
    return res.status(200).json({ response });
  } catch (error) {
    console.error("Error in getResponse:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
