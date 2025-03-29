import 'package:flutter/material.dart';
import 'package:scanocr/services/barcode_scanner.dart';
import 'package:scanocr/screens/result_screen.dart';

class ScanScreen extends StatefulWidget {
  const ScanScreen({super.key});

  @override
  _ScanScreenState createState() => _ScanScreenState();
}

class _ScanScreenState extends State<ScanScreen> {
  Future<void> scanBarcode() async {
    String barcode = await BarcodeScannerService.scanBarcode();

    if (!mounted) return;

    if (barcode != 'Cancelado') {
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => ResultScreen(code: barcode)),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Escanear Código de Barras')),
      body: Center(
        child: ElevatedButton(
          onPressed: scanBarcode,
          child: const Text('Iniciar Scanner'),
        ),
      ),
    );
  }
}
