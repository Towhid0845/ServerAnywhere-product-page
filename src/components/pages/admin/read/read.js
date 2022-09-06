import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		axios
			.get(`https://6313b715a8d3f673ffcf5d61.mockapi.io/CRUD`)
			.then((getData) => {
				setApiData(getData.data);
			});
	}, []);
	console.log(apiData);
	const setData = (id, Catagory, CPU, RAM, OS, Storage, Price) => {
		// console.log(id);
		localStorage.setItem("ID", id);
		localStorage.setItem("Catagory", Catagory);
		localStorage.setItem("CPU", CPU);
		localStorage.setItem("RAM", RAM);
		localStorage.setItem("OS", OS);
		localStorage.setItem("Storage", Storage);
		localStorage.setItem("Price", Price);
	};
	const getData = () => {
		axios
			.get(`https://6313b715a8d3f673ffcf5d61.mockapi.io/CRUD`)
			.then((getData) => {
				setApiData(getData.data);
			});
	};

	const onDelete = (id) => {
		axios
			.delete(`https://6313b715a8d3f673ffcf5d61.mockapi.io/CRUD/${id}`)
			.then(() => {
				getData();
			});
	};

	return (
		<div>
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>ID</Table.HeaderCell>
						<Table.HeaderCell>Catagory</Table.HeaderCell>
						<Table.HeaderCell>CPU</Table.HeaderCell>
						<Table.HeaderCell>RAM</Table.HeaderCell>
						<Table.HeaderCell>OS</Table.HeaderCell>
						<Table.HeaderCell>Storage</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>Update</Table.HeaderCell>
						<Table.HeaderCell>Delete</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{apiData.map((data) => {
						return (
							<Table.Row>
								<Table.Cell>{data.id}</Table.Cell>
								<Table.Cell>{data.Catagory}</Table.Cell>
								<Table.Cell>{data.CPU}</Table.Cell>
								<Table.Cell>{data.RAM}</Table.Cell>
								<Table.Cell>{data.OS}</Table.Cell>
								<Table.Cell>{data.Storage}</Table.Cell>
								<Table.Cell>{data.Price}</Table.Cell>
								<Table.Cell>
									<Link to="/admin/update">
										<Button
											color="green"
											onClick={() =>
												setData(
													data.id,
													data.Catagory,
													data.CPU,
													data.RAM,
													data.OS,
													data.Storage,
													data.Price
												)
											}
										>
											Update
										</Button>
									</Link>
								</Table.Cell>
								<Table.Cell>
									<Link to="/admin">
										<Button color="red" onClick={() => onDelete(data.id)}>
											Delete
										</Button>
									</Link>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</div>
	);
}
