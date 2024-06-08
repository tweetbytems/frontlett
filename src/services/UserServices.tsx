import axiosClient from "./Api";

export const getUserById = async (id: string) => {
  try {
    const res = await axiosClient.get(`/user/${id}`);
    return res.data;
  } catch (error) {}
};
