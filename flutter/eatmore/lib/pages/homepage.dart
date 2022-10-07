import 'package:flutter/material.dart';

class Mainpage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Container(
          margin: EdgeInsets.symmetric(horizontal: 40),
          width: 300,
          child: Card(
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
            elevation: 3,
            child: Column(
              children: [
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.fromLTRB(0, 20, 0, 0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      ElevatedButton(
                        onPressed: () {},
                        child: Text("Log In"),
                      ),
                      ElevatedButton(
                        onPressed: () {},
                        child: Text("Sign Up"),
                      ),
                    ],
                  ),
                ),
                Container(
                  margin: EdgeInsets.symmetric(horizontal: 20),
                  width: 350,
                  child:  Column(
                        children: [
                          Container(
                            decoration: BoxDecoration(
                                border: Border.all(
                                  width: 1,
                                  color: Colors.blue,
                                )
                              ),
                            child: TextField(
                              
                            ),
                          ),
                          SizedBox(
                            height: 10,
                          ),
                          Container(
                            decoration: BoxDecoration(
                                border: Border.all(
                                  width: 1,
                                  color: Colors.blue,
                                )
                              ),
                            child: TextField()),
                          SizedBox(
                            height: 10,
                          ),
                        ],
                      ),
                ),
                Container(
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all()),
                  width: 200,
                  child: ElevatedButton(
                    onPressed: () {},
                    child: Text("Log In"),
                  ),
                ),
                Text("OR"),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    CircleAvatar(
                      backgroundColor: Colors.white,
                      child: Image.asset("asset/facebook.png"),
                    ),
                    CircleAvatar(
                      backgroundColor: Colors.white,
                      child: Image.asset("asset/google.png"),
                    ),
                    CircleAvatar(
                      backgroundColor: Colors.white,
                      child: Image.asset("asset/twitter.png"),
                    ),
                  ],
                )
              ],
            ),
          ),
        ),
      ],
    );
  }
}
