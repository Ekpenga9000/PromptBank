export interface FormProps {
    type: string; 
    submitting: boolean;
    setPrompt: (data: any) => void;
    prompt: {
        post: string;
        tag: string;
    };
    handleSubmit: (e: any) => void;
 }