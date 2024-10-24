import { useState } from "react";

export default function Card({ color }: { color: string }) {
  const [newColor, setNewColor] = useState(color);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setNewColor(e.target.value);
  };

  return (
    <div className="card" style={{ backgroundColor: newColor }}>
      {color}
      <input type="text" value={newColor} onChange={handleColorChange} />
    </div>
  );
}
