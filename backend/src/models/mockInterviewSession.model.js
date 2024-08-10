import mongoose, { Schema } from "mongoose";

export const mockInterviewSessionSchema = new Schema(
    {
        id: { type: String, required: true },
        Date: { type: Date, required: true },
        title: { type: String, required: false },
        duration: { type: Number},
        interviewee: { type: Schema.Types.ObjectId, ref: "User", required: true },
        questions: [
            {
                question: { type: String, required: true },
                userAnswer: { type: String, required: true },
                correctAnswer: { type: String, required: true },
                difficulty: { type: String, required: true },
                score: { type: Number, required: true },
            },
        ],
        Notes: { type: String },
    },
);