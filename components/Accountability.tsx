'use client';

import { chian } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react"
import { contract } from "../utils/contract";
import { Deposit } from "./Deposit";
import { TaskList } from "./TaskList";

export const Accountability = () => {
    const account = useActiveAccount();

    const { data: depositAMount } = useReadContract({
        contract: contract,
        method: "getDeposit"
    });

    const { data: taskCount } = useReadContract({
        contract: contract,
        method: "getTaskCount"
    });


    if (account) {
        return (
            <div>
                <ConnectButton
                    client={client}
                    chain={chian}
                />
                <div>
                    {depositAMount?.toString() === "0" && taskCount?.toString() === "0" ? (
                        <Deposit />
                    ) : depositAMount?.toString() !== "0" && taskCount?.toString() === "0" ? (
                        <TaskList />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        )
    }
}