import 'package:flutter/material.dart';
import 'package:flutter_complete_guide/models/transactions.dart';
import 'package:flutter_complete_guide/widgets/chart_bar.dart';
import 'package:intl/intl.dart';

class Chart extends StatelessWidget {
  final List<Transaction> recentTransaction;
  Chart({@required this.recentTransaction});

  List<Map<String, Object>> get groupedTransactionValues {
    return List.generate(7, (index) {
      final weekDay = DateTime.now().subtract(
        Duration(days: index),
      );
      double totalSum = 0;

      for (var i = 0; i < recentTransaction.length; i++) {
        var x = recentTransaction[i].date;
        if (x.day == weekDay.day &&
            x.month == weekDay.month &&
            x.year == weekDay.year) {
          totalSum += recentTransaction[i].amount;
        }
      }

      return {'day': DateFormat.E().format(weekDay)[0], "amount": totalSum};
    }).reversed.toList();
  }

  double get totalSpending {
    return groupedTransactionValues.fold(0.0, (sum, item) {
      return sum + item['amount'];
    });
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      margin: EdgeInsets.all(20),
      child: Padding(
        padding: EdgeInsets.all(10),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
          ...groupedTransactionValues.map((tx) {
            return ChartBar(
              label: tx['day'],
              spendingAmount: tx['amount'],
              spendingPctOfTotal: totalSpending == 0.0 ? 0.0:  ( tx['amount'] as double )/totalSpending,
            );
          }).toList(),
        ]),
      ),
    );
  }
}
