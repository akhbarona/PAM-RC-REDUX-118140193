import { ADD_NAME, DELETE_NAME } from './type';
export const tambahNama = (nama) => ({
    type: ADD_NAME,
    data: nama
});

export const deleteNama = (nama) => ({
    type: DELETE_NAME,
    data: nama
});