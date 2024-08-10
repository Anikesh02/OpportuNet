import { mockInterviewSessionSchema } from "../models/mockInterviewSession.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { filterQuestions, gradeAnswer } from "../utils/Questions.js";


export const getMockInterviewQuestions = asyncHandler(async (req, res) => {
    const { skills } = req.body;

    if (skills == null) {
        console.log("No skills provided, defaulting to General Programming");
        skills = ['General Programming']
    }

    const questions = await filterQuestions(skills);

    return res.status(200).json({
        status: "success",
        data: questions,
    });
});

export const evaluateAnswer = asyncHandler(async (req, res) => {
    const { question, userAnswer, sampleAnswer } = req.body;
    gradeAnswer(question, userAnswer, sampleAnswer)
        .then((result) => {
            return res.status(200).json({
                status: "success",
                data: result,
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: "error",
                message: error.message,
            });
        });

});

// TODO
export const createMockInterviewSession = asyncHandler(async (req, res) => {

    skills = req.body.skills;
    const { skills, interviewee, date } = req.body;

    const questions = await filterQuestions(skills);
    
    const user = await User.findById(interviewee);
    if (!user) {
        throw new ApiError(404, "User not found");
    }
});