import { chian } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { contractABI } from "./contractABI";

// Access the contract address from environment variable
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

export const contract = getContract({
    client: client,
    chain: chian,
    address: contractAddress,
    abi: contractABI
});
