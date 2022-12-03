import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";
//questions
export async function getQuestions(req, res) {
  try {
    const question = await Questions.find();
    res.json(question);
  } catch (error) {
    res.json({ error });
  }
}

export async function insertQuestions(req, res) {
  try {
    Questions.insertMany(
      { questions: questions, answer: answers },
      function (error, data) {
        res.json({ msg: "DATA SAVED" });
      }
    );
  } catch (error) {
    console.log({ error });
  }
}

export async function deleteQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "DATA DELETED" });
  } catch (error) {
    res.json({ error });
  }
}

//result
export async function getResult(req, res) {
  try {
    const result = await Results.find();
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
}
export async function postResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error("DATA NOT PROVIDED!");
    Results.create(
      { username, result, attempts, points, achieved },
      function (error, data) {
        res.json({ msg: "Result SAVED" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

export async function deleteResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted" });
  } catch (error) {
    res.json({ error });
  }
}
