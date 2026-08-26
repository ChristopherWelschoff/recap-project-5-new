import React from "react";

const SvgMock = React.forwardRef(function SvgMock(props, ref) {
  return <svg ref={ref} {...props} />;
});

export default SvgMock;