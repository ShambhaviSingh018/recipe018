import React from 'react'
import { Button, Result } from 'antd';

const PageNotFfound = () => {
  return (
    <div>
          <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
      
    </div>
  )
}

export default PageNotFfound
