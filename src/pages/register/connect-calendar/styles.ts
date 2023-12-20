import { Box, Text, styled } from '@ignite-ui-kevinsilvaa/react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const ConnectItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid $gray600',
  borderRadius: '$md',
  padding: '$4 $6',
  marginBottom: '$2',
})

export const AuthError = styled(Text, {
  color: '#F75A68',
  marginBottom: '$4',
})
