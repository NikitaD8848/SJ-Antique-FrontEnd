import KarigarDetailsMaster from '@/components/Master/MasterKarigar/KarigarDetailsMaster'
import { useRouter } from 'next/router'
import React from 'react'

const karigarDetailsPage = () => { 
  const router = useRouter()
  const pathcontent = router?.asPath?.split('/')
  console.log(pathcontent, 'pathcontent index')
  const key = pathcontent[pathcontent?.length - 1]
  return (
    <KarigarDetailsMaster/>
  )
  }
export default karigarDetailsPage