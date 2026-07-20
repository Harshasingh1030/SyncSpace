import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import newBackground2 from "../assets/newBackground2.jpg";

const ACCENT = "#D97500";
const ACCENT_HOVER = "#C96A00";

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: ACCENT,
        },
    },
    typography: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
});

const roundedFieldSx = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '16px',
        backgroundColor: 'rgba(255,255,255,0.25)',
        transition: 'all 0.2s ease',
        '& fieldset': {
            borderColor: 'rgba(255,255,255,0.30)',
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
        color: 'rgba(30,41,59,.85)',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: ACCENT,
    },
    '& .MuiOutlinedInput-input': {
        color: '#1F2937',
    },
};

export default function Authentication() {

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();

    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {

                let result = await handleLogin(username, password)


            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {

            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />

            <Box
                sx={{
                    position: 'relative',
                    minHeight: '100vh',
                    width: '100%',
                    backgroundImage: `url(${newBackground2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'center', md: 'flex-end' },
                    padding: { xs: 2, sm: 4, md: 8 },
                }}
            >
                {/* dark overlay so the card stands out against the background image */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.30)',
                    }}
                />

                <Fade in timeout={500}>
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 1,
                            width: '100%',
                            maxWidth: { xs: '100%', sm: 440 },
                            background: 'rgba(255,255,255,0.18)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.20)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 2px 12px rgba(255,255,255,0.08) inset',
                            padding: { xs: '32px 24px', sm: '40px' },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        {/* subtle glass shine */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '50%',
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0) 100%)',
                                pointerEvents: 'none',
                            }}
                        />

                        <Avatar sx={{ bgcolor: ACCENT, width: 56, height: 56, mb: 2, position: 'relative' }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 800, color: ACCENT, letterSpacing: '-0.02em', position: 'relative' }}
                        >
                            SyncSpace
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#1F2937', mt: 2, position: 'relative' }}>
                            Welcome Back
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'rgba(30,41,59,.80)', mt: 0.5, mb: 3, textAlign: 'center', position: 'relative' }}>
                            {formState === 0
                                ? "Sign in to continue to SyncSpace"
                                : "Create your SyncSpace account"}
                        </Typography>

                        {/* segmented Sign In / Sign Up control */}
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                                background: 'rgba(217,117,0,0.08)',
                                borderRadius: '999px',
                                padding: '4px',
                                mb: 3,
                            }}
                        >
                            <Box
                                onClick={() => setFormState(0)}
                                sx={{
                                    flex: 1,
                                    textAlign: 'center',
                                    padding: '10px 0',
                                    borderRadius: '999px',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    color: formState === 0 ? '#fff' : ACCENT,
                                    backgroundColor: formState === 0 ? ACCENT : 'transparent',
                                    transition: 'all 0.25s ease',
                                }}
                            >
                                Sign In
                            </Box>
                            <Box
                                onClick={() => setFormState(1)}
                                sx={{
                                    flex: 1,
                                    textAlign: 'center',
                                    padding: '10px 0',
                                    borderRadius: '999px',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    color: formState === 1 ? '#fff' : ACCENT,
                                    backgroundColor: formState === 1 ? ACCENT : 'transparent',
                                    transition: 'all 0.25s ease',
                                }}
                            >
                                Sign Up
                            </Box>
                        </Box>

                        <Box component="form" noValidate sx={{ width: '100%' }}>
                            {formState === 1 ? (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    name="name"
                                    value={name}
                                    autoFocus
                                    onChange={(e) => setName(e.target.value)}
                                    sx={roundedFieldSx}
                                />
                            ) : <></>}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}
                                sx={roundedFieldSx}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                sx={roundedFieldSx}
                            />

                            {error ? (
                                <Alert severity="error" sx={{ mt: 1.5, borderRadius: '12px' }}>
                                    {error}
                                </Alert>
                            ) : null}

                            <Button
                                type="button"
                                fullWidth
                                onClick={handleAuth}
                                sx={{
                                    mt: 3,
                                    height: '55px',
                                    borderRadius: '15px',
                                    backgroundColor: ACCENT,
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    boxShadow: '0 8px 20px rgba(217,117,0,0.35)',
                                    transition: 'all 0.25s ease',
                                    '&:hover': {
                                        backgroundColor: ACCENT_HOVER,
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 12px 26px rgba(217,117,0,0.45)',
                                    },
                                }}
                            >
                                {formState === 0 ? "Login" : "Register"}
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Box>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                message={message}
            />

        </ThemeProvider>
    );
}