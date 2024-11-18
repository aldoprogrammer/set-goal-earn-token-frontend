import { useState } from "react";
import { useReadContract } from "thirdweb/react";
import { contract } from "../utils/contract";

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
            <></>
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
            </>
        )}
        </div>
    )
}