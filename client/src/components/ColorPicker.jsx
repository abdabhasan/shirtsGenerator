import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";
const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute" style={{ left: "60px", marginLeft: "10px" }}>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
