import Groq from "groq-sdk";
import fs from "fs";
import csv from "csv-parser";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

function getRandomQuestions(questions, count) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export function filterQuestions(selectedCategories) {
    const filePath = 'src/dataset/SoftwareQuestions.csv';

    return new Promise((resolve, reject) => {
        const questions = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                if (selectedCategories.includes(row.Category)) {
                    questions.push(row);
                }
            })
            .on('end', () => {
                const easyQuestions = questions.filter(q => q.Difficulty === 'Easy');
                const mediumQuestions = questions.filter(q => q.Difficulty === 'Medium');
                const hardQuestions = questions.filter(q => q.Difficulty === 'Hard');

                const selectedEasy = getRandomQuestions(easyQuestions, 4);
                const selectedMedium = getRandomQuestions(mediumQuestions, 3);
                const selectedHard = getRandomQuestions(hardQuestions, 3);

                const selectedQuestions = [...selectedEasy, ...selectedMedium, ...selectedHard];

                const filteredQuestions = selectedQuestions.map(q => ({
                    Question: q.Question,
                    Answer: q.Answer,
                    Difficulty: q.Difficulty,
                }));

                resolve(filteredQuestions);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

export async function gradeAnswer(question, userAnswer, sampleAnswer, retries = 5) {

    const prompt = `Return the following prompt STRICTLY in this JSON like format: 
    {
        "score": 9,
        "title": "The answer is correct.",
        "feedback": "The answer is correct. Good job!"
        "correctedAnswer": "An abstract class can't be instantiated and can have abstract and concrete methods. An interface only has method signatures without implementations."
    }
    
    Grade the following question as an integer between 0 to 10 (0 being totally incorrect, and 10 being a perfect answer with no room for improvement) as an interviewer based on the userAnswer using the sampleAnswer provided as a reference but don't rely solely on the sampleAnswer. 
    Provide a title (one-sentence feedback on the user's answer saying either good job, or nice try, or perfect, or something like that); it should be very concise (in less than 5 words).
    Provide feedback on the user's answer and suggest improvements unless it's a prefect answer. Try to be critical but constructive. And keep the feedback short and concise (less than 150 words).
    Even if the answer seems perfect, give it a good score but try to find some room for improvement in the feedback.
    Ignore the answer's grammatical errors to some extent as the answer was collected using text-to-speech. So bear in mind that the structure of the userAnswer might not be ideal, so focus on his intentions rather than grammar and sentence structure. And focus on the concept. There might be some words misinterpreted by the text-to-speech engine, if the pronounciation of such words match with something related, be a little lenient about it.
    Also provide a corrected version of the user's answer in correctedAnswer, it should include the improvements that you wrote in the feedback as well.
    Skip any introductory or concluding statements and focus on the main content of the response in the given format. If you see any irrelevant information, you can ignore it.
    If the user's answer is totally irrelevant or empty, give it a score of 0 and provide feedback accordingly.

    question: ${question}
    userAnswer: ${userAnswer}
    sampleAnswer: ${sampleAnswer}
    `;

    try {
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "llama-3.1-70b-versatile",
            stream: false,
            temperature: 0.5,
            max_tokens: 512,
        });

        try {
            const answer = JSON.parse(response.choices[0]?.message?.content);
            answer.userAnswer = userAnswer;
            return answer;
        } catch (jsonError) {

            // Check the string to find '{' and '}' and try to parse only that part
            const jsonString = response.choices[0]?.message?.content;
            const startIndex = jsonString.indexOf('{');
            const endIndex = jsonString.lastIndexOf('}');
            const json = jsonString.substring(startIndex, endIndex + 1);

            try {
                const answer = JSON.parse(json);
                answer.userAnswer = userAnswer;
                console.log('Answer after substring:', answer);
                return answer;
            } catch (jsonError) {
                console.error('Failed to parse this string:', json);
            }

            if (retries > 0) {
                console.warn('Response not in JSON format, retrying...', retries);
                return gradeAnswer(question, userAnswer, sampleAnswer, retries - 1);
            } else {
                throw new Error('Failed to parse response as JSON after multiple attempts');
            }
        }
    } catch (error) {
        console.error('Error grading question:', error);
        throw error;
    }
}

// gradeAnswer("What is an abstract class, and how is it different from an interface?", "An abstract class can't be instantiated and can have abstract and concrete methods. An interface only has method signatures without implementations.", "An abstract class can't be instantiated and can have abstract and concrete methods. An interface only has method signatures without implementations.").then((res) => {
//     console.log(typeof(res));
// });


export async function generateQuestions(list) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: "Explain the importance of fast language models",
            },
        ],
        model: "llama3-8b-8192",
    });
}
