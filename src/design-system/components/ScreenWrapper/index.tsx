import React from 'react'
import { DynamicStatusBar } from '@components/DynamicStatusBar'
import { SafeArea } from '@components/SafeArea'

interface IScreenWrapperProps {
  children: React.ReactNode
}

export const ScreenWrapper: React.FC<IScreenWrapperProps> = ({ children }) => {
  return (
    <SafeArea>
      <DynamicStatusBar />
      {children}
    </SafeArea>
  )
}
