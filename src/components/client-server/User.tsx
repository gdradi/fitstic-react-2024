import { UserDto } from "./UserDto";

export default function User(props: {
    readonly user: UserDto;
}) {
    const { user } = props;
    return <div style={{ display: "flex", alignItems: "center" }}>
        <img src={user.avatar} alt="avatar" />
        <div>{user.id} - {user.first_name} {user.last_name} ({user.email})</div>
    </div>;
}