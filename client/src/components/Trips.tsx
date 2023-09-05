import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

interface Trip {
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string[];
    id: string;
}

export function Trips() {
  const [data, setData] = useState<Trip[]>([]);

  useEffect(() => {
    const homeNav = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/trips");
        setData(response.data);
      } catch (error) {
        console.error("error to fetch data: ", error);
      }
    };
    homeNav();
  }, []);

  return (
    <div>
    {data ? (
      <div>
        {data.map((trip: any) => (
          <img className="img-thumbnail" key={trip.id} src={trip.image}></img>
        ))}
      </div>
    ) : (
      <p>Loading data...</p>
    )}
  </div>
  );
}
