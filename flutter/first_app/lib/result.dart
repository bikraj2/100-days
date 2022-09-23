import 'package:flutter/material.dart';

class Result extends StatelessWidget {
  final int score;
  final Function reset;
  String get resultPhrase {
    var resultText = 'you did it';
    if (score < 8) {
      resultText = "you are awesome";
    } else if (score <= 10) {
      resultText = "you are weird";
    } else if (score <= 15) {
      resultText = "get out of my face";
    } else {
      resultText = "Pls dont talk to me";
    }
    return resultText;
  }

  Result({@required this.score, @required this.reset});
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: [
          Text(
            resultPhrase,
            style: const TextStyle(
              fontSize: 28,
              fontWeight: FontWeight.bold,
            ),
          ),
          FlatButton(
              onPressed: reset,
              child: const Text('Restart',
                  style: TextStyle(
                      fontSize: 15,
                      color: Colors.blueGrey,
                      fontWeight: FontWeight.bold)))
        ],
      ),
    );
  }
}
