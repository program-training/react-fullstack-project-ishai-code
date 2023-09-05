import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import "../css/trips.css";

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
        <div className="container">
          {data.map((trip: any) => (
            <div key={trip.id} className="cardContainer">
              <div className="imageContainer">
                <img className="tripImages" src={trip.image}></img>
              </div>
              <h4 className="text-black">{trip.name}</h4>
              <h4 className="text-black">{trip.destination}</h4>
              <h4 className="text-black">{trip.startDate}</h4>
              <h4 className="text-black">{trip.endDate}</h4>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
