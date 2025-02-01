import { StreamingTextResponse } from "ai"

// Set runtime to nodejs
export const runtime = "nodejs"

if (!process.env.AIMLAPI_KEY) {
  throw new Error("AIMLAPI_KEY environment variable is not set")
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages[messages.length - 1]

    // Make the API call to AIMLAPI
    const response = await fetch("https://api.aimlapi.com/v1/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIMLAPI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: "You are a travel agent. Be descriptive and helpful",
          },
          ...messages,
        ],
      }),
    })

    if (!response.ok) {
      throw new Error(`AIMLAPI error: ${response.statusText}`)
    }

    // Get the response as a stream
    const stream = response.body

    if (!stream) {
      throw new Error("No stream in response")
    }

    // Return the stream using the AI SDK's StreamingTextResponse
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request.",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}

