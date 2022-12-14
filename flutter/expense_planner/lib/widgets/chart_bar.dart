import 'package:flutter/material.dart';

class ChartBar extends StatelessWidget {
  final String label;
  final double spendingAmount;
  final double spendingPctOfTotal;

  const ChartBar(
      {Key key, this.label, this.spendingAmount, this.spendingPctOfTotal})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Flexible(
      fit:FlexFit.tight,
      child: Column(
        children: [
          FittedBox(child: Text('\$${spendingAmount.toStringAsFixed(0)}')),
          SizedBox(
            height: 4,
          ),
          Container(
            height: 60,
            width: 10,
            child: Stack(children: [
              Container(
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.black, width: 1),
                  color: Color.fromRGBO(220, 220, 220, 1),
                  borderRadius: BorderRadius.circular(20),
                ),
              ),
              FractionallySizedBox(
                heightFactor: spendingPctOfTotal,
                child: Container(
                  decoration: BoxDecoration(
                    color: Theme.of(context).primaryColor,
                    borderRadius: BorderRadius.circular(20),
                  ),
                ),
              ),
            ]),
          ),
          SizedBox(
            height: 4,
          ),
          Text('${label}')
        ],
      ),
    );
  }
}
