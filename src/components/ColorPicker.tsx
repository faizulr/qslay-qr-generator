import { Label } from "@/components/ui/label";

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

const ColorPicker = ({ label, value, onChange }: ColorPickerProps) => {
  return (
    <div className="space-y-3">
      <Label className="text-base font-bold text-foreground">{label}</Label>
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-12 h-12 rounded-lg cursor-pointer border-2 border-white/20 bg-transparent appearance-none"
            style={{ 
              WebkitAppearance: 'none',
              padding: 0,
            }}
          />
          <div 
            className="absolute inset-1 rounded-md pointer-events-none"
            style={{ backgroundColor: value }}
          />
        </div>
        <input
          type="text"
          value={value.toUpperCase()}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 h-12 px-4 rounded-lg bg-white/5 border border-white/20 text-foreground font-mono text-sm uppercase focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          placeholder="#000000"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
