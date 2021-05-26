export interface User {
    name: string;
    gender: {
        male: string;
        female: string;
    }[];
    email: string;
    mobile: string;
    about: string;
}