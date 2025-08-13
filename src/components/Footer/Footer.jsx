import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="text-center">
          © {new Date().getFullYear()} Hesh Zone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
