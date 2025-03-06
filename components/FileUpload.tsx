import config from "@/lib/config";
import { IKImage, IKUpload, ImageKitProvider } from "imagekitio-next";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { toast } from "sonner";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
    // Use the generated authentication token for image upload
  } catch (err: any) {}
  throw new Error("Image Upload Error. Failed to authenticate");
};

interface Props {
  type: "image" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant: "dark" | "light";
  onFileChange: (filePath: string) => void;
}

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
}: Props) => {
  const [file, setFile] = useState<{ filePath: string } | null>(null);
  const ikUploadRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const onError = (error: any) => {
    console.error(error);
    toast.error("Failed to upload file");
    // Handle error with the uploaded file
  };
  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast.success("Uploaded file successfully");
  };
  return (
    <ImageKitProvider
      publicKey={publicKey}
      authenticator={authenticator}
      urlEndpoint={urlEndpoint}
    >
      <IKUpload
        ref={ikUploadRef}
        onSuccess={onSuccess}
        onError={onError}
        fileName="test"
        className="hidden"
      />

      <button
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();
          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a File</p>

        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>

      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  );
};

export default FileUpload;
