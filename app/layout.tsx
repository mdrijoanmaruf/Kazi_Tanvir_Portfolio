import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kazi Tanvir - Data Scientist & Machine Learning Engineer",
  description: "Portfolio of Kazi Tanvir, a data science, machine learning and AI researcher specializing in deep learning, neural networks, and computer vision.",
  keywords: "Kazi Tanvir, Data Science, Machine Learning, AI, Deep Learning, Neural Networks, Python, PyTorch, TensorFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/logo.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
