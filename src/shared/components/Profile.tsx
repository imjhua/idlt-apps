import styled from '@emotion/styled/macro'

type ProfileProps = { email: string }
function Profile({ email }: ProfileProps){
  return (
    <Name>{email}</Name>
  )
}

export default Profile

const Name = styled.div`
  padding: 0 10px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: underline;
`