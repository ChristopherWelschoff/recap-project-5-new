export default function ColorPalette({ colors }) {
  return (
    <div style={{ display: "flex" }}>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            flexDirection: "rows",
            backgroundColor: color,
            width: "50px",
            height: "50px",
          }}
        />
      ))}
    </div>
  );
}
