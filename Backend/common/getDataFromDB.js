
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
const Answer = mongoose.model("answer", AnswerSchema);
const Question = mongoose.model("question", QuestionSchema);
const Tests = mongoose.model("tests", testsSchema);
const Part = mongoose.model("part", PartSchema);





//mongoDbdan "part" bo'yicha testlarni olish
async function getTestsByPart() {
    const test = await Tests.find({
        
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