'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

interface RootProps extends ComponentProps<'div'> {}

interface FileInputContextProps {
  id: string
  files: File[]
  onFilesOnSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export function Root({ ...props }: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesOnSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesOnSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
