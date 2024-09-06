import Link from "next/link";
import arrow from "@/public/arrowIcon.svg";

const Button = ({ text, link }) => {
  return (
    <Link href={link}>
      <p>{text}</p>
    </Link>
  );
};
export default Button;
