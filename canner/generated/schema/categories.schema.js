
import CannerScript from 'canner-script';

export default ({attributes}) => (
  <array keyName="categories"
    title="Categories"
    dataSource={attributes.dataSource}
    uiParams={{
      columns: [{
        title: 'Name',
        dataIndex: 'name'
      }]
    }}
  >
    <string keyName="name" title="Name" />
    <relation keyName="posts"
        ui="multipleSelect"
        title="Posts"
        relation={{type: 'toMany', to: 'posts'}}
        uiParams={{
          columns: [{
            title: 'Title',
            dataIndex: 'title'
          }]
        }}
      />
  </array>
)