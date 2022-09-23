import 'package:first_app/questions.dart';
import 'package:flutter/material.dart';

import 'answer.dart';

class Quiz extends StatelessWidget {
  final  answerQuestions;
  final List<Map<String, Object>> questions;
  final questionIndex;
  Quiz(
      {@required this.answerQuestions,
      @required this.questions,
      @required this.questionIndex});
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Question(
          questions[questionIndex]["questionText"] as String,
        ),
        ...(questions[questionIndex]["options"] as List<Map<String,Object>>).map((answer) {
          return Answer(answer['t'] as String,()=> answerQuestions(answer['s']));
        }).toList()
      ],
    );
  }
}
