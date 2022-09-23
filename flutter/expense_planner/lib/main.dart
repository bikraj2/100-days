import 'package:flutter/material.dart';
import 'package:flutter_complete_guide/widgets/transaction_list.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {


  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "My first page",
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {


  final size = double.infinity;
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  // String? titleInput;
  // String? amountInput;

  final titleController = TextEditingController();
  final amountController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Rupaiyya",
          style: TextStyle(
            fontSize: 15,
            color: Colors.white30,
          ),
        ),
      ),
      body: Center(
        child: Column(
          // mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Card(
              color: Colors.blue,
              elevation: 5,
              child: Container(
                  width: double.infinity,
                  child: const Text(
                    "Chart",
                    style: TextStyle(
                      color: Colors.white,
                    ),
                  )),
            ),
            Card(
              elevation: 5,
              child: Container(
                padding: const EdgeInsets.all(10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    TextField(
                      cursorColor: Colors.red,
                      decoration: const InputDecoration(labelText: "Title"),
                      controller: titleController,
                    ),
                    TextField(
                      decoration: const InputDecoration(labelText: "Amount"),
                      controller: amountController,
                    ),
                    FlatButton(
                        onPressed: () => {print(titleController.text)},
                        child: const Text(
                          "Add",
                          style: TextStyle(color: Colors.purple),
                        ))
                  ],
                ),
              ),
            ),
            TransactionList()
          ],
        ),
      ),
    );
  }
}
