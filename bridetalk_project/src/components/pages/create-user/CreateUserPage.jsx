import { CreateUserForm } from "../../molecule";
import "./createuserpage.css";

export const CreateUserPage = () => {
  return (
    <div className="flex-container-createuserpage">
      <div className="flex-child1-createuserpage">
        <CreateUserForm></CreateUserForm>
      </div>
      <div className="flex-child2-createuserpage">
        <div>
          <p>Connect with other future brides.</p>
          <p>
            Bride Talk is a platform that allows you to find group chats about
            specific wedding topics.{" "}
          </p>
          <p>
            You can chose to connect with people in a specific area to make sure
            their recommendations are useful for you.
          </p>
          <p>Create a free profile and start chatting</p>
        </div>
      </div>
    </div>
  );
};
