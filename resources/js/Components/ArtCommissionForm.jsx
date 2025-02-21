import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

// Set the app element for accessibility (using document.body if no #root exists)
Modal.setAppElement(document.body);

const ArtCommissionForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        description: "",
    });
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/art-commissions", formData);
            setMessage(response.data.message);
            setFormData({ name: "", email: "", phone_number: "", description: "" });
            setIsOpen(false);
        } catch (error) {
            setMessage(error.response?.data?.message || "An error occurred.");
        }
    };

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    display: "block",
                    margin: "2rem auto",
                    padding: "1rem 2rem",
                    fontSize: "1.2rem",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#333",
                    color: "#fff",
                    cursor: "pointer",
                }}
            >
                Art Commission
            </button>

            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        zIndex: 1000,
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        transform: "translate(-50%, -50%)",
                        padding: "2rem",
                        borderRadius: "10px",
                        maxWidth: "500px",
                        width: "90%",
                        backgroundColor: "#222",
                        color: "#fff",
                        border: "none",
                    },
                }}
            >
                <form onSubmit={handleSubmit}>
                    <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Art Commission Form</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{
                            display: "block",
                            width: "100%",
                            marginBottom: "1rem",
                            padding: "0.5rem",
                            backgroundColor: "#333",
                            color: "#fff",
                            border: "1px solid #444",
                            borderRadius: "5px",
                        }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                            display: "block",
                            width: "100%",
                            marginBottom: "1rem",
                            padding: "0.5rem",
                            backgroundColor: "#333",
                            color: "#fff",
                            border: "1px solid #444",
                            borderRadius: "5px",
                        }}
                    />
                    <input
                        type="text"
                        name="phone_number"
                        placeholder="Phone Number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        required
                        style={{
                            display: "block",
                            width: "100%",
                            marginBottom: "1rem",
                            padding: "0.5rem",
                            backgroundColor: "#333",
                            color: "#fff",
                            border: "1px solid #444",
                            borderRadius: "5px",
                        }}
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        style={{
                            display: "block",
                            width: "100%",
                            marginBottom: "1rem",
                            padding: "0.5rem",
                            backgroundColor: "#333",
                            color: "#fff",
                            border: "1px solid #444",
                            borderRadius: "5px",
                        }}
                    ></textarea>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button
                            type="submit"
                            style={{
                                padding: "0.5rem 1rem",
                                backgroundColor: "#444",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Send
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            style={{
                                padding: "0.5rem 1rem",
                                backgroundColor: "#444",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </form>
                {message && <p style={{ marginTop: "1rem", textAlign: "center" }}>{message}</p>}
            </Modal>
        </div>
    );
};

export default ArtCommissionForm;
