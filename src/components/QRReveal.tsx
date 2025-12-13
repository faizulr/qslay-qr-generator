import { Download, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QRRevealProps {
  imageBase64: string | null;
  isLoading: boolean;
}

const QRReveal = ({ imageBase64, isLoading }: QRRevealProps) => {
  const handleDownload = () => {
    if (!imageBase64) return;

    const link = document.createElement("a");
    link.href = `data:image/png;base64,${imageBase64}`;
    link.download = "qslay-qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass-card gradient-border rounded-2xl p-8 h-full flex flex-col items-center justify-center min-h-[400px] animate-fade-in">
      {isLoading ? (
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-lg font-medium text-muted-foreground">
            Cooking up your code... 🍳
          </p>
        </div>
      ) : imageBase64 ? (
        <div className="flex flex-col items-center gap-6 animate-scale-in">
          <div className="p-4 bg-background/50 rounded-xl neon-glow">
            <img
              src={`data:image/png;base64,${imageBase64}`}
              alt="Generated QR Code"
              className="w-64 h-64 rounded-lg"
            />
          </div>
          <Button
            onClick={handleDownload}
            variant="secondary"
            className="gap-2 px-6 py-3 h-auto text-base font-semibold hover:bg-secondary/80 transition-all"
          >
            <Download className="w-5 h-5" />
            Download PNG
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 text-muted-foreground">
          <div className="w-24 h-24 rounded-2xl bg-secondary/50 flex items-center justify-center">
            <QrCode className="w-12 h-12 text-primary/50" />
          </div>
          <p className="text-lg font-medium">Your QR code will appear here</p>
        </div>
      )}
    </div>
  );
};

export default QRReveal;
