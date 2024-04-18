import { useState } from "react";

export default function SettingsPage() {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <h2>Funky settings page</h2>
        // <TabContext value={value}>
        //     <TabList
        //         onChange={handleChange}
        //         aria-label="tabs for CRUD operations">
        //         <Tab label="Add Flix" value="1" />
        //         <Tab label="Edit Flix" value="2" />
        //         <Tab label="Delete Flix" value="3" />
        //     </TabList>
        //     <TabPanel value="1">Add flix here</TabPanel>
        //     <TabPanel value="2">Edit flix here</TabPanel>
        //     <TabPanel value="3">Delete flix here</TabPanel>
        // </TabContext>
    );
}
