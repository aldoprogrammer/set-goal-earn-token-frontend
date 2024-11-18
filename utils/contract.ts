import { chian } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { contractABI } from "./contractABI";

const contractAddress = "0xA44d7B45601FBd26DF4F215C88CBD2120B1b9938";

export const contract = getContract({
    client: client,
    chain: chian,
    address: contractAddress,
    abi: contractABI
});