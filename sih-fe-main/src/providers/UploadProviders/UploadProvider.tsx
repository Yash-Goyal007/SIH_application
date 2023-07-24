import React, { memo, useCallback, useMemo } from 'react'
import axios from '../../api/Instance'
import AuthContext from './context'

interface UploadProviderProps {
  children: React.ReactNode
}

function UploadProvider({ children }: UploadProviderProps) {
  const uploadFile = useCallback(
    async (file: File, type: string, fileExt?: string) => {
      try {
        const response = await axios.post(
          `users/upload?fileType=${type}&fileExt=${fileExt ? fileExt : 'jpg'}`,
          file
        )

        if (!response.data?.data) throw response.data
        return response
      } catch (err: any) {
        throw new Error('File upload failed')
      }
    },
    []
  )

  const deleteFile = useCallback(async (fileName: string) => {
    try {
      const response = await axios.post(`users/delete?fileName=${fileName}`)
      if (response?.data.message === 'success') return response
      else throw new Error('not able to delete file')
    } catch (err: any) {
      throw new Error('File Delete failed')
    }
  }, [])

  const values = useMemo(
    () => ({
      uploadFile,
      deleteFile,
    }),
    [uploadFile, deleteFile]
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default memo(UploadProvider)
