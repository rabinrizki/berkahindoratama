const Whatsapp = () => {
    return (
        <>
            <footer className="bg-white px-4 sm:px-10 py-12 mt-32">
                <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-14 max-lg:gap-8">
                    <div>
                        <ul className="space-y-5">
                            <li>
                                <div
                                    style={{
                                        position: "fixed",
                                        left: 20,
                                        bottom: 20,
                                        zIndex: 1000,
                                    }}
                                >
                                    <a
                                        href="https://api.whatsapp.com/send?phone=+6281380685068&text=Halo PT. Berkah Indo Ratama, Kami tertarik dengan jasa yang anda tawarkan. Kami ingin berdiskusi lebih lanjut. Terima Kasih"
                                        style={{
                                            textDecoration: "none",
                                        }}
                                    >
                                        <button
                                            style={{
                                                background: "#25D366",
                                                display: "flex",
                                                alignItems: "center",
                                                padding: "10px 15px",
                                                border: "none",
                                                borderRadius: 5,
                                                cursor: "pointer",
                                                boxShadow:
                                                    "0 4px 6px rgba(0, 0, 0, 0.1)",
                                                transition: "background 0.3s",
                                            }}
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.background =
                                                    "#1DAF5B")
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.background =
                                                    "#25D366")
                                            }
                                        >
                                            <img
                                                src="https://i.ibb.co.com/wNf8RMY8/sm-5b321c99945a2-removebg-preview.png"
                                                alt="WhatsApp"
                                                style={{
                                                    width: 22,
                                                    height: 24,
                                                    marginRight: 8,
                                                }}
                                            />
                                            <span
                                                style={{
                                                    color: "#fff",
                                                    fontWeight: "semibold",
                                                }}
                                            >
                                                WhatsApp Kami
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Whatsapp;
