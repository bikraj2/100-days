import 'dart:async';

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
  final questions = const [
      {
        "questionText": "What is your favorite colour?",
        "options": ['Black', 'Blue', 'White', 'Red']
      },
      {
        "questionText": "What is the national animal of nepal",
        "options": ['fox', 'cow', 'dog', 'rat']
      },
      {
        "questionText": "What is your age?",
        "options": ['Newborn', 'old', 'bloomer', 'punk']
      },
      {
        "questionText": "What is your name?",
        "options": ['Noone', 'ram', 'hari', 'sita']
      },
    ];

  void answerQuestions() {
    // if(questionIndex>=){

    // }
    setState(() {
      questionIndex += 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: const Text("My first App"),
          ),
          body: questionIndex<questions.length ? 
          Column(
            children: [
              Question(
                questions[questionIndex]["questionText"] as String,
              ),
              ...(questions[questionIndex]["options"] as List<String>)
                  .map((answer) {
                return Answer(answer, answerQuestions);
              }).toList()
            ],
          )
          :Center(child:Text('ou did it'))),
    );
  }
}
