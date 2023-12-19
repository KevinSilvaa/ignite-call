import { Button, TextInput } from '@ignite-ui-kevinsilvaa/react'
import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form>
      <TextInput size={3} prefix="ignite.com/" placeholder="Seu usuário" />
      <Button size="sm" type="submit" />
    </Form>
  )
}
