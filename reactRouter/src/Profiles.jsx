import { Link, NavLink, Outlet } from "react-router-dom";

export default function Profiles() {
    const profiles = [1, 2, 3, 4, 5];
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px"
        }}>
            {profiles.map((profile) => (
                <NavLink key={profile} to={`/profiles/${profile}`}>
                    Profile {profile}
                </NavLink>
            ))}
            <Outlet />
        </div>
    );
}
