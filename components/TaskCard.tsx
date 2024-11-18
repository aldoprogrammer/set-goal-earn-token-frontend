import { TransactionButton } from "thirdweb/react";
import { contract } from "../utils/contract";
import { prepareContractCall } from "thirdweb";

type TaskProps = {
    taskId: number;
    task: string;
    isCompleted: boolean;
}

export const TaskCard = ({ taskId, task, isCompleted }: TaskProps) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "15px",
                width: "500px",
            }}
        >
            <p>{task}</p>
            <p>{isCompleted ? (
                <span style={{ color: "green", fontWeight: "bold" }}>Done</span>) :
                (
                    <TransactionButton
                        transaction={() => (
                            prepareContractCall({
                                contract: contract,
                                method: "completeTask",
                                params: [BigInt(taskId)],
                            })
                        )}
                        onTransactionConfirmed={
                            () => {alert("Task completed!")}
                        }
                    >
                        Complete Task
                    </TransactionButton>
                )}</p>
        </div>
    );
};