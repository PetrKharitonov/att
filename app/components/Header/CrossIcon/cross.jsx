import { motion } from "framer-motion";

const CrossIcon = ({ fill }) => {
  return (
    <div style={{ width: "1.5625rem", hight: "1.5625rem" }}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 25 25"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.54688"
          y="0.562744"
          width="33.1677"
          height="2.01016"
          transform="rotate(45 1.54688 0.562744)"
        />
        <rect
          y="24.0159"
          width="33.1677"
          height="2.01016"
          transform="rotate(-45 0 24.0159)"
        />
      </motion.svg>
    </div>
  );
};
export default CrossIcon;
