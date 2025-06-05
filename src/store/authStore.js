import { create } from "zustand";

const useAuthStore = create((set) => ({
  userId: ""
}))

export default useAuthStore