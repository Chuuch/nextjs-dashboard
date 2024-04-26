/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";

type Props = {};

interface Setting {
    category: string;
    value: string | number | boolean;
}

const columns: ColumnDef<Setting>[] = [
    {
        accessorKey: "category",
        header: "Category"
    },
    {
        accessorKey: "value",
        header: "Value"
    }
];
const data: Setting[] = [
    {
        category: "Account",
        value: true
    },
    {
        category: "Notifications",
        value: false
    },
    {
        category: "Language",
        value: "English"
    },
    {
        category: "Theme",
        value: "Dark"
    }
];

export default function SettingsPage({ }: Props) {
    const { user, isLoaded } = useUser();

    if (!isLoaded || !user) {
        redirect('/sign-in');
    }
    return (
        <div className="flex flex-col gap-5  w-full">
            <PageTitle title="Settings" />
            <DataTable columns={columns} data={data} />
        </div>
    );
}