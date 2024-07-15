'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './root'

interface ControlProps extends ComponentProps<'input'> {}

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesOnSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesOnSelected(files, multiple)
  }

  return (
    <input
      className="sr-only"
      id={id}
      type="file"
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
