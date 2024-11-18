'use client';

import { chian } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, useActiveAccount } from "thirdweb/react"

export const Accountability = () => {
    const account = useActiveAccount();
    if(account) {
        return (
            <div>
                <ConnectButton
                    client={client}
                    chain={chian}
                />
            </div>
        )
    }
}