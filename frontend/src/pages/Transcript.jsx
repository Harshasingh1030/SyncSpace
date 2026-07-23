import React from "react";

export default function Transcript({ transcript }) {
    return (
        <div
            style={{
                position: "absolute",
                right: "20px",
                bottom: "90px",
                width: "320px",
                height: "250px",
                background: "#1f1f1f",
                color: "white",
                borderRadius: "10px",
                padding: "15px",
                overflowY: "auto",
                zIndex: 999,
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
            }}
        >
            <h3
                style={{
                    marginTop: 0,
                    marginBottom: "10px"
                }}
            >
                Live Transcript
            </h3>

            {transcript.length === 0 ? (
                <p style={{ color: "#aaa" }}>
                    Waiting for speech...
                </p>
            ) : (
                transcript.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            marginBottom: "10px"
                        }}
                    >
                        <strong>{item.username}</strong>

                        <p
                            style={{
                                margin: "4px 0"
                            }}
                        >
                            {item.text}
                        </p>
                    </div>
                ))
            )}
        </div>
    );
}