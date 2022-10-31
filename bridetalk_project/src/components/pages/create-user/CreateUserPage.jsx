import {
  CenteredHeadline,
  PrimaryButton2,
  CancelButton,
  EnterText,
  EnterEmail,
  EnterPassword,
  Dropdown,
} from "../../atoms";
import "./createuserpage.css";
export const CreateUserPage = () => {
  return (
    <div>
      <div className="form">
        <CenteredHeadline headline="Sign up to Bride Talk"></CenteredHeadline>
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
        <PrimaryButton2>{"Sign me up"}</PrimaryButton2>
      </div>
    </div>
  );
};
