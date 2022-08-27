import 'package:flutter/material.dart';

class Answer extends StatelessWidget {
  final String answerText;
  final VoidCallback func;
  const Answer(this.answerText,this.func);
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.fromLTRB(100, 0, 100, 0),
      child: RaisedButton(
        color: Colors.blueAccent,
        child: Text(answerText),
        onPressed: func,
      ),
    );
  }
}
