export interface FormProps {
    type: string; 
    submitting: boolean;
    setPrompt: (data: any) => void;
    prompt: {
        post: string;
        tag: string;
    };
    handleSubmit: (e: any) => void;
};

export interface RegistrationUser{
    username?: string;
    email: string;
    password: string;
    confirmPassword?: string;
};


export interface AuthenticationComponentProps {
    isLogin: boolean;
};
