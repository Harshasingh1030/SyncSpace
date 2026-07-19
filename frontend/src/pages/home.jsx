import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import {
    Button,
    IconButton,
    TextField,
    Box,
    Typography,
    Card,
    Fade,
} from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import VideocamIcon from '@mui/icons-material/Videocam';
import LockIcon from '@mui/icons-material/Lock';
import BoltIcon from '@mui/icons-material/Bolt';
import { AuthContext } from '../contexts/AuthContext';
import newBackground2 from "../assets/newBackground2.jpg";

const ACCENT = "#D97500";
const ACCENT_HOVER = "#C96A00";

function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const { addToUserHistory } = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    const roundedFieldSx = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
            height: '56px',
            color: '#fff',
            backgroundColor: 'rgba(255,255,255,0.08)',
            transition: 'all 0.2s ease',
            '& fieldset': {
                borderColor: 'rgba(255,255,255,0.35)',
            },
            '&:hover fieldset': {
                borderColor: ACCENT,
            },
            '&.Mui-focused fieldset': {
                borderColor: ACCENT,
                borderWidth: '2px',
            },
        },
        '& .MuiInputLabel-root': {
            color: 'rgba(255,255,255,0.75)',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: ACCENT,
        },
        '& .MuiOutlinedInput-input': {
            color: '#fff',
        },
    };

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

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, md: 1.5 } }}>
                        <IconButton
                            onClick={() => { navigate("/history") }}
                            sx={{
                                color: '#fff',
                                transition: 'all 0.25s ease',
                                '&:hover': { color: ACCENT, transform: 'translateY(-2px)' },
                            }}
                        >
                            <RestoreIcon />
                        </IconButton>
                        <Typography
                            onClick={() => { navigate("/history") }}
                            sx={{
                                cursor: 'pointer',
                                color: '#fff',
                                fontWeight: 500,
                                display: { xs: 'none', sm: 'block' },
                                mr: 1,
                                transition: 'all 0.25s ease',
                                '&:hover': { color: ACCENT },
                            }}
                        >
                            History
                        </Typography>

                        <Button
                            variant="outlined"
                            onClick={() => {
                                localStorage.removeItem("token")
                                navigate("/auth")
                            }}
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
                            Logout
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
                        pb: { xs: 6, md: 8 },
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

                    {/* glass card meeting input */}
                    <Box
                        sx={{
                            mt: 6,
                            width: '100%',
                            maxWidth: '520px',
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '24px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                            padding: { xs: '24px 20px', md: '32px' },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: 2,
                            }}
                        >
                            <TextField
                                onChange={e => setMeetingCode(e.target.value)}
                                id="outlined-basic"
                                label="Meeting Code"
                                variant="outlined"
                                fullWidth
                                sx={roundedFieldSx}
                            />
                            <Button
                                onClick={handleJoinVideoCall}
                                variant="contained"
                                sx={{
                                    height: '56px',
                                    minWidth: { xs: '100%', sm: '160px' },
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
                                Join Meeting
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Fade>
            

        </Box>
    )
}

export default withAuth(HomeComponent)