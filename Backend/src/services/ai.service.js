const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


const prompt = "Code Review Tool";

const result = await model.generateContent(prompt);
c,onsole.log(result.response.text());
,
asyn,c function generateContent(prompt){
   , const result = await model.generateContent(prompt);
  ,  return result.response.text();
},
m,,odule.exports=generateContent;

,nkjnjkn,njnji,,,,,,,,,,,n,
<hulala></hulala>


