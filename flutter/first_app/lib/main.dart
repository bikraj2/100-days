import 'dart:async';
import 'package:first_app/quiz.dart';
import 'package:first_app/result.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  var _questionIndex = 0;
  var _totalScore = 0;
  final _questions = const [
    {
      "questionText": "What is your favorite colour?",
      "options": [
        {'t': 'Black', 's': 10},
        {'t': 'Blue', 's': 9},
        {'t': 'White', 's': 7},
        {'t': 'Red', 's': 9},
      ]
    },
    {
      "questionText": "What is the national animal of nepal",
      "options": [
        {'t': 'fox', 's': 2},
        {'t': 'cow', 's': 5},
        {'t': 'dog', 's': 4},
        {'t': 'rat', 's': 3}
      ]
    },
    {
      "questionText": "What is your age?",
      "options": [
        {'t': 'Newborn', 's': 2},
        {'t': 'old', 's': 4},
        {'t': 'bloomer', 's': 2},
        {'t': 'punk', 's': 3}
      ]
    },
    {
      "questionText": "What is your name?",
      "options": [
        {'t': 'Noone', 's': 2},
        {'t': 'ram', 's': 0},
        {'t': 'hari', 's': 4},
        {'t': 'sita', 's': 8}
      ]
    },
  ];

  void _answerQuestions(int score) {
    // if(questionIndex>=){

    // }
    _totalScore += score;
    setState(() {
      _questionIndex += 1;
    });
  }

  void resetScore() {
    setState(() {
      _questionIndex = 0;
    _totalScore = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: const Text("My first App"),
          ),
          body: _questionIndex < _questions.length
              ? Quiz(
                  answerQuestions: _answerQuestions,
                  questions: _questions,
                  questionIndex: _questionIndex,
                )
              : Result(score: _totalScore,reset:resetScore)),
    );
  }
}
