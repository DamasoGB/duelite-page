const cvUrl = "/CV_Andres_Jimenez.pdf";

export function AndresJimenezCV() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <p style={styles.eyebrow}>Curriculum Vitae</p>
          <h1 style={styles.title}>Andres Jimenez</h1>
          <p style={styles.subtitle}>Game Developer & Game Designer</p>
        </div>
        <div style={styles.actions}>
          <a href={cvUrl} target="_blank" rel="noreferrer" style={styles.primaryButton}>
            Open PDF
          </a>
          <a href={cvUrl} download style={styles.secondaryButton}>
            Download
          </a>
        </div>
      </header>

      <section style={styles.viewerSection} aria-label="Andres Jimenez CV">
        <iframe title="Andres Jimenez CV" src={cvUrl} style={styles.viewer} />
      </section>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#101014",
    color: "#f5f7fb",
    fontFamily: "Arial, sans-serif",
    padding: "24px",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    maxWidth: "1120px",
    margin: "0 auto 20px",
    flexWrap: "wrap",
  },
  eyebrow: {
    color: "#00ffd9",
    fontSize: "0.9rem",
    fontWeight: 700,
    margin: "0 0 6px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "2.4rem",
    margin: 0,
  },
  subtitle: {
    color: "#c6c9d2",
    fontSize: "1rem",
    margin: "6px 0 0",
  },
  actions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  primaryButton: {
    backgroundColor: "#00ffd9",
    color: "#101014",
    fontWeight: 700,
    padding: "10px 16px",
    borderRadius: "6px",
    textDecoration: "none",
  },
  secondaryButton: {
    border: "1px solid #00ffd9",
    color: "#00ffd9",
    fontWeight: 700,
    padding: "10px 16px",
    borderRadius: "6px",
    textDecoration: "none",
  },
  viewerSection: {
    maxWidth: "1120px",
    height: "calc(100vh - 160px)",
    minHeight: "620px",
    margin: "0 auto",
    backgroundColor: "#1d1f27",
    border: "1px solid rgba(255, 255, 255, 0.16)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  viewer: {
    width: "100%",
    height: "100%",
    border: 0,
    backgroundColor: "#ffffff",
  },
};
