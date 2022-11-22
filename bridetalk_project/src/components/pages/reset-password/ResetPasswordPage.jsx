import { InputField, Button } from "../../atoms";
import { useNavigate } from "react-router-dom";

import "./resetpasswordpage.css";

export const ResetPasswordPage = () => {
  let navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <div className="reset-container">
      <div className="reset-password-headline"> Reset password </div>

      <div className="lost-your-password">
        {" "}
        Enter your email to reset your password.
      </div>

      <div className="reset-input-email">
        <InputField text="E-mail " type="email" />
      </div>

      <div className="reset-buttons-row">
        <Button
          color={"var(--global-grey-4)"}
          text={"Go back"}
          handleClick={() => navigateTo(-1)}
        />

        <Button color={"var(--global-primary-2)"} text={"Reset password"} />
      </div>
    </div>
  );
};
