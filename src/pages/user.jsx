import UserTable from "../components/user/user_table";
import UserForm from "../components/user/user_form";
const UsersPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <UserForm />
            <UserTable />
        </div>
    )
}

export default UsersPage;