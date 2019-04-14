import React from 'react';
import {Item} from 'canner-helpers';
import {Card} from 'antd';

export default function Body() {
  return (
    <div style={{
      padding: '24px',
    }}>
      <Card>
        <Item />
      </Card>
    </div>
  )
}