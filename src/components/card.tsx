import { FC, useState } from "react";
import Modal from "react-modal";

interface CardProps {
  alt: string;
  url: string;
  name: string;
  location: string;
}

const windowWidth = typeof window !== "undefined" && window.innerWidth;
const baseScreen = windowWidth && windowWidth >= 1024;

export const IndividualCard: FC<CardProps> = ({ url, alt, name, location }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<CardProps>();

  return (
    <>
      <div
        className="flex relative w-full h-full cursor-pointer"
        onClick={() => {
          setData({
            url,
            alt,
            name,
            location,
          });
          setOpen(true);
        }}
      >
        <img src={url} alt={alt} className="w-full object-cover rounded-lg" />

        {(name || location) && (
          <div className="flex flex-col px-3 py-2 absolute bottom-2 left-0 backdrop-blur-xs w-full">
            <p className="font-bold text-xl text-white">{name}</p>
            <p className="text-white">{location}</p>
          </div>
        )}
      </div>

      <ViewModal open={open} onClose={() => setOpen(false)} data={data} />
    </>
  );
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  data?: CardProps;
}

const ViewModal: FC<ModalProps> = ({ open, onClose, data }) => {
  return (
    <Modal
      isOpen={open}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1000,
        },
        content: {
          backgroundColor: "transparent",
          border: "none",
          borderRadius: "12px",
          width: baseScreen ? "65vw" : "95vw",
          height: "100%",
          maxHeight: "95vh",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          padding: "0",
        },
      }}
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black opacity-50 hover:opacity-100 cursor-pointer rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col w-full h-full">
          <img
            src={data?.url}
            alt={data?.alt}
            className="w-full object-cover min-h-[80vh]"
          />

          {(data?.name || data?.location) && (
            <div className="flex flex-col py-4 px-6 bg-white w-full">
              <p className="font-bold text-xl">{data?.name}</p>
              <p>{data?.location}</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
