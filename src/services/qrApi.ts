const API_ENDPOINT = "https://9c13c97c-9b3c-4175-ab60-d4084fc121e8-00-32xe56phizahc.picard.replit.dev/api/generate";

interface GenerateQRRequest {
  url: string;
  fill_color: string;
  bg_color: string;
}

interface GenerateQRResponse {
  status: string;
  data: {
    image_base64: string;
  };
}

export async function generateQRCode(
  url: string,
  fillColor: string,
  bgColor: string
): Promise<string> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        fill_color: fillColor,
        bg_color: bgColor,
      } as GenerateQRRequest),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: GenerateQRResponse = await response.json();

    if (data.status !== "success") {
      throw new Error("QR generation failed");
    }

    return data.data.image_base64;
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("TIMEOUT");
    }

    throw error;
  }
}
