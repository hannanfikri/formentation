import { useNavigate } from "react-router";

export const useRoutes = () => {
    const navigate = useNavigate();
    const onBack = () => {
        navigate(-1);
    }
    return { onBack }
};