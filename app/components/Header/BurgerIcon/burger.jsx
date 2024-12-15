import { motion } from "framer-motion";

const BurgerIcon = ({ fill }) => {
  return (
    <div style={{ width: "2.0625rem", hight: "1.25rem" }}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 33 20"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="33" height="2" />
        <rect y="9" width="33" height="2" />
        <rect y="18" width="33" height="2" />
      </motion.svg>
    </div>
  );
};
export default BurgerIcon;
