import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';

class BarcodeScannerService {
  static Future<String> scanBarcode() async {
    try {
      String scanResult = await FlutterBarcodeScanner.scanBarcode(
        '#ff6666', 
        'Cancelar', 
        true, 
        ScanMode.BARCODE,
      );

      return scanResult == '-1' ? 'Cancelado' : scanResult;
    } catch (e) {
      return 'Erro ao escanear: $e';
    }
  }
}
