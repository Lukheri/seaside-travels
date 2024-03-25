import React from 'react'

const EmailTemplate = ({
  email,
  name,
  message,
}: {
  name: string
  email: string
  message: string
}) => {
  return (
    <div>
      <p>{message}</p>
      <br />
      <p>Regards,</p>
      <p>
        {!!name ? name : 'Anonymous user'} {`<${email}>`}
      </p>
    </div>
  )
}

export default EmailTemplate
