import CannerScript, { Tabs, Default } from "canner-script";

const columns = [
  {
    title: "Title",
    dataIndex: "title"
  },
  {
    title: "Cover",
    dataIndex: "coverPicture"
  },
  {
    title: "Published",
    dataIndex: "draft",
    render: isDraft => {
      if (isDraft) return "❌";
      return "✔️";
    }
  }
];

const Posts = ({ attributes }) => (
  <array
    keyName="posts"
    ui="tableRoute"
    title="posts"
    dataSource={attributes.dataSource}
    uiParams={{
      columns
    }}
  >
    <toolbar>
      <pagination />
      <sorter
        defaultField="createDate"
        options={[
          { label: "CreateDate", field: "createDate", defaultOrder: "DESC" }
        ]}
      />
      <actions>
        {/* reference: https://www.cannercms.com/docs/schema-toolbar-tags#lt-export-gt */}
        <export
          title="Export Posts"
          filename="Posts"
          fields={[{ keyName: "title", title: "Title" }]}
        />
        {/* reference: https://www.cannercms.com/docs/schema-toolbar-tags#lt-import-gt */}
        <import
          title="Import Posts"
          filename="Posts"
          fields={[
            { keyName: "title", title: "Title" },
            { keyName: "draft", title: "Draft" },
            { keyName: "content", title: "Content" }
          ]}
        />
        {/* reference: https://www.cannercms.com/docs/schema-toolbar-tags#lt-filter-gt-1 */}
        <filter />
      </actions>
      <filter>
        <textFilter field="title" label="Title" placeholder="Post title" />
        <selectFilter
          alwaysDisplay
          label=""
          defaultOptionIndex={0}
          options={[
            {
              text: "All",
              condition: {
                condition: {}
              }
            },
            {
              text: "Published",
              condition: {
                draft: {
                  eq: false
                }
              }
            },
            {
              text: "Draft",
              condition: {
                draft: {
                  eq: true
                }
              }
            }
          ]}
        />
      </filter>
    </toolbar>
    <Tabs>
      <Default title="Basic" keyName="basic">
        <string keyName="title" title="title" required layout="horizontal" />
        <dateTime
          keyName="createDate"
          title="Create Date"
          layout="horizontal"
          required
        />
        <object
          keyName="content"
          title=""
          ui="editor"
          uiParams={{
            minHeight: "60vh"
          }}
        />
      </Default>
      <Default
        title="Options"
        injectValue={{ layout: "horizontal" }}
        keyName="options"
      >
        <boolean keyName="draft" title="Draft" />
        <image keyName="coverPicture" title="Cover Picture" />
        <boolean keyName="topLevel" title="Parent page" />
        <relation
          keyName="categories"
          ui="multipleSelect"
          title="categories"
          relation={{ type: "toMany", to: "categories" }}
          uiParams={{
            columns: [
              {
                title: "Name",
                dataIndex: "name"
              }
            ]
          }}
        />
      </Default>
    </Tabs>
  </array>
);

export default Posts;
