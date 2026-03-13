import "./table.css";

export default function AccessibleTable() {

    const data = [
        { name: "John", role: "Developer", location: "India" },
        { name: "Sara", role: "Designer", location: "USA" },
        { name: "Ali", role: "Manager", location: "UAE" }
    ];

    return (
        <table className="table">

            <caption>Employee Information</caption>

            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>

            <tbody>

                {data.map((item, index) => (

                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.role}</td>
                        <td>{item.location}</td>
                    </tr>

                ))}

            </tbody>

        </table>
    );
}