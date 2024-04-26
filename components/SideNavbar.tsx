/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";
import { ThemeToggle } from '@/components/theme-toggle/theme-toggle';
import {
    ShoppingCart,
    LayoutDashboard,
    UsersRound,
    Settings,
    ChevronRight
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";
import { UserButton } from "@clerk/nextjs";

type Props = {};

export default function SideNavbar({ }: Props) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth < 768;

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24">
            {!mobileWidth && (
                <div className="absolute right-[-20px] top-7">
                    <Button
                        onClick={toggleSidebar}
                        variant="secondary"
                        className=" rounded-full p-2"
                    >
                        <ChevronRight />
                    </Button>
                </div>
            )}
            <div className="flex justify-center mb-5">
                <UserButton
                    afterSignOutUrl="/sign-in"
                    appearance={{
                        elements: {
                            avatarBox: 'h-[42px] w-[42px]'
                        }
                    }} />
            </div>
            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/",
                        icon: LayoutDashboard,
                        variant: "default"
                    },
                    {
                        title: "Users",
                        href: "/users",
                        icon: UsersRound,
                        variant: "ghost"
                    },
                    {
                        title: "Orders",
                        href: "/orders",
                        icon: ShoppingCart,
                        variant: "ghost"
                    },
                    {
                        title: "Settings",
                        href: "/settings",
                        icon: Settings,
                        variant: "ghost"
                    }
                ]}


            />
            <div className="flex flex-col mx-2 gap-2">
                <ThemeToggle />

            </div>
        </div>
    );
}