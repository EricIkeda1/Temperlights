import 'package:flutter/material.dart';
import 'package:scanocr/services/ocr_service.dart';

class ResultScreen extends StatefulWidget {
  final String code;

  const ResultScreen({super.key, required this.code});

  @override
  _ResultScreenState createState() => _ResultScreenState();
}

class _ResultScreenState extends State<ResultScreen> {
  String recognizedText = 'Reconhecendo...';

  @override
  void initState() {
    super.initState();
    recognizeText();
  }

  Future<void> recognizeText() async {
    String text = await OCRService.recognizeTextFromImage(widget.code);
    setState(() {
      recognizedText = text;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Resultado OCR')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Código Escaneado: ${widget.code}', style: const TextStyle(fontSize: 18)),
            const SizedBox(height: 20),
            Text('Texto OCR:', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            Text(recognizedText, style: const TextStyle(fontSize: 16)),
          ],
        ),
      ),
    );
  }
}
