import { useState } from "react";
import { TransactionButton } from "thirdweb/react";
import { contract } from "../utils/contract";
import { prepareContractCall } from "thirdweb";

export const AddTask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [task, setTask] = useState("");
    return (
        <div style={{ position: "relative" }}>
            <button
                onClick={() => setIsModalOpen(true)}
                style={{
                    marginLeft: "auto",
                    display: "flex",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#222",
                    color: "#fff",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Add Task
            </button>
            {isModalOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderRadius: "5px",
                        }}
                    >
                        <input
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder="Create Task"
                            style={{
                                width: "100%",
                                padding: "12px 16px",
                                fontSize: "16px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
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
                                setIsModalOpen(false)
                                setTask("")
                                alert("Task created!")
                            }}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "5px",
                                border: "none",
                                backgroundColor: "#222",
                                color: "#fff",
                                fontSize: "16px",
                                cursor: "pointer",
                                marginRight: "10px",
                            }}
                            >
                            Add Task
                        </TransactionButton>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "5px",
                                border: "none",
                                backgroundColor: "#222",
                                color: "#fff",
                                fontSize: "16px",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};