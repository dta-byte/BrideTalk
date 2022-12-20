import { InputField, Button } from "../../atoms";
import { useNavigate } from "react-router-dom";
// import { updatePassword } from "../../../services/parse-functions";
import "./resetpasswordpage.css";
// import { useState } from "react";
// import { useAuth } from "../auth/core/Auth";

/**The functionality in this component does not work. In _UserRequest.js there is this function: updatePassword(), which simply does not work. */
export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  // const [newPassword, setNewPassword] = useState("");
  // const { currentUser } = useAuth();

  // const doChangePassword = async () => {
  //   try {
  //     await updatePassword(currentUser.id, newPassword);
  //   } catch (error) {
  //     console.log("Error changing password");
  //   }
  // };

  return (
    <div className="reset-container">
      <div className="reset-password-headline"> Reset password </div>

      <div className="lost-your-password">
        {" "}
        Enter your new password
      </div>

      <div className="reset-input-email">
        <InputField text="New password "
         type="password"
        //  value={newPassword}
        //   onChangeOut={(event)=> setNewPassword(event.target.value)}
         />
      </div>

      <div className="reset-buttons-row">
        <Button
          color={"var(--global-grey-4)"}
          text={"Go back"}
          handleClick={() => navigate(-1)}
        />

        <Button 
          color={"var(--global-primary-2)"} 
          text={"Reset password"} 
          // handleClick={()=>doChangePassword()}
          />
      </div>
    </div>
  );
};
