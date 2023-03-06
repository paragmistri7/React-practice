import { Table } from 'react-bootstrap';

function Bootexample() {

    let bootexample = [
        {
            number: 1, name: "parag", email: "parag@.com", address: [{
                houseno: 40, society: "rajivnagar", landmark: "chandlodia lake"
            }]
        },
        {
            number: 2, name: "hardik", email: "hardik@.com", address: [

                {
                    houseno: 40, society: "rajivnagar", landmark: "chandlodia lake"
                },
                {
                    houseno: 40, society: "rajivnagar", landmark: "chandlodia lake"
                },
                {
                    houseno: 40, society: "rajivnagar", landmark: "chandlodia lake"
                }
            ]
        },
        {
            number: 3, name: "mona", email: "mona@.com", address: [{
                houseno: 40, society: "rajivnagar", landmark: "chandlodia lake"
            }]
        }
    ]
    return (
        <>
            <h1>Bootstrap Table</h1>
            <Table variant='dark' striped bordered hover>
                <tbody>

                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>

                    {
                        bootexample.map((item, p) =>


                            // item.contact === "111" ?
                            //     <tr key={p}>
                            //         <td>{item.number}</td>
                            //         <td>{item.name}</td>
                            //         <td>{item.email}</td>
                            //         <td>{item.contact}</td>
                            //     </tr>
                            //     : null



                            <tr key={p}>
                                <td>{item.number}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Table variant='success' striped bordered hover>
                                        <tbody>

                                            <tr>

                                                <td>House no.</td>
                                                <td>Society Name</td>
                                                <td>Landmark</td>
                                            </tr>

                                            {item.address.map((item0, l) =>
                                                <tr key={l}>
                                                    <td>{item0.houseno}</td>
                                                    <td>{item0.society}</td>
                                                    <td>{item0.landmark}</td>
                                                </tr>

                                            )
                                            }
                                        </tbody>
                                    </Table>


                                </td>
                            </tr>




                        )
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Bootexample