import { API_KEY } from "./config.js";

async function generateCoverLetter(event) {
    if (event) event.preventDefault();

    const role = document.getElementById("role").value.trim();
    const company = document.getElementById("company").value.trim();
    const output = document.getElementById("output");
    const button = document.getElementById("generateBtn");

    if (!role || !company) {
        alert("Please fill in both Role and Company Name.");
        return;
    }

    output.textContent = "Generating your cover letter...";
    button.disabled = true;
    button.textContent = "Generating...";

    const prompt = `
You are a professional HR expert.

Write a professional cover letter using the following details:
candidate Name:${name}
Job Role: ${role}
Company: ${company}
Skills:${skills}

Instructions:
- Start with "Dear Hiring Manager,"
- Mention the candidate's name naturally in the first paragraph.
- Write 250–350 words.
- Use a formal and professional tone.
- Mention relevant skills and enthusiasm for the company.
- End with:
Sincerely,
${name}
`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    try {

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 800
                }
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(data);
            output.textContent = "Error: " + (data.error?.message || "Something went wrong.");
            return;
        }

        if (
            data.candidates &&
            data.candidates.length > 0 &&
            data.candidates[0].content.parts.length > 0
        ) {
            output.textContent =
                data.candidates[0].content.parts[0].text;
        } else {
            output.textContent = "No response received from Gemini.";
            console.log(data);
        }

    } catch (error) {
        console.error(error);
        output.textContent = "Network Error. Please check your internet connection.";
    } finally {
        button.disabled = false;
        button.textContent = "Generate Cover Letter";
    }
}

document
    .getElementById("generateBtn")
    .addEventListener("click", generateCoverLetter);

document.getElementById("copyBtn").addEventListener("click", () => {

    const text = document.getElementById("output").innerText;

    if (!text.trim()) {
        alert("Please generate a cover letter first.");
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Cover Letter copied successfully!");
        })
        .catch(() => {
            alert("Failed to copy.");
        });

});