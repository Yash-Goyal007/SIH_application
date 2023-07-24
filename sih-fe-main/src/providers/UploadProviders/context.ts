import { createContext, useContext } from 'react';

interface UploadContext {
  uploadFile?: (file: File, type: string, fileExt?: string) => Promise<any>;
  deleteFile?: (fileName: string) => Promise<any>;
}

const initialValue: UploadContext = {};

const uploadContext = createContext(initialValue);

export const useUploadContext = () => useContext(uploadContext);

export default uploadContext;
