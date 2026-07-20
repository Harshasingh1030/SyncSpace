import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    Box,
    Typography,
    Button,
    Card,
    IconButton,
    Fade,
} from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import LockIcon from '@mui/icons-material/Lock';
import BoltIcon from '@mui/icons-material/Bolt';
import VerifiedIcon from '@mui/icons-material/Verified';
import SpeedIcon from '@mui/icons-material/Speed';
import ShieldIcon from '@mui/icons-material/Shield';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import newBackground2 from "../assets/newBackground2.jpg";

const ACCENT = "#D97500";
const ACCENT_HOVER = "#C96A00";

// Replace these with your own links
const portfolio = "#";
const github = "#";
const linkedin = "#";

export default function LandingPage() {

    const router = useNavigate();

     const generateMeetingId = () => {
        const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

        const part = (len) =>
            Array.from({ length: len }, () =>
                chars[Math.floor(Math.random() * chars.length)]
            ).join("");

        return `${part(3)}-${part(4)}-${part(3)}`;
    };

    const handleJoinAsGuest = () => {
        const meetingId = generateMeetingId();
        router(`/${meetingId}`);
    };

    const features = [
        {
            icon: <VideocamIcon sx={{ fontSize: 32, color: ACCENT }} />,
            title: "HD Meetings",
            description: "Crystal-clear WebRTC communication.",
        },
        {
            icon: <LockIcon sx={{ fontSize: 32, color: ACCENT }} />,
            title: "Secure",
            description: "Encrypted communication.",
        },
        {
            icon: <BoltIcon sx={{ fontSize: 32, color: ACCENT }} />,
            title: "Instant Join",
            description: "Join meetings within seconds.",
        },
    ];

    const whyChoose = [
        {
            icon: <VerifiedIcon sx={{ fontSize: 30, color: ACCENT }} />,
            title: "Reliable",
            description: "Stable connections you can count on, every time.",
        },
        {
            icon: <SpeedIcon sx={{ fontSize: 30, color: ACCENT }} />,
            title: "Fast",
            description: "Minimal latency, even on modest connections.",
        },
        {
            icon: <ShieldIcon sx={{ fontSize: 30, color: ACCENT }} />,
            title: "Secure",
            description: "Your meetings stay private, always.",
        },
    ];

    return (
        <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>

            {/* full page background */}
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
                    backgroundColor: 'rgba(0,0,0,0.35)',
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
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 800, color: ACCENT, letterSpacing: '-0.02em' }}
                    >
                        SyncSpace
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
                        <Typography
                            onClick= { handleJoinAsGuest }
                            sx={{
                                cursor: 'pointer',
                                color: '#fff',
                                fontWeight: 500,
                                display: { xs: 'none', sm: 'block' },
                                transition: 'color 0.25s ease',
                                '&:hover': { color: ACCENT },
                            }}
                        >
                            Join as Guest
                        </Typography>
                        <Typography
                            onClick={() => { router("/auth") }}
                            sx={{
                                cursor: 'pointer',
                                color: '#fff',
                                fontWeight: 500,
                                display: { xs: 'none', sm: 'block' },
                                transition: 'color 0.25s ease',
                                '&:hover': { color: ACCENT },
                            }}
                        >
                            Register
                        </Typography>
                        <Button
                            variant="outlined"
                            onClick={() => { router("/auth") }}
                            sx={{
                                borderRadius: '999px',
                                borderColor: ACCENT,
                                color: ACCENT,
                                fontWeight: 600,
                                textTransform: 'none',
                                transition: 'all 0.25s ease',
                                '&:hover': {
                                    borderColor: ACCENT_HOVER,
                                    backgroundColor: 'rgba(217,117,0,0.15)',
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                </Box>
            </Fade>

            {/* centered hero */}
            <Fade in timeout={800}>
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        maxWidth: '850px',
                        mx: 'auto',
                        pt: { xs: 16, md: 22 },
                        pb: { xs: 8, md: 10 },
                        px: { xs: 3, md: 6 },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '2.1rem', md: '3.75rem' },
                            fontWeight: 800,
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            color: '#ffffff',
                            textShadow: '0 2px 20px rgba(0,0,0,0.35)',
                        }}
                    >
                        Connect Beyond <Box component="span" sx={{ color: ACCENT }}>Boundaries.</Box>
                    </Typography>

                    <Typography
                        sx={{
                            mt: 3,
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            color: 'rgba(255,255,255,0.85)',
                            lineHeight: 1.6,
                            maxWidth: '650px',
                        }}
                    >
                        Secure HD meetings with crystal-clear audio, real-time collaboration and effortless connectivity.
                    </Typography>

                    <Box
                        sx={{
                            mt: 5,
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                        }}
                    >
                        <Button
                            component={Link}
                            to="/auth"
                            variant="contained"
                            sx={{
                                height: '56px',
                                px: 5,
                                borderRadius: '16px',
                                backgroundColor: ACCENT,
                                fontWeight: 700,
                                fontSize: '1rem',
                                textTransform: 'none',
                                boxShadow: '0 8px 20px rgba(217,117,0,0.45)',
                                transition: 'all 0.25s ease',
                                '&:hover': {
                                    backgroundColor: ACCENT_HOVER,
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 12px 26px rgba(217,117,0,0.55)',
                                },
                            }}
                        >
                            Get Started
                        </Button>
                        
                    </Box>
                </Box>
            </Fade>

            {/* feature cards */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1100px',
                    mx: 'auto',
                    px: { xs: 3, md: 6 },
                    pb: { xs: 8, md: 10 },
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                    gap: 3,
                }}
            >
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        sx={{
                            background: 'rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '20px',
                            padding: '32px 24px',
                            textAlign: 'center',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                            transition: 'all 0.25s ease',
                            cursor: 'default',
                            '&:hover': {
                                transform: 'translateY(-6px)',
                                boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
                            },
                        }}
                    >
                        <Box sx={{ mb: 1.5 }}>{feature.icon}</Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.15rem', color: '#fff', mb: 1 }}>
                            {feature.title}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem' }}>
                            {feature.description}
                        </Typography>
                    </Card>
                ))}
            </Box>

            {/* why choose syncspace */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1000px',
                    mx: 'auto',
                    px: { xs: 3, md: 6 },
                    pb: { xs: 8, md: 10 },
                    textAlign: 'center',
                }}
            >

            </Box>

            

            {/* premium footer */}
            <Box
                component="footer"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    background: 'rgba(10,10,10,0.55)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderTopLeftRadius: { xs: '24px', md: '40px' },
                    borderTopRightRadius: { xs: '24px', md: '40px' },
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderBottom: 'none',
                    px: { xs: 3, md: 8 },
                    pt: { xs: 5, md: 6 },
                    pb: 4,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        gap: 4,
                        maxWidth: '1100px',
                        mx: 'auto',
                    }}
                >
                    <Box sx={{ maxWidth: '320px' }}>
                        <Typography sx={{ fontWeight: 800, color: ACCENT, fontSize: '1.3rem', mb: 1 }}>
                            SyncSpace
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Secure HD meetings built with React, Node.js, Socket.io and WebRTC.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography sx={{ color: '#fff', fontWeight: 700, mb: 1.5 }}>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography
                                component={Link}
                                to="/"
                                sx={{
                                    color: 'rgba(255,255,255,0.65)',
                                    fontSize: '0.9rem',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease',
                                    '&:hover': { color: ACCENT },
                                }}
                            >
                                Home
                            </Typography>
                            <Typography
                                onClick={() => router("/auth")}
                                sx={{
                                    color: 'rgba(255,255,255,0.65)',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s ease',
                                    '&:hover': { color: ACCENT },
                                }}
                            >
                                Login
                            </Typography>
                            <Typography
                                onClick={() => router("/auth")}
                                sx={{
                                    color: 'rgba(255,255,255,0.65)',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s ease',
                                    '&:hover': { color: ACCENT },
                                }}
                            >
                                Register
                            </Typography>
                            <Typography
                                onClick={() => router("/aljk23")}
                                sx={{
                                    color: 'rgba(255,255,255,0.65)',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s ease',
                                    '&:hover': { color: ACCENT },
                                }}
                            >
                                Join as Guest
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography sx={{ color: '#fff', fontWeight: 700, mb: 1.5 }}>
                            Connect
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                                component="a"
                                href={portfolio}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Portfolio"
                                sx={{
                                    color: 'rgba(255,255,255,0.75)',
                                    transition: 'all 0.25s ease',
                                    '&:hover': { color: ACCENT, transform: 'translateY(-2px)' },
                                }}
                            >
                                <LanguageIcon />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://github.com/Harshasingh1030"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                sx={{
                                    color: 'rgba(255,255,255,0.75)',
                                    transition: 'all 0.25s ease',
                                    '&:hover': { color: ACCENT, transform: 'translateY(-2px)' },
                                }}
                            >
                                <GitHubIcon />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://www.linkedin.com/in/harsha-vardhan-singh-135489323/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                sx={{
                                    color: 'rgba(255,255,255,0.75)',
                                    transition: 'all 0.25s ease',
                                    '&:hover': { color: ACCENT, transform: 'translateY(-2px)' },
                                }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                <Typography
                    sx={{
                        textAlign: 'center',
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: '0.8rem',
                        mt: 4,
                    }}
                >
                    &copy; {new Date().getFullYear()} SyncSpace. All rights reserved.
                </Typography>
            </Box>

        </Box>
    )
}