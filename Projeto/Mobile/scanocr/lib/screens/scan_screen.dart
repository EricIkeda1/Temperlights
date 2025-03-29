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
      appBar: AppBar(
        title: const Text('Escanear Código de Barras'),
        backgroundColor: Colors.deepPurple,
        centerTitle: true,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Expanded(
            child: Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [Colors.deepPurple, Colors.purpleAccent],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.qr_code_scanner, size: 120, color: Colors.white),
                  const SizedBox(height: 20),
                  const Text(
                    'Aproxime o código de barras ou QR Code da câmera para escanear.',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w500,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 30),
                  ElevatedButton.icon(
                    onPressed: scanBarcode,
                    icon: const Icon(Icons.camera_alt, color: Colors.white),
                    label: const Text(
                      'Iniciar Scanner',
                      style: TextStyle(color: Colors.white),
                    ),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.deepPurple.shade700,
                      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                      textStyle: const TextStyle(fontSize: 18),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
