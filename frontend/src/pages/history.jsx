import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";

export default function History() {

    const {
        getHistoryOfUser,
        generateMeetingSummary
    } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([]);

    const routeTo = useNavigate();

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const history = await getHistoryOfUser();
            setMeetings(history);
        } catch (err) {
            console.log(err);
        }
    };

    const handleGenerateSummary = async (meetingCode) => {

        try {

            const response = await generateMeetingSummary(meetingCode);

            setMeetings((prev) =>
                prev.map((meeting) =>
                    meeting.meetingCode === meetingCode
                        ? {
                            ...meeting,
                            summary: response.summary
                        }
                        : meeting
                )
            );

        } catch (err) {
            console.log(err);
        }

    };

    const formatDate = (dateString) => {

        const date = new Date(dateString);

        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    return (
        <div>

            <IconButton
                onClick={() => routeTo("/home")}
            >
                <HomeIcon />
            </IconButton>

            {
                meetings.length > 0 && meetings.map((meeting, index) => (

                    <Card
                        key={index}
                        variant="outlined"
                        sx={{ mb: 2 }}
                    >

                        <CardContent>

                            <Typography color="text.secondary">
                                Code: {meeting.meetingCode}
                            </Typography>

                            <Typography color="text.secondary">
                                Date: {formatDate(meeting.date)}
                            </Typography>

                            {
                                meeting.summary ?

                                    <>
                                        <Typography
                                            sx={{
                                                mt: 2,
                                                fontWeight: "bold"
                                            }}
                                        >
                                            Summary
                                        </Typography>

                                        <Typography
                                            sx={{ whiteSpace: "pre-wrap" }}
                                        >
                                            {meeting.summary}
                                        </Typography>
                                    </>

                                    :

                                    <Button
                                        sx={{ mt: 2 }}
                                        variant="contained"
                                        onClick={() =>
                                            handleGenerateSummary(meeting.meetingCode)
                                        }
                                    >
                                        Generate Summary
                                    </Button>

                            }

                        </CardContent>

                    </Card>

                ))
            }

        </div>
    );
}