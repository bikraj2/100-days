import 'package:eatmore/pages/homepage.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyHomePage());

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SafeArea(
        
        child: Scaffold(
          body: Mainpage(),
        ),
      ),
    );
  }
}
