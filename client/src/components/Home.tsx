import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  const [data, setData] = useState<any>(null);

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
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
