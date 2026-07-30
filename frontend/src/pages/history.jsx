import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import {
    Box,
    Button,
    Card,
    CardContent,
    Fade,
    IconButton,
    Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";

import newBackground2 from "../assets/newBackground2.jpg";
import styles from "../styles/history.module.css";

const ACCENT = "#D97500";
const ACCENT_HOVER = "#C96A00";

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
        <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>

            {/* full page background, consistent with Home */}
            <Box
                sx={{
                    position: 'fixed',
                    inset: 0,
                    backgroundImage: `url(${newBackground2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -2,
                }}
            />
            <Box
                sx={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.45)',
                    zIndex: -1,
                }}
            />

            {/* floating glass navbar */}
            <Fade in timeout={500}>
                <Box
                    sx={{
                        position: 'fixed',
                        top: { xs: 12, md: 24 },
                        left: { xs: 12, md: '5%' },
                        right: { xs: 12, md: '5%' },
                        zIndex: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                        padding: { xs: '10px 16px', md: '12px 28px' },
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                        <IconButton
                            aria-label="Back to home"
                            onClick={() => routeTo("/home")}
                            sx={{
                                color: '#fff',
                                transition: 'all 0.25s ease',
                                '&:hover': { color: ACCENT, transform: 'translateY(-2px)' },
                            }}
                        >
                            <HomeIcon />
                        </IconButton>
                        <Typography
                            sx={{ fontWeight: 800, color: '#fff', letterSpacing: '-0.01em', fontSize: { xs: '1rem', md: '1.15rem' } }}
                        >
                            Meeting History
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.75)' }}>
                        <HistoryToggleOffIcon fontSize="small" />
                        <Typography sx={{ fontSize: '0.9rem', display: { xs: 'none', sm: 'block' } }}>
                            {meetings.length} {meetings.length === 1 ? 'meeting' : 'meetings'}
                        </Typography>
                    </Box>
                </Box>
            </Fade>

            {/* content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1200px',
                    mx: 'auto',
                    pt: { xs: 14, md: 18 },
                    pb: 8,
                    px: { xs: 2.5, md: 6 },
                }}
            >
                {meetings.length > 0 ? (
                    <Box className={styles.grid}>
                        {meetings.map((meeting, index) => (
                            <Card
                                key={index}
                                className={styles.card}
                                style={{ animationDelay: `${Math.min(index * 60, 600)}ms` }}
                                sx={{
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(18px)',
                                    WebkitBackdropFilter: 'blur(18px)',
                                    border: '1px solid rgba(255,255,255,0.18)',
                                    borderRadius: '20px',
                                    boxShadow: '0 12px 34px rgba(0,0,0,0.28)',
                                    color: '#fff',
                                }}
                            >
                                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <VideocamIcon sx={{ color: ACCENT, fontSize: 20 }} />
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: '1rem',
                                                color: '#fff',
                                                wordBreak: 'break-all',
                                            }}
                                        >
                                            {meeting.meetingCode}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                        <CalendarMonthIcon sx={{ color: 'rgba(255,255,255,0.6)', fontSize: 18 }} />
                                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                                            {formatDate(meeting.date)}
                                        </Typography>
                                    </Box>

                                    {meeting.summary ? (
                                        <Box
                                            sx={{
                                                mt: 2,
                                                pt: 2,
                                                borderTop: '1px solid rgba(255,255,255,0.15)',
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1 }}>
                                                <DescriptionIcon sx={{ color: ACCENT, fontSize: 18 }} />
                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,
                                                        fontSize: '0.85rem',
                                                        color: ACCENT,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.04em',
                                                    }}
                                                >
                                                    Summary
                                                </Typography>
                                            </Box>
                                            <Typography
                                                sx={{
                                                    whiteSpace: 'pre-wrap',
                                                    color: 'rgba(255,255,255,0.9)',
                                                    fontSize: '0.9rem',
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {meeting.summary}
                                            </Typography>
                                        </Box>
                                    ) : (
                                        <Button
                                            fullWidth
                                            startIcon={<AutoAwesomeIcon />}
                                            onClick={() => handleGenerateSummary(meeting.meetingCode)}
                                            sx={{
                                                mt: 1,
                                                height: '46px',
                                                borderRadius: '14px',
                                                backgroundColor: ACCENT,
                                                color: '#fff',
                                                fontWeight: 700,
                                                fontSize: '0.9rem',
                                                textTransform: 'none',
                                                boxShadow: '0 8px 20px rgba(217,117,0,0.4)',
                                                transition: 'all 0.25s ease',
                                                '&:hover': {
                                                    backgroundColor: ACCENT_HOVER,
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 12px 26px rgba(217,117,0,0.5)',
                                                },
                                            }}
                                        >
                                            Generate Summary
                                        </Button>
                                    )}

                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                ) : (
                    <Fade in timeout={600}>
                        <Box
                            sx={{
                                mt: { xs: 4, md: 8 },
                                mx: 'auto',
                                maxWidth: '440px',
                                textAlign: 'center',
                                background: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(18px)',
                                WebkitBackdropFilter: 'blur(18px)',
                                border: '1px solid rgba(255,255,255,0.18)',
                                borderRadius: '20px',
                                boxShadow: '0 12px 34px rgba(0,0,0,0.28)',
                                p: { xs: 4, md: 5 },
                            }}
                        >
                            <HistoryToggleOffIcon sx={{ fontSize: 44, color: ACCENT, mb: 1.5 }} />
                            <Typography sx={{ fontWeight: 700, color: '#fff', fontSize: '1.1rem', mb: 1 }}>
                                No meetings yet
                            </Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                                Meetings you join will show up here, along with AI-generated summaries.
                            </Typography>
                        </Box>
                    </Fade>
                )}
            </Box>

        </Box>
    );
}