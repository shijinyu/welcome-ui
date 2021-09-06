import React from 'react'
import { AttachmentIcon } from '@welcome-ui/icons.attachment'
import { CameraIcon } from '@welcome-ui/icons.camera'
import { CsvIcon } from '@welcome-ui/icons.csv'
import { DocIcon } from '@welcome-ui/icons.doc'
import { DocxIcon } from '@welcome-ui/icons.docx'
import { formatBytes } from '@welcome-ui/utils'
import { MusicIcon } from '@welcome-ui/icons.music'
import { PdfIcon } from '@welcome-ui/icons.pdf'
import { PptIcon } from '@welcome-ui/icons.ppt'
import { VideoIcon } from '@welcome-ui/icons.video'
import { XlsIcon } from '@welcome-ui/icons.xls'
import { XlsxIcon } from '@welcome-ui/icons.xlsx'
import { ZipIcon } from '@welcome-ui/icons.zip'

import { types } from './types'

export type FileType = string | File

function removeQueryString(name: string): string {
  return name.split('?')[0]
}

export function getFileName(file: FileType): string {
  if (typeof file === 'string') {
    return removeQueryString(file)
      .split('/')
      .pop()
  } else {
    return file.name
  }
}

export function getMimeType(file: FileType): string {
  if (typeof file === 'string') {
    const fileName = getFileName(file)
      .split('.')
      .pop()
    return types[fileName] || null
  } else {
    return file.type
  }
}

export function getFileSize(file: File): string {
  return file.size ? formatBytes(file.size, 0) : null
}

export function getFileIcon(file: FileType, forceFileType?: 'image' | 'audio' | 'video'): React.FC {
  const mimeType = getMimeType(file)

  if (!forceFileType && !mimeType) {
    return AttachmentIcon
  }

  if (forceFileType === 'image' || (mimeType && mimeType.startsWith('image/'))) {
    return CameraIcon
  }
  if (forceFileType === 'audio' || (mimeType && mimeType.startsWith('audio/'))) {
    return MusicIcon
  }
  if (forceFileType === 'video' || (mimeType && mimeType.startsWith('video/'))) {
    return VideoIcon
  }

  switch (mimeType) {
    case 'application/pdf':
      return PdfIcon
    case 'application/msword':
      return DocIcon
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return DocxIcon
    case 'application/vnd.ms-excel':
      return XlsIcon
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return XlsxIcon
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return PptIcon
    case 'application/zip':
    case 'application/x-bzip':
    case 'application/x-bzip2':
    case 'application/x-7z-compressed':
    case 'application/gzip':
    case 'application/vnd.rar':
      return ZipIcon
    case 'text/csv':
      return CsvIcon
    default:
      return AttachmentIcon
  }
}
