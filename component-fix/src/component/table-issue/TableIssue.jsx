import "./table.css";

export default function TableIssue() {

    const data = [
        { name: "John", role: "Developer", location: "India" },
        { name: "Sara", role: "Designer", location: "USA" },
        { name: "Ali", role: "Manager", location: "UAE" }
    ];

    return (
        <table className="table">

            <tr>
                <td>Name</td>
                <td>Role</td>
                <td>Location</td>
            </tr>

            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                    <td>{item.location}</td>
                </tr>
            ))}

        </table>
    );
}