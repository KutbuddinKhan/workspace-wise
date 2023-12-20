"use client"

import { AuthUser } from '@supabase/supabase-js'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';


interface DashboardSetupProps {
    user: AuthUser;
    subscription: {} | null;
}

const DashboardSetup: React.FC<DashboardSetupProps> = ({
    subscription,
    user
}) => {
    return (
        <Card
            className="w-[800px]
                h-screen
                sm:h-auto
                "
        >
            <CardHeader>
                <CardTitle>Create A Workspace</CardTitle>
                <CardDescription>
                    Let&apos;s create a private workspace to get you started.You can add
                    collaborators later from the workspace settings tab.
                </CardDescription>
            </CardHeader>
            <CardContent>
               <form onSubmit={() => {}}>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="text-5xl">
                            
                        </div>
                    </div>
                </div>
               </form>
            </CardContent>
        </Card>
    );
}

export default DashboardSetup
