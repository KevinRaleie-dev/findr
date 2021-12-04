import create from 'zustand';
import type { User } from '../api'

type UserStore = {
    token: string,
    user: User,
    login: (loginToken: string) => void; // TODO: this should set the new state of a user after login.
    logout: () => void; // TODO: this should set the new state of a user after logout.
    setCurrentUser: (user: User) => void; // TODO : this should set the new state of a user after login.
}

const defaultUser: User = {
    id: 0, 
    email: '', 
    fullName: '',
    lastName: '',
    bio: '',
    firstName: '',
    phoneNumber: ''
}

export const useUserStore = create<UserStore>((set) => ({
    token: '',
    user: defaultUser,
    login(loginToken: string) {
        set((state) => ({
            ...state,
            token: loginToken
        }));
    },
    logout() {
        set((state) => ({
            ...state,
            token: ''
        }))
    },
    setCurrentUser(user: User) {
        set((state) => ({
            ...state,
            user
        }))
    }
}))