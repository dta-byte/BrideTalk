import {
  MainHeadline,
  PrimaryButton,
  CancelButton,
  EnterText,
  EnterEmail,
  EnterPassword,
  Dropdown,
} from "../../../atoms";
import "./createuserform.css";
export const CreateUserForm = () => {
  return (
    <div>
      <div className="form">
        <MainHeadline headline="Sign up to Bride Talk"></MainHeadline>
        <div
          className="question"
          style={{
            paddingBottom: "15px",
            paddingTop: "0px",
          }}
        >
          Already a user?{" "}
          <span
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Log in here
          </span>
        </div>
        <EnterText text="First Name "></EnterText>
        <EnterText text="Last Name "></EnterText>
        <EnterEmail email="Email "></EnterEmail>
        <EnterPassword password="Password"></EnterPassword>
        <EnterPassword password="Confirm Password"></EnterPassword>
        <Dropdown question="Which locations are you interested in?"></Dropdown>
        <CancelButton>{"Go back"}</CancelButton>
        <PrimaryButton>{"Sign me up"}</PrimaryButton>
      </div>
    </div>
  );
};
