
const mongoose = require('mongoose');

//schema tuzish
const AnswerSchema = mongoose.Schema({
    Id: String,
    QuestionId: String,
    Value: String,
    IsRight: String,
});

const QuestionSchema = mongoose.Schema({
    Id: String,
    Text: String,
    TestId: String
});

const testsSchema = mongoose.Schema({
    id: String,
    tests: String,
    parts: String

});
const PartSchema = mongoose.Schema({
    Part: String,
    Id: Number

});

//model tuzish
const Answer = mongoose.model("Answer", AnswerSchema);
const Question = mongoose.model("Question", QuestionSchema);
const Tests = mongoose.model("tests", testsSchema);
const Part = mongoose.model("Part", PartSchema);



//mongoDbdan "part" bo'yicha testlarni olish
async function getTestsByPart(part) {
    const test = await Tests.find({
        parts: part
    });
    return test;

}
// mongoDbdan part larni olish
async function getPart() {
    const part = await Part.find();
    return part;

}
// savollarni olish testId bo'yicha
async function getQues(testId){
    const ques = Question.find({
        TestId: testId
    })
    return ques;
}
// javaoblarni test bo'yicha olish
async function getAnsw(questionId){
    const answ = Answer.find({
        QuestionId:questionId
    })
    return answ;
}



// export qilish

module.exports.getAnsw = getAnsw;
module.exports.getTestsByPart = getTestsByPart;
module.exports.getPart = getPart;
module.exports.getQues = getQues;