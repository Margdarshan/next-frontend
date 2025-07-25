import { Base } from "@/Environments/Environment";
import axios from "axios";
import toast from 'react-hot-toast';
// import type { AppProps } from 'next/app';
// import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // don't forget this import

export const getInTouch = {
    CREATE_ABOUT: `${Base.API_BASE}/get-in-touch/`,
    GET_ABOUTS: `${Base.API_BASE}/get-in-touch/`,
    GET_ABOUT_BY_ID: (id: string) => `${Base.API_BASE}/get-in-touch/${id}/`,
    DELETE_ABOUT_BY_ID: (id: string) => `${Base.API_BASE}/get-in-touch/${id}/`,
}

export function GetInTouchAPIs() {
    const createAbout = async (formData) => {
        try {
            const response = await axios.post(getInTouch.CREATE_ABOUT, formData);
            toast.success("Your message has been sent successfully. We'll get back to you soon.");
            console.log("About created successfully:", response.data);
            
            return response.data.status === 'success' ? response.data : null;
        } catch (error) {
            console.error("Error creating Get in touch:", error);
            throw error;
        }
    };

    return { createAbout };
};