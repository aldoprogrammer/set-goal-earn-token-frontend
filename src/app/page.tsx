import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chian } from "./chain";
import { Accountability } from "../../components/Accountability";

export default function Home() {
  return (
   <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
   >
      <h1 style={{ margin: '10px'}}>Set Goal, Earn Token</h1>
      <ConnectEmbed 
        client={client}
        chain={chian}
      />
      <Accountability />
   </div>
  );
}
