import PrimaryButton from "../../atoms/buttons/PrimaryButton";
import { MainHeadline } from "../../atoms";
import "./homepage.css";

export const HomePage = () => {
  return (
    <div>
      <MainHeadline headline="Home Page"></MainHeadline>
      <PrimaryButton>{"Knappe navn"}</PrimaryButton>
    </div>
  );
};
