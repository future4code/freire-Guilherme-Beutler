import { Button } from "@mui/material";
import React from "react";

const maxItens = 5
const maxLeft = (maxItens - 1) / 2

export default function Pagination({ limit, total, offset, setOffset }) {

    const current = offset ? (offset / limit) + 1 : 1
    const pages = Math.ceil(total / limit)
    const firstPage = Math.max(current - maxLeft, 1)



    return (
        <div>
            <ul>
                {
                    Array.from({ length: maxItens })
                        .map((_, index) => index + firstPage)
                        .map((page) => (
                            <li>
                                <button
                                    onClick={() => setOffset((page - 1) * limit)}
                                >
                                    {page}
                                </button>
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}