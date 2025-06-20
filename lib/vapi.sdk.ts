import Vapi from "@vapi-ai/web";

// Get the VAPI token from environment variables
const vapiToken = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;

// Initialize VAPI with error handling
let vapi: Vapi;

try {
  if (!vapiToken) {
    console.error('VAPI Web Token is missing. Please check your .env file.');
    // Provide a fallback to prevent crashes, but it won't work without a valid token
    vapi = new Vapi('placeholder-token');
  } else {
    vapi = new Vapi(vapiToken);
  }
} catch (error) {
  console.error('Error initializing VAPI:', error);
  // Provide a fallback to prevent crashes
  vapi = new Vapi('placeholder-token');
}

export { vapi };
