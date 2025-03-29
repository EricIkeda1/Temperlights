import 'package:flutter/material.dart';
import 'package:scanocr/screens/home_screen.dart';

void main() {
  runApp(const ScanOCRApp());
}

class ScanOCRApp extends StatelessWidget {
  const ScanOCRApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'ScanOCR',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const HomeScreen(),
    );
  }
}
