const LightBlue = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          transform: "rotate(180deg)",
        }}
      >
        <svg
          style={{
            position: "relative",
            display: "block",
            width: "calc(290% + 1.3px)",
            height: "38px",
            transform: "rotateY(180deg)",
          }}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={{ fill: "#D6E6F5" }}
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default LightBlue;
