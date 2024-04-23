import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { Tabs, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import FormAddFlix from "./FormAddFlix.jsx";

export default function SettingsPage() {
    const [value, setValue] = useState("0");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <TabContext value={value}>
                <TabList value={value} onChange={handleChange} centered>
                    <Tab
                        icon={<AddIcon />}
                        iconPosition="start"
                        label="Add new flix"
                        value="0"
                        sx={{ width: "33%" }}
                    />
                    <Tab
                        icon={<EditIcon />}
                        iconPosition="start"
                        label="Edit flix"
                        value="1"
                        sx={{ width: "33%" }}
                    />
                    <Tab
                        icon={<Delete />}
                        iconPosition="start"
                        label="Delete flix"
                        value="2"
                        sx={{ width: "33%" }}
                    />
                </TabList>
                <TabPanel value="0">
                    <FormAddFlix />
                </TabPanel>
                <TabPanel value="1">Edit flix</TabPanel>
                <TabPanel value="2">Delete flix</TabPanel>
            </TabContext>
        </div>
    );
}
