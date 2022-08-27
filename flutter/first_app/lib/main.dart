import 'package:first_app/answer.dart';
import 'package:flutter/material.dart';
import 'questions.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  var questionIndex = 0;

  void answerQuestions() {
    setState(() {
      questionIndex += 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    var questions = [
      "What is your name?",
      "Where do you live?",
      "How old are you"
    ];
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: const Text("My first App"),
          ),
          body: Column(
            children: [
              Question(
                questions[questionIndex],
              ),
              Answer('A',answerQuestions),
              Answer("B",answerQuestions),
              Answer("C",answerQuestions),
            ],
          )),
    );
  }
}
