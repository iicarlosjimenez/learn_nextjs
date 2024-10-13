import Image from "next/image";
import { Inter } from "next/font/google";
import Table from "@/components/Table";

const inter = Inter({ subsets: ["latin"] });

const user = {
  name: "Charly Jimenez",
  nickname: "charly-jimenez",
  imagen: "https://api.dicebear.com/9.x/initials/svg?seed=charly-jimenez",
  profile_imagen: "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1278456%2F205b0a0f-1ec3-4b42-ae2b-bbedf7fb6710.jpeg"
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Table />

    </main>
  );
}
