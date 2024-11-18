import { useState } from "react";
import { prepareContractCall, toWei } from "thirdweb";
import { TransactionButton } from "thirdweb/react";
import { contract } from "../utils/contract";

export const Deposit = () => {
    const [depositAmount, setDepositAmount] = useState(0.001);  // Default value is 0.001

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
            <h3>Deposit</h3>
            <p>Please deposit the funds to hold</p>
            <input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(Math.max(0.001, Number(e.target.value)))}
                placeholder="0.001"
                step={0.001}
                min={0.001}  // Set minimum value to 0.001
                style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    textAlign: "left",
                    marginBottom: "15px",
                    outline: "none",
                    backgroundColor: "#fff",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
            />
            <TransactionButton
                transaction={() => {
                    return prepareContractCall({
                        contract: contract,
                        method: "depositFunds",
                        value: toWei(depositAmount.toString())
                    });
                }}
                onTransactionConfirmed={() => alert("Deposit successful!")}
            >
                Deposit Funds
            </TransactionButton>
        </div>
    );
};
