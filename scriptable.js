// Variables used by Scriptable.
// These must be at the very top of the file.
// icon-color: purple; icon-glyph: magic;

// Scriptable file used to explain texts using open ai.

// Get arguments from Apple Shortcut
// https://docs.scriptable.app/args/#shortcutparameter
const input = args.shortcutParameter || "";

if (input.length == 0) {
  return false;
}

// Change the prompt to whatever you want
// This is what worked the best for me
const prompt = `explain this including important information:\n\n${input.trim()}`;

// Create an api key on https://beta.openai.com/account/api-keys
// and update the value below
const token = "Bearer YOUR_API_KEY_HERE";

const request = new Request("https://api.openai.com/v1/completions");
request.method = "POST";
request.headers = {
  "Content-type": "application/json",
  Authorization: token,
};
request.body = JSON.stringify({
  prompt,
  max_tokens: 3000,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  model: "text-davinci-003",
  temperature: 0.7,
});

let out = "";
try {
  const response = await request.loadJSON();
  out = response.choices.map((t) => t.text.trim()).join("\n");
  //out = JSON.stringify(response, null, 2)
} catch (e) {
  out = `Something went wrong: ${e}`;
}

// Sent response to Apple Shortcut
Script.setShortcutOutput(out);
Script.complete();
