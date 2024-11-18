'use client';

import { chian } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { contract } from "../utils/contract";
import { Deposit } from "./Deposit";
import { TaskList } from "./TaskList";
import { toEther } from "thirdweb";
import { AddTask } from "./AddTask";

export const Accountability = () => {
    const account = useActiveAccount();

    const { data: depositAMount, isLoading: isDepositLoading } = useReadContract({
        contract: contract,
        method: "getDeposit",
    });

    const { data: taskCount, isLoading: isTaskCountLoading } = useReadContract({
        contract: contract,
        method: "getTaskCount",
    });

    // Ensure we handle loading and undefined cases
    const depositValue = depositAMount ? depositAMount.toString() : "0";
    const taskCountValue = taskCount ? taskCount.toString() : "0";

    if (!account) {
        return (
            <div>
                <h3>Please connect your wallet to continue.</h3>
                <ConnectButton client={client} chain={chian} />
            </div>
        );
    }

    if (isDepositLoading || isTaskCountLoading) {
        return <div>Loading...</div>; // Show a loader while data is being fetched
    }

    return (
        <div>
            <ConnectButton client={client} chain={chian} />
            <div>
                {depositValue === "0" && taskCountValue === "0" ? (
                    <Deposit />
                ) : depositValue !== "0" && taskCountValue === "0" ? (
                    <TaskList />
                ) : (
                    <>
                        <h3>Locked Funds: {toEther(depositAMount!)}</h3>
                        <p>Funds will be returned when all tasks are completed</p>
                        <AddTask />
                        <TaskList />
                    </>
                )}
            </div>
        </div>
    );
};
