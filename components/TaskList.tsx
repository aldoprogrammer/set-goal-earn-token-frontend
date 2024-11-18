import { useState } from "react";
import { TransactionButton, useReadContract } from "thirdweb/react";
import { contract } from "../utils/contract";
import { prepareContractCall } from "thirdweb";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {
    const [task, setTask] = useState("");
    const {
        data: tasks,
        isLoading: isLoadingTasks,
    } = useReadContract({
        contract: contract,
        method: "getTasks",
    });

    return (
        <div>
        <div>TaskList</div>
        {!isLoadingTasks && tasks!.length > 0 ? (
            tasks?.map((task: any, index: number) => (
                <TaskCard
                    key={index}
                    taskId={index}
                    task={task.description}
                    isCompleted={task.isCompleted}
                />
            ))
        ): (
            <>
                <h2>Create Tasks</h2>
                <p>Please create your first task</p>
                <input type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Create Task"
                    style={{
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        textAlign: "left",
                        marginBottom: "15px",
                    }}
                />
                <TransactionButton
                    transaction={() => (
                        prepareContractCall({
                            contract: contract,
                            method: "createTask",
                            params: [task],
                        })
                    )}
                    onTransactionConfirmed={() => {
                        setTask("")
                        alert("Task created successfully")
                    }}
                >
                    Add Task
                </TransactionButton>
            </>
        )}
        </div>
    )
}