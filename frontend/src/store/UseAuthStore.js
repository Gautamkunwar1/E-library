import axios from 'axios';
import { create } from "zustand";


const useAuthStore = create ((set, get)=>({
    user : null,
    loading:true,
    checkingAuth:true,
    signup: async({name,email,password,confirmPassword})=>{
        console.log(name,email,password,confirmPassword)
        try {
            set({loading:true})
            const response = await axios.post("/api/auth/signup", 
                { name, email, password }
            );
            
            set({user:response.data.user, loading:false})
        } catch (error) {
            set({loading:true})
            console.error(`Error:${error.message}`)
        }

    },
    login: async ({ email, password }) => {
        try {
            set({ loading: true });
            const response = await axios.post("/api/auth/login", 
                { email, password }
            );
    
            const userDetail = response.data.userDetail;
            set({ user: userDetail, loading: false });
    
            return { success: true, role: userDetail.role }; 
        } catch (error) {
            set({ loading: false });
            console.error(`Error: ${error.message}`);
            return { success: false };
        }
    },
    

    logout:async()=>{
        try {
            const response = await axios.post("/api/auth/logout");
            set({user:null,loading:false});
        } catch (error) {
            set({loading:false});
            console.error(`Error:${error.message}`)
        }
    },
    checkAuth:async()=>{
        try {
            const res = await res.get("/api/auth/profile");
            set({user:res.data,checkingAuth:false})
        } catch (error) {
            console.error(error.message);
            set({user:null,checkAuth:false})
        }
    }
    
}))

export default useAuthStore