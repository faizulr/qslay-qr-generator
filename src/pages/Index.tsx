import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import ColorPicker from "@/components/ColorPicker";
import QRReveal from "@/components/QRReveal";
import { generateQRCode } from "@/services/qrApi";

const Index = () => {
  const [url, setUrl] = useState("");
  const [vibeColor, setVibeColor] = useState("#A855F7");
  const [chillColor, setChillColor] = useState("#FFFFFF");
  const [qrImage, setQrImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!url.trim()) {
      toast({
        title: "Hold up! 🛑",
        description: "Drop a URL first, bestie.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setQrImage(null);

    try {
      const base64 = await generateQRCode(url, vibeColor, chillColor);
      setQrImage(base64);
      toast({
        title: "It's giving! ✨",
        description: "Your QR code is ready to slay.",
      });
    } catch (error) {
      if (error instanceof Error && error.message === "TIMEOUT") {
        toast({
          title: "Server Timeout ⏰",
          description: "The server is waking up... please try again in 10 seconds!",
          variant: "destructive",
        });
      } else {
        toast({
          title: "That's not it 😬",
          description: "Something went wrong. Try again?",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        {/* Header */}
        <header className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-black text-foreground neon-text mb-4">
            QSlay
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
            Make your links slaps.
          </p>
        </header>

        {/* Main Content */}
        <main className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Side - Controls */}
          <div className="glass-card gradient-border rounded-2xl p-8 space-y-8 animate-fade-in">
            {/* URL Input */}
            <div className="space-y-2">
              <Label htmlFor="url" className="text-sm font-medium text-foreground">
                Destination URL
              </Label>
              <Input
                id="url"
                type="url"
                placeholder="https://..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-14 px-4 text-base bg-white/5 border border-white/20 focus:ring-2 focus:ring-ring transition-all"
              />
            </div>

            {/* Color Pickers */}
            <div className="grid sm:grid-cols-2 gap-6">
              <ColorPicker
                label="Vibe Color (Foreground)"
                value={vibeColor}
                onChange={setVibeColor}
              />
              <ColorPicker
                label="Chill Color (Background)"
                value={chillColor}
                onChange={setChillColor}
              />
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={isLoading}
              className="w-full h-16 text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 text-white rounded-xl neon-glow transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              {isLoading ? "SLAYING..." : "SLAY IT 🔥"}
            </Button>
          </div>

          {/* Right Side - QR Reveal */}
          <QRReveal imageBase64={qrImage} isLoading={isLoading} />
        </main>
      </div>
    </div>
  );
};

export default Index;
