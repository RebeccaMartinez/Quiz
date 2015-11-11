var Quiz = require('../models/quiz_model');
var quiz = new Quiz();
var current = quiz.randomQuestion();
exports.index = function(req, res, next) {
	res.render('index', { title: 'Quiz' });
};
exports.question = function(req,res) {
	current = quiz.randomQuestion();
	res.render('quizes/question', {pregunta: current.pregunta });
};
exports.answer = function(req, res) {
	var c = 'Incorrecto';
	if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
	res.render('quizes/answer', {respuesta: c})
};
exports.showAll = function(req,res) {
	var aux = quiz.returnAllQuestions();
	res.render('quizes/question',{ pregunta: aux });
};
exports.showQuestionById = function(req,res) {
	questId = req.params.id;
	res.render('quizes/question',{pregunta: quiz.returnAllQuestions()[questId]});
}
