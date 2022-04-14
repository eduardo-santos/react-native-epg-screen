import React from 'react'
import { DynamicStatusBar } from '@components/DynamicStatusBar'
import { SafeArea } from '@components/SafeArea'

interface IScreenWrapperProps {
  children: React.ReactNode
  useSafeArea?: boolean
}

export const ScreenWrapper: React.FC<IScreenWrapperProps> = ({
  children,
  useSafeArea,
}) => {
  if (useSafeArea) {
    return (
      <SafeArea>
        <DynamicStatusBar />
        {children}
      </SafeArea>
    )
  }

  return (
    <>
      <DynamicStatusBar />
      {children}
    </>
  )
}
